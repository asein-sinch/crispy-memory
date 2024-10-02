Feature: [Conversation][Contacts]
  E2E test for Conversation/Contacts API

  Scenario: [Create Contact] create an contact
    Given the Conversation service "Contacts" is available
    When I send a request to create an contact
    Then the contact is created

  Scenario: [List] list a page of contacts
    Given the Conversation service "Contacts" is available
    When I send a request to list the existing contacts
    Then the response contains "2" contacts

  Scenario: [List] list all the contacts
    Given the Conversation service "Contacts" is available
    When I send a request to list all the contacts
    Then the contacts list contains "3" contacts

  Scenario: [List] list all the contacts manually
    Given the Conversation service "Contacts" is available
    When I iterate manually over the contacts pages
    Then the contacts list contains "3" contacts
    Then the contacts iteration result contains the data from "2" pages

  Scenario: [Get Contact] retrieve a contact
    Given the Conversation service "Contacts" is available
    When I send a request to retrieve a contact
    Then the response contains the contact details

  Scenario: [Update Contact] update a contact
    Given the Conversation service "Contacts" is available
    When I send a request to update a contact
    Then the response contains the contact details with updated data

  Scenario: [Delete Contact] delete a contact
    Given the Conversation service "Contacts" is available
    When I send a request to delete a contact
    Then the delete contact response contains no data

  Scenario: [Merge two Contacts] merge two contacts
    Given the Conversation service "Contacts" is available
    When I send a request to merge a source contact to a destination contact
    Then the response contains data from the destination contact and from the source contact

  Scenario: [Get Channel Profile] Get channel profile from contact ID
    Given the Conversation service "Contacts" is available
    When I send a request to get the channel profile of a contact ID
    Then the response contains the profile of the contact on the requested channel
