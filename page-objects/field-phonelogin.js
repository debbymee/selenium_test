module.exports = {

    url: 'https://account.femaledaily.net/',
    //url elemen itu berada 

    elements: {
        fieldPhoneLogin: by.xpath("//input[@id='id_field_login']")
    },

    performFill: function () {

        var selector = page.fieldPhonelogin.elements.fieldPhoneLogin;
        return driver.findElement(selector).sendKeys(shared.login.phone);
    }
};
