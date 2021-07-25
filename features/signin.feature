# ./features/signin.feature
 
Feature: Sign in on the website
  As a user
  I want to be able to signin
 
 @success
  Scenario: User sucess to signin on the website
    Given user browse singin page
    And user fill email to signin
    And user fill password to signin
    When user click login button
    Then user can see dashboard page