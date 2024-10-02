Feature: [Conversation][TemplatesV1]
  E2E test for Conversation/Webhooks API

  Scenario: [Create Template] create a template
    Given the Conversation service "TemplatesV1" is available
    When I send a request to create a conversation template with the V1 API
    Then the conversation template V1 is created

  Scenario: [List Templates] list templates
    Given the Conversation service "TemplatesV1" is available
    When I send a request to list the conversation templates with the V1 API
    Then the response contains the list of conversation templates with the V1 structure

  Scenario: [Get Template] retrieve a template
    Given the Conversation service "TemplatesV1" is available
    When I send a request to retrieve a conversation template with the V1 API
    Then the response contains the conversation template details with the V1 structure

  Scenario: [Update Template] update a template
    Given the Conversation service "TemplatesV1" is available
    When I send a request to update a conversation template with the V1 API
    Then the response contains the conversation template details with updated data with the V1 structure

  Scenario: [Delete Template] delete a template
    Given the Conversation service "TemplatesV1" is available
    When I send a request to delete a conversation template with the V1 API
    Then the delete conversation template response V1 contains no data
