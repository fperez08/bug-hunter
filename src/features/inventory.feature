Feature: Inventory 
  As a user,
  I want to add a product to my cart from the inventory page,
  So that I can purchase it later.
    @dev
    @regression
    Scenario: Adding a product to the cart from the inventory page 
        Given I am on the "login" page
        And the "swag lab logo" should be displayed
        And I type "standard_user" in "username"
        And I type "secret_sauce" in "password"
        And I click the "login" button
        And the "app logo" should be displayed
        When I click the "sauce labs backpack" button
        Then the "shopping cart badge" should be displayed