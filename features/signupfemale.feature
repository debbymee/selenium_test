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
