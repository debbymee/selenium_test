module.exports = {

    url: 'https://account.femaledaily.net/',
    //url elemen itu berada 

    elements: {
        fieldPhone: by.xpath("//input[@id='id_field_signup']")
    },

    performFill: function () {

        var selector = page.fieldPhone.elements.fieldPhone;
        return driver.findElement(selector).sendKeys(shared.register.phone);
    }
};
