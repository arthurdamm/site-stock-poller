sites = 
[
    {
        url: "https://www.amazon.com/PlayStation-5-Digital/dp/B09DFHJTF5?ref_=ast_sto_dp",
        keywordsToInclude: "",
        keywordsToExclude: "currently unavailable"
    },
    {
        url: "https://www.amazon.com/PlayStation-5-Console/dp/B09DFCB66S?ref_=ast_sto_dp",
        keywordsToInclude: "",
        keywordsToExclude: "currently unavailable"
    },
    {
        url: "https://direct.playstation.com/en-us/consoles/console/playstation5-digital-edition-console.3006647",
        keywordsToInclude: "",
        keywordsToExclude: "out of stock"
    },
    {
        url: "https://direct.playstation.com/en-us/consoles/console/playstation5-console.3006646",
        keywordsToInclude: "",
        keywordsToExclude: "out of stock"
    },
    {
        url: "https://www.bestbuy.com/site/sony-playstation-5-console/6426149.p?skuId=6426149",
        keywordsToInclude: "",
        keywordsToExclude: "sold out"
    },
        {
        url: "https://www.bestbuy.com/site/sony-playstation-5-digital-edition-console/6430161.p?skuId=6430161",
        keywordsToInclude: "",
        keywordsToExclude: "sold out"
    },
    // {
    //     url: "https://www.gamestop.com/video-games/playstation-5/consoles/products/playstation-5/11108140.html",
    //     keywordsToInclude: "add to card",
    //     keywordsToExclude: "not available"
    // },
    // {
    //     url: "https://www.adorama.com/l/Computers/Gaming/Console-Gaming/PlayStation-5/PlayStation-5-Consoles",
    //     keywordsToInclude: " ",
    //     keywordsToExclude: "sold out"
    // },
    {
        url: "https://www.adorama.com/so3005718.html",
        keywordsToInclude: "",
        keywordsToExclude: "temporarily not available"
    },
    {
        url: "https://www.adorama.com/sops5de.html",
        keywordsToInclude: "",
        keywordsToExclude: "temporarily not available"
    },
    // {
    //     url: "https://www.newegg.com/p/N82E16868110292",
    //     keywordsToInclude: " ",
    //     keywordsToExclude: "sold out"
    // },
    {
        url: "https://www.antonline.com/Sony/Electronics/Gaming_Devices/Gaming_Consoles/1413479",
        keywordsToInclude: "",
        keywordsToExclude: "sold out"
    },
    {
        url: "https://www.antonline.com/Sony/Electronics/Gaming_Devices/Gaming_Consoles/1413479",
        keywordsToInclude: "",
        keywordsToExclude: "sold out"
    },
];

// 1000 = 1 second, 5000 = 5 seconds
pollFrequency = 1000*60*6;

playAlert = false;

webhookURL = "";

module.exports = {
    sites,
    pollFrequency,
    playAlert,
    webhookURL
}