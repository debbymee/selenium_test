# ./features/signupfemale.feature
 
Feature: Sign up on the website
  As a user
  I want to be able to signup
 
 @success
  Scenario: User sucess to signup on the website
    Given user browse singup famale page 
    And user fill phone number to signup
    When user click signup button
    Then user can see verification page
    
@failed
Scenario: User failed to signup on the website
    Given user browse singup famale page 
    When user click signup button
    Then user see validation message

@failed
Scenario: User failed to signup on the website
    Given user browse singup famale page 
    And yser fill invalid phone number
    When user click signup button
    Then user see validation message