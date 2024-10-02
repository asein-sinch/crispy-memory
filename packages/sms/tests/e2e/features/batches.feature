Feature: [SMS][Batches]
  E2E test for SMS/Batches API

  Background:
    Given the SMS service "Batches" is available

  Scenario: [Send SMS] Send a text message
    When I send a request to send a text message
    Then the response contains the text SMS details

  Scenario: [Send SMS] Send a text message with parameters
    When I send a request to send a text message with multiple parameters
    Then the response contains the text SMS details with multiple parameters

  Scenario: [Dry Run] Perform dry run of a batch
    When I send a request to perform a dry run of a batch
    Then the response contains the calculated bodies and number of parts for all messages in the batch

  Scenario: [List Batches] List a page of batches
    When I send a request to list the SMS batches
    Then the response contains "2" SMS batches

  Scenario: [List Batches] List all the batches
    When I send a request to list all the SMS batches
    Then the SMS batches list contains "3" SMS batches

  Scenario: [List Batches] List all the batches manually
    When I iterate manually over the SMS batches pages
    Then the SMS batches list contains "3" SMS batches
    Then the SMS batches iteration result contains the data from "2" pages

  Scenario: [Get Batch] retrieve a SMS batch
    When I send a request to retrieve an SMS batch
    Then the response contains the SMS batch details

  Scenario: [Update Batch] update a SMS batch
    When I send a request to update an SMS batch
    Then the response contains the SMS batch details with updated data

  Scenario: [Replace Batch] replace a SMS batch
    When I send a request to replace an SMS batch
    Then the response contains the new SMS batch details with the provided data for replacement

  Scenario: [Cancel Batch] cancel a SMS batch
    When I send a request to cancel an SMS batch
    Then the response contains the SMS batch details with a cancelled status

  Scenario: [Send Delivery Feedback] send a delivery feedback
    When I send a request to send delivery feedbacks
    Then the delivery feedback response contains no data
