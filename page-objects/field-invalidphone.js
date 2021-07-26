module.exports = {

    url: 'https://account.femaledaily.net/',
    //url elemen itu berada 

    elements: {
        fieldInvalidphone: by.xpath("//input[@id='id_field_signup']")
    },

    performFill: function () {

        var selector = page.fieldInvalidphone.elements.fieldInvalidphone;
        return driver.findElement(selector).sendKeys(shared.register.invalidphone);
    }
};
