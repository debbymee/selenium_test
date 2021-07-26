module.exports = {

    url: 'https://account.femaledaily.net/',
    //url elemen itu berada 

    elements: {
        loginBtn: by.xpath("//button[normalize-space()='LOGIN']")
    },

    performClick: function () {

        var selector = page.loginBtn.elements.loginBtn;
        return driver.findElement(selector).click();
    }
};
