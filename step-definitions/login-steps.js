module.exports = function() {
    this.Given(/^user browse login page$/, function () {
        // Write code here that turns the phrase above into concrete actions
        helpers.loadPage('https://account.femaledaily.net/');
   
    
      });

    this.Given(/^user fill phone number to login$/, function () {
        // Write code here that turns the phrase above into concrete actions
        driver.then(function(){
            return page.fieldPhonelogin.performFill();
        })
      });

    this.When(/^user click login button$/, function () {
        // Write code here that turns the phrase above into concrete actions
        driver.then(function(){
            return page.loginBtn.performClick();
        })

    });
    this.When(/^user can see verification login page$/, function () {
        // Write code here that turns the phrase above into concrete actions
    //     return driver.findElements(by.xpath("//input[@id='id_code_login']"))
            
    //     .then(function(elements){
    //         expect(elements.length).to.equal(1);
    //     })
    

      
        // driver.wait(until.elementsLocated(by.xpath("//input[@id='id_code_login']")), 10000).then(function(){
            
            //return driver.findElements(by.xpath("//input[@id='id_code_login']"));

            const expectedUrl = "https://account.femaledaily.net/verification"
            return driver.wait(until.elementLocated(by.xpath("//input[@id='id_code_login']")), 10000)
            .then(async function(element) {
                const currentUrl = await driver.getCurrentUrl();
                
                expect(expectedUrl).to.equal(currentUrl);
                expect(element.length).to.not.equal(0);
            })
        //}) 
     });
      this.When(/^user fill otp$/, function () {
        // // Write code here that turns the phrase above into concrete actions
        // callback(null, 'pending');
        driver.then(function(){
            return page.fieldOtp.performFill();
        })
      });
      
      this.When(/^user click confirm button$/, function () {
         
        driver.then(function(){
            return page.confirmBtn.performClick();
        })

      });

      
      this.Then(/^user can see main page$/, function () {
        // // Write code here that turns the phrase above into concrete actions
        // callback(null, 'pending');
          const expectedUrl = "https://femaledaily.net/"
            return driver.wait(until.elementLocated(by.xpath("//a[@id='id_logo_home']")), 10000)
            .then(async function(element) {
                const currentUrl = await driver.getCurrentUrl();
                
                expect(expectedUrl).to.equal(currentUrl);
                expect(element.length).to.not.equal(0);
            })
    
      });
}
