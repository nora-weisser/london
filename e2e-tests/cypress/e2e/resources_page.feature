Feature: Resources Page

  Background:
    When I visit Home page
    Then I switch to "Resources" page

  Scenario: As a user, I can open "Resources" Page and verify UI elements
    Then I verify UI elements on Resource section

