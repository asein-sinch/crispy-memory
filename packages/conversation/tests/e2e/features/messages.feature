Feature: [Conversation][Messages]
  E2E test for Conversation/Messages API

  Scenario: [Send Message] send a message
    Given the Conversation service "Messages" is available
    When I send a request to send a message to a contact
    Then the response contains the id of the message

  Scenario: [List] list a page of messages
    Given the Conversation service "Messages" is available
    When I send a request to list the existing messages
    Then the response contains "2" messages

  Scenario: [List] list all the messages
    Given the Conversation service "Messages" is available
    When I send a request to list all the messages
    Then the messages list contains "3" messages

  Scenario: [List] list all the messages manually
    Given the Conversation service "Messages" is available
    When I iterate manually over the messages pages
    Then the messages list contains "3" messages
    Then the result contains the data from "2" pages

  Scenario: [Get Message] retrieve a message
    Given the Conversation service "Messages" is available
    When I send a request to retrieve a message
    Then the response contains the message details

  Scenario: [Update Message] update a message
    Given the Conversation service "Messages" is available
    When I send a request to update a message
    Then the response contains the message details with updated metadata

  Scenario: [Delete Message] delete a message
    Given the Conversation service "Messages" is available
    When I send a request to delete a message
    Then the delete message response contains no data
