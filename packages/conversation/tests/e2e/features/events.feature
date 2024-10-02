Feature: [Conversation][Events]
  E2E test for Conversation/Events API

  Scenario: [Send Event] send an event
    Given the Conversation service "Events" is available
    When I send a request to send a conversation event to a contact
    Then the response contains the id of the conversation event

  Scenario: [List] list a page of events
    Given the Conversation service "Events" is available
    When I send a request to list the existing conversation events
    Then the response contains "2" conversation events

  Scenario: [List] list all the events
    Given the Conversation service "Events" is available
    When I send a request to list all the conversation events
    Then the conversation events list contains "3" conversation events

  Scenario: [List] list all the events manually
    Given the Conversation service "Events" is available
    When I iterate manually over the conversation events pages
    Then the conversation events list contains "3" conversation events
    Then the conversation events iteration result contains the data from "2" pages

  Scenario: [Get Event] retrieve an event
    Given the Conversation service "Events" is available
    When I send a request to retrieve a conversation event
    Then the response contains the conversation event details

  Scenario: [Delete Event] delete an event
    Given the Conversation service "Events" is available
    When I send a request to delete a conversation event
    Then the delete conversation event response contains no data
