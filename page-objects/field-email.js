module.exports = {

    url: 'https://dev-dashboard.vutura.io/signIn',
    //url elemen itu berada 

    elements: {
        fieldEmail: by.xpath("//input[@id='email-login']")
    },

    performFill: function () {

        var selector = page.fieldEmail.elements.fieldEmail;
        return driver.findElement(selector).sendKeys(shared.id.email);
    }
};
