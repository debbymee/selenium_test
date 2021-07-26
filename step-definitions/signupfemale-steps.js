module.exports = function() {

    this.Given(/^user browse singup famale page$/, function () {
        //console.log(url)
        helpers.loadPage('https://account.femaledaily.net/register');
      });

    this.Given(/^user fill phone number to signup$/, function () {
        // Write code here that turns the phrase above into concrete actions
        driver.then(function(){
            return page.fieldPhone.performFill();
        })

    });
    this.Given(/^yser fill invalid phone number$/, function () {
        // Write code here that turns the phrase above into concrete actions
        driver.then(function(){
            return page.fieldInvalidphone.performFill();
        })
      });
         

    this.When(/^user click signup button$/, function () {
        // Write code here that turns the phrase above into concrete actions
        driver.then(function(){
            return page.signupBtn.performClick();
        })


    });

    this.Then(/^user can see verification page$/, function () {
  
        const expectedUrl = "https://account.femaledaily.net/verification"
        return driver.wait(until.elementLocated(by.xpath("//p[@class='jsx-3676245989']")), 10000)
        .then(async function(element) {
            const currentUrl = await driver.getCurrentUrl();
            
            expect(expectedUrl).to.equal(currentUrl);
            expect(element.length).to.not.equal(0);
        })

        
    });

    this.Then(/^user see validation message$/, function () {
        // Write code here that turns the phrase above into concrete actions
        return driver.findElements(by.xpath("//p[@class='jsx-3320856539 desktop-taste-input-text-warning']"))
            
        .then(function(elements){
            expect(elements.length).to.not.equal(0);
        })
      });

}
