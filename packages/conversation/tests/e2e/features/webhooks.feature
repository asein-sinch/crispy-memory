Feature: [Conversation][Webhooks]
  E2E test for Conversation/Webhooks API

  Scenario: [Create Webhook] create a webhook
    Given the Conversation service "Webhooks" is available
    When I send a request to create a conversation webhook
    Then the conversation webhook is created

  Scenario: [List Webhooks] list webhooks
    Given the Conversation service "Webhooks" is available
    When I send a request to list the conversation webhooks for an app
    Then the response contains the list of conversation webhooks

  Scenario: [Get Webhook] retrieve a webhook
    Given the Conversation service "Webhooks" is available
    When I send a request to retrieve a conversation webhook
    Then the response contains the conversation webhook details

  Scenario: [Update Webhook] update a webhook
    Given the Conversation service "Webhooks" is available
    When I send a request to update a conversation webhook
    Then the response contains the conversation webhook details with updated data

  Scenario: [Delete Webhook] delete a webhook
    Given the Conversation service "Webhooks" is available
    When I send a request to delete a conversation webhook
    Then the delete conversation webhook response contains no data
