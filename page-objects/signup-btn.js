module.exports = {

    url: 'https://account.femaledaily.net/register',
    //url elemen itu berada 

    elements: {
        signupBtn: by.xpath("//button[normalize-space()='SIGN UP']")
    },

    performClick: function () {

        var selector = page.signupBtn.elements.signupBtn;
        return driver.findElement(selector).click();
    }
};
