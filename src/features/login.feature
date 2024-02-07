Feature: User Login
  As a user,
  I want to login with valid credentials,
  So that I can access my account.
    @dev
    @smoke
    @regression
    Scenario: Successfull login with valid credentials
        Given I am on the "login" page
        And the "swag lab logo" should be displayed
        And I type "standard_user" in "username"
        And I type "secret_sauce" in "password"
        When I click the "login" button
        Then the "app logo" should be displayed