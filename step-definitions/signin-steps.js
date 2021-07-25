module.exports = function() {

    this.Given(/^user browse singin page$/, function () {
        helpers.loadingPage('https://dev-dashboard.vutura.io/signIn');
      });

    
    this.Given(/^user fill email to signin$/, function () {
        driver.then(function(){
            return page.fieldEmail.performFill();
        })
      });

    this.Given(/^user fill password to signin$/, function () {
        
      });

    this.When(/^user click login button$/, function () {

      });

    this.Then(/^user can see dashboard page$/, function () {

      });


}