Feature: [Conversation][Conversations]
  E2E test for Conversation/Conversations API

  Scenario: [Create Conversation] create an conversation
    Given the Conversation service "Conversations" is available
    When I send a request to create a conversation
    Then the conversation is created

  Scenario: [List] list a page of conversations
    Given the Conversation service "Conversations" is available
    When I send a request to list the existing conversations
    Then the response contains "2" conversations

  Scenario: [List] list all the conversations
    Given the Conversation service "Conversations" is available
    When I send a request to list all the conversations
    Then the conversations list contains "3" conversations

  Scenario: [List] list all the conversations manually
    Given the Conversation service "Conversations" is available
    When I iterate manually over the conversations pages
    Then the conversations list contains "3" conversations
    Then the conversations iteration result contains the data from "2" pages

  Scenario: [List Recent] list a page of recent conversations
    Given the Conversation service "Conversations" is available
    When I send a request to list the recent conversations
    Then the response contains "2" recent conversations

  Scenario: [List Recent] list all the recent conversations
    Given the Conversation service "Conversations" is available
    When I send a request to list all the recent conversations
    Then the recent conversations list contains "3" recent conversations

  Scenario: [List Recent] list all the recent conversations manually
    Given the Conversation service "Conversations" is available
    When I iterate manually over the recent conversations pages
    Then the recent conversations list contains "3" recent conversations
    Then the recent conversations iteration result contains the data from "2" pages

  Scenario: [Get Conversation] retrieve a conversation
    Given the Conversation service "Conversations" is available
    When I send a request to retrieve a conversation
    Then the response contains the conversation details

  Scenario: [Update Conversation] update a conversation
    Given the Conversation service "Conversations" is available
    When I send a request to update a conversation
    Then the response contains the conversation details with updated data

  Scenario: [Delete Conversation] delete a conversation
    Given the Conversation service "Conversations" is available
    When I send a request to delete a conversation
    Then the delete conversation response contains no data

  Scenario: [Inject event] inject an event in a conversation
    Given the Conversation service "Conversations" is available
    When I send a request to inject an event into a conversation
    Then the event is created and injected in the conversation

  Scenario: [Inject message] inject a message in a conversation
    Given the Conversation service "Conversations" is available
    When I send a request to inject a message into a conversation
    Then the message is created and injected in the conversation

  Scenario: [Stop Conversation] stop a conversation
    Given the Conversation service "Conversations" is available
    When I send a request to stop a conversation
    Then the stop conversation response contains no data
