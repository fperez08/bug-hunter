Feature: As a user I expect to be able to create contacts
    @dev
    Scenario: As a user I expect to be able to create a new contact
        Given I am on the "home" page
        When  I click the "create" button
        Then the "create contact header" should be displayed