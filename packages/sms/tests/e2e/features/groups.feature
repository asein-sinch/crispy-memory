Feature: [SMS][Groups]
  E2E test for SMS/Groups API

  Background:
    Given the SMS service "Groups" is available

  Scenario: [Create Group] create a Group
    When I send a request to create an SMS group
    Then the response contains the SMS group details

  Scenario: [Get Group] retrieve a Group
    When I send a request to retrieve an SMS group
    Then the response contains the SMS group details

  Scenario: [List] list a page of groups
    When I send a request to list the existing SMS groups
    Then the response contains "2" SMS groups

  Scenario: [List] list all the groups
    When I send a request to list all the SMS groups
    Then the SMS groups list contains "3" SMS groups

  Scenario: [List] list all the groups manually
    When I iterate manually over the SMS groups pages
    Then the SMS groups list contains "3" SMS groups
    Then the SMS groups iteration result contains the data from "2" pages

  Scenario: [Update Group] update a Group
    When I send a request to update an SMS group
    Then the response contains the updated SMS group details

  Scenario: [Update Group] update a Group to remove the name
    When I send a request to update an SMS group to remove its name
    Then the response contains the updated SMS group details where the name has been removed

  Scenario: [Replace Group] replace a Group
    When I send a request to replace an SMS group
    Then the response contains the replaced SMS group details

  Scenario: [Delete Group] delete a Group
    When I send a request to delete an SMS group
    Then the delete SMS group response contains no data

  Scenario: [List members] list members of a Group
    When I send a request to list the members of an SMS group
    Then the response contains the phone numbers of the SMS group
