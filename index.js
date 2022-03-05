const open = require("open");
const puppeteer = require("puppeteer");
const axios = require('axios')

const {sites, pollFrequency, playAlert, webhookURL} = require("./configs");
const { log, err } = require('./util');


var sitesFound = 0;

function initializeSites() {
    sites.forEach((site) =>{
        site.tryCount = 1;
        site.run = true;
    });
}

function siteFound(site) {
    // open the site
    open(site.url);

    // alert the user in console
    const message = `\nFound the correct keywords to include/exclude on site: ${site.url}\n`
    log(message);

    // hit webhook if exists
    if (webhookURL) {
        axios.post(webhookURL, { text: message });
    }
}

async function pollSiteAndCheckForKeywords(browser, site) {
    log(`Polling ${site.url} for the ${site.tryCount} time`);

    const context = await browser.createIncognitoBrowserContext();
    const page = await context.newPage();
    await page.setUserAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36');
    const url = site.url;
    const response = await page.goto(url,{waitUntil: 'load', timeout: 0});
    const responseBody = await response.text();
    const responseStatus = await response.status();


    site.tryCount += 1;
    if (responseStatus === 200){
        if (responseBody.toLowerCase().indexOf(site.keywordsToInclude.toLowerCase() > 0)){
            if ( !site.keywordsToExclude || (site.keywordsToExclude && responseBody.toLowerCase().indexOf(site.keywordsToExclude.toLowerCase()) === -1) ) {
                // mark site as found - play sound, hit webhook, mark site as found
                site.run = false;
                context.close();
                await siteFound(site);
                return 1;
            }
        }
    } else {
        err(`Received code ${responseStatus} for ${site}`)
    }
    context.close();
    return 0;
}


async function runSitePolling(browser) {
    log('\n\n*******Running next set of polling*******\n')
    await Promise.all(sites.map(async (site) => {
        if (site.run) {
            sitesFound += await pollSiteAndCheckForKeywords(browser, site);
        }
     }));

    if (sitesFound < sites.length) {
        setTimeout(runSitePolling, pollFrequency + getRandomInt(1000*60), browser);
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}



(async function run(){
    try {
        initializeSites();
        const browser = await puppeteer.launch({headless:true});
        runSitePolling(browser);
    } catch (e) {
        err(e.message);
    }
})()