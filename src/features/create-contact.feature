Feature: As a user I expect to be able to create contacts
    @dev
    Scenario: As a user I expect to be able to see the create contacts header
        Given I am on the "home" page
        When  I click the "create" button
        Then the "create contact header" should be displayed
        And the "create contact header" should contain the text "Create Contact"

    @dev
    Scenario: As a user I expect to be able to create a contact
        Given I am on the "create contact" page
        When  I fill the form with "contact-data"
        And I click the "save" button
        Then the element with text "Francisco Garcia" should be displayed