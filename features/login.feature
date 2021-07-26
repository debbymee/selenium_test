# ./features/login.feature
 
Feature: Login on the website
  As a user
  I want to be able to login
 
 @success
  Scenario: User sucess to login on the website
    Given user browse login page 
    And user fill phone number to login
    When user click login button
    And user can see verification login page
    And user fill otp
    And user click confirm button
    Then user can see main page