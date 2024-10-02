Feature: [Conversation][Transcoding]
  E2E test for Conversation/Transcoding API

  Scenario: [Transcode Message] transcode a location message
    Given the Conversation service "Transcoding" is available
    When I send a request to transcode a location message
    Then the location message is transcoded for all the channels
