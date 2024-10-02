Feature: [Conversation][Capability]
  E2E test for Conversation/Capability API

  Scenario: [Capability Lookup] lookup for capabilities
    Given the Conversation service "Capability" is available
    When I send a request to query a capability lookup
    Then the response contains the id of the capability lookup query
