Feature: [SMS][Inbounds]
  E2E test for SMS/Inbounds API

  Background:
    Given the SMS service "Inbounds" is available

  Scenario: [Get Inbound Message] retrieve an Inbound Message
    When I send a request to retrieve an inbound message
    Then the response contains the inbound message details

  Scenario: [List] List a page of Inbound Messages
    When I send a request to list the inbound messages
    Then the response contains "2" inbound messages

  Scenario: [List] List all the Inbound Messages
    When I send a request to list all the inbound messages
    Then the inbound messages list contains "3" inbound messages

  Scenario: [List] List all the Inbound Messages manually
    When I iterate manually over the inbound messages pages
    Then the inbound messages list contains "3" inbound messages
    Then the inbound messages iteration result contains the data from "2" pages
