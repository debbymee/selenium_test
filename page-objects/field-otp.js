module.exports = {

    url: 'https://account.femaledaily.net/verification',
    //url elemen itu berada 

    elements: {
        fieldOtp: by.xpath("//input[@id='id_code_login']")
    },

    performFill: function () {

        var selector = page.fieldOtp.elements.fieldOtp;
        return driver.findElement(selector).sendKeys(shared.login.otp);
    }
};
