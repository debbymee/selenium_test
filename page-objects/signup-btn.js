module.exports = {

    url: 'https://account.femaledaily.net/',
    //url elemen itu berada 

    elements: {
        fieldPhone: by.xpath("//button[normalize-space()='SIGN UP']']")
    },

    performClick: function () {

        var selector = page.signupBtn.elements.signupBtn;
        return driver.findElement(selector).click();
    }
};
