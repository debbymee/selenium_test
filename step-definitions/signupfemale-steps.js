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
         

    this.When(/^user click signup button$/, function () {
        // Write code here that turns the phrase above into concrete actions
        driver.then(function(){
            return page.signupBtn.performClick();
        })


    });

    this.Then(/^user can see verification page$/, function () {
        // Write code here that turns the phrase above into concrete actions
        return driver.findElements(by.xpath("//p[normalize-space()='+82118029700']"))
            
        .then(function(elements){
            // elements = [] / elements = [abc]
            expect(elements.length).to.equal(1);
        })
      
    });


}
