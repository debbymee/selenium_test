module.exports = {

    url: 'https://account.femaledaily.net/verification',
    //url elemen itu berada 

    elements: {
        confirmBtn: by.xpath("//button[normalize-space()='CONFIRM']")
    },

    performClick: function () {

        var selector = page.confirmBtn.elements.confirmBtn;
        return driver.findElement(selector).click();
    }
};
