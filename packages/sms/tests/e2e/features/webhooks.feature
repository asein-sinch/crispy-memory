Feature: [SMS][Webhooks events]
  E2E test for SMS/Webhooks events

  Background:
    Given the SMS Webhooks handler is available

  Scenario: [Incoming SMS] incoming SMS on a Sinch number
    When I send a request to trigger an "incoming SMS" event
    Then the SMS event describes an "incoming SMS" event

  Scenario: [Delivery Report] batch delivery report event
    When I send a request to trigger an "SMS delivery report" event
    Then the SMS event describes an "SMS delivery report" event

  Scenario: [Delivery Report] recipient delivery report event - status Delivered
    When I send a request to trigger an "SMS recipient delivery report" event with the status "Delivered"
    Then the SMS event describes an SMS recipient delivery report event with the status "Delivered"

  Scenario: [Delivery Report] recipient delivery report event - status Aborted
    When I send a request to trigger an "SMS recipient delivery report" event with the status "Aborted"
    Then the SMS event describes an SMS recipient delivery report event with the status "Aborted"
