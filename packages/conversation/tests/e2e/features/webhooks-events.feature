Feature: [Conversation][Webhooks events]
  E2E test for Conversation/Webhooks events

  Scenario: [CAPABILITY] result of an asynchronous capability lookup query
    Given the Conversation Webhooks handler is available
    When I send a request to trigger a "CAPABILITY" event
    Then the header of the Conversation event "CAPABILITY" contains a valid signature
    Then the Conversation event describes a "CAPABILITY" event type

  Scenario: [CONTACT_CREATE] a contact has been created
    Given the Conversation Webhooks handler is available
    When I send a request to trigger a "CONTACT_CREATE" event
    Then the header of the Conversation event "CONTACT_CREATE" contains a valid signature
    Then the Conversation event describes a "CONTACT_CREATE" event type

  Scenario: [CONTACT_DELETE] a contact has been deleted
    Given the Conversation Webhooks handler is available
    When I send a request to trigger a "CONTACT_DELETE" event
    Then the header of the Conversation event "CONTACT_DELETE" contains a valid signature
    Then the Conversation event describes a "CONTACT_DELETE" event type

  Scenario: [CONTACT_MERGE] two contacts have been merged
    Given the Conversation Webhooks handler is available
    When I send a request to trigger a "CONTACT_MERGE" event
    Then the header of the Conversation event "CONTACT_MERGE" contains a valid signature
    Then the Conversation event describes a "CONTACT_MERGE" event type

  Scenario: [CONTACT_UPDATE] a contact has been updated
    Given the Conversation Webhooks handler is available
    When I send a request to trigger a "CONTACT_UPDATE" event
    Then the header of the Conversation event "CONTACT_UPDATE" contains a valid signature
    Then the Conversation event describes a "CONTACT_UPDATE" event type

  Scenario: [CONVERSATION_DELETE] a conversation has been deleted
    Given the Conversation Webhooks handler is available
    When I send a request to trigger a "CONVERSATION_DELETE" event
    Then the header of the Conversation event "CONVERSATION_DELETE" contains a valid signature
    Then the Conversation event describes a "CONVERSATION_DELETE" event type

  Scenario: [CONVERSATION_START] a conversation has been started
    Given the Conversation Webhooks handler is available
    When I send a request to trigger a "CONVERSATION_START" event
    Then the header of the Conversation event "CONVERSATION_START" contains a valid signature
    Then the Conversation event describes a "CONVERSATION_START" event type

  Scenario: [CONVERSATION_STOP] a conversation has been stopped
    Given the Conversation Webhooks handler is available
    When I send a request to trigger a "CONVERSATION_STOP" event
    Then the header of the Conversation event "CONVERSATION_STOP" contains a valid signature
    Then the Conversation event describes a "CONVERSATION_STOP" event type

  Scenario: [EVENT_DELIVERY] an event failed to be delivered
    Given the Conversation Webhooks handler is available
    When I send a request to trigger a "EVENT_DELIVERY" event with a "FAILED" status
    Then the header of the Conversation event "EVENT_DELIVERY" with a "FAILED" status contains a valid signature
    Then the Conversation event describes a "EVENT_DELIVERY" event type
    Then the Conversation event describes a FAILED event delivery status and its reason

  Scenario: [EVENT_DELIVERY] an event has been delivered
    Given the Conversation Webhooks handler is available
    When I send a request to trigger a "EVENT_DELIVERY" event with a "DELIVERED" status
    Then the header of the Conversation event "EVENT_DELIVERY" with a "DELIVERED" status contains a valid signature
    Then the Conversation event describes a "EVENT_DELIVERY" event type

  Scenario: [EVENT_INBOUND] an inbound end from an end user is delivered to the API client
    Given the Conversation Webhooks handler is available
    When I send a request to trigger a "EVENT_INBOUND" event
    Then the header of the Conversation event "EVENT_INBOUND" contains a valid signature
    Then the Conversation event describes a "EVENT_INBOUND" event type

  Scenario: [MESSAGE_DELIVERY] a message failed to be delivered
    Given the Conversation Webhooks handler is available
    When I send a request to trigger a "MESSAGE_DELIVERY" event with a "FAILED" status
    Then the header of the Conversation event "MESSAGE_DELIVERY" with a "FAILED" status contains a valid signature
    Then the Conversation event describes a "MESSAGE_DELIVERY" event type
    Then the Conversation event describes a FAILED message delivery status and its reason

  Scenario: [MESSAGE_DELIVERY] a message has been queued
    Given the Conversation Webhooks handler is available
    When I send a request to trigger a "MESSAGE_DELIVERY" event with a "QUEUED_ON_CHANNEL" status
    Then the header of the Conversation event "MESSAGE_DELIVERY" with a "QUEUED_ON_CHANNEL" status contains a valid signature
    Then the Conversation event describes a "MESSAGE_DELIVERY" event type

  Scenario: [MESSAGE_INBOUND] a contact message is delivered to the API client
    Given the Conversation Webhooks handler is available
    When I send a request to trigger a "MESSAGE_INBOUND" event
    Then the header of the Conversation event "MESSAGE_INBOUND" contains a valid signature
    Then the Conversation event describes a "MESSAGE_INBOUND" event type

  Scenario: [MESSAGE_INBOUND_SMART_CONVERSATION_REDACTION] a contact message is delivered to the API client and redacted by the ML API
    Given the Conversation Webhooks handler is available
    When I send a request to trigger a "MESSAGE_INBOUND_SMART_CONVERSATION_REDACTION" event
    Then the header of the Conversation event "MESSAGE_INBOUND_SMART_CONVERSATION_REDACTION" contains a valid signature
    Then the Conversation event describes a "MESSAGE_INBOUND_SMART_CONVERSATION_REDACTION" event type

  Scenario: [MESSAGE_SUBMIT] a media message has been submitted to a channel
    Given the Conversation Webhooks handler is available
    When I send a request to trigger a "MESSAGE_SUBMIT" event for a "media" message
    Then the header of the Conversation event "MESSAGE_SUBMIT" for a "media" message contains a valid signature
    Then the Conversation event describes a "MESSAGE_SUBMIT" event type for a "media" message

  Scenario: [MESSAGE_SUBMIT] a text message has been submitted to a channel
    Given the Conversation Webhooks handler is available
    When I send a request to trigger a "MESSAGE_SUBMIT" event for a "text" message
    Then the header of the Conversation event "MESSAGE_SUBMIT" for a "text" message contains a valid signature
    Then the Conversation event describes a "MESSAGE_SUBMIT" event type for a "text" message

  Scenario: [SMART_CONVERSATIONS] a media message has been analyzed by the ML API
    Given the Conversation Webhooks handler is available
    When I send a request to trigger a "SMART_CONVERSATIONS" event for a "media" message
    Then the header of the Conversation event "SMART_CONVERSATIONS" for a "media" message contains a valid signature
    Then the Conversation event describes a "SMART_CONVERSATIONS" event type for a "media" message

  Scenario: [SMART_CONVERSATIONS] a text message has been analyzed by the ML API
    Given the Conversation Webhooks handler is available
    When I send a request to trigger a "SMART_CONVERSATIONS" event for a "text" message
    Then the header of the Conversation event "SMART_CONVERSATIONS" for a "text" message contains a valid signature
    Then the Conversation event describes a "SMART_CONVERSATIONS" event type for a "text" message
