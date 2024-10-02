Feature: [Conversation][TemplatesV2]
  E2E test for Conversation/TemplatesV2 API

  Scenario: [Create Template] create a template
    Given the Conversation service "TemplatesV2" is available
    When I send a request to create a conversation template with the V2 API
    Then the conversation template V2 is created

  Scenario: [List Templates] list templates
    Given the Conversation service "TemplatesV2" is available
    When I send a request to list the conversation templates with the V2 API
    Then the response contains the list of conversation templates with the V2 structure
    Then for each templateV2 in the templateV2 list response, it defines a translation with version "latest" on top of each current translation version

  Scenario: [List Translations] list translations for a template
    Given the Conversation service "TemplatesV2" is available
    When I send a request to list the translations for a template with the V2 API
    Then the response contains the list of translations for a template with the V2 structure

  Scenario: [Get Template] retrieve a template
    Given the Conversation service "TemplatesV2" is available
    When I send a request to retrieve a conversation template with the V2 API
    Then the response contains the conversation template details with the V2 structure

  Scenario: [Update Template] update a template
    Given the Conversation service "TemplatesV2" is available
    When I send a request to update a conversation template with the V2 API
    Then the response contains the conversation template details with updated data with the V2 structure

  Scenario: [Delete Template] delete a template
    Given the Conversation service "TemplatesV2" is available
    When I send a request to delete a conversation template with the V2 API
    Then the delete conversation template response V2 contains no data
