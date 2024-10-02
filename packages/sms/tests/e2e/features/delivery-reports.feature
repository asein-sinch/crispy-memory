Feature: [SMS][Delivery Reports]
  E2E test for SMS/Delivery Reports API

  Background:
    Given the SMS service "Delivery Reports" is available

  Scenario: [Get Delivery Report] retrieve a SMS Delivery Report of type 'summary'
    When I send a request to retrieve a summary SMS delivery report
    Then the response contains a summary SMS delivery report

  Scenario: [Get Delivery Report] retrieve a SMS Delivery Report of type 'full'
    When I send a request to retrieve a full SMS delivery report
    Then the response contains a full SMS delivery report

  Scenario: [Get Recipient Delivery Report] retrieve a SMS Delivery Report for a specific recipient
    When I send a request to retrieve a recipient's delivery report
    Then the response contains the recipient's delivery report details

  Scenario: [List] List a page of SMS Delivery Reports
    When I send a request to list the SMS delivery reports
    Then the response contains "2" SMS delivery reports

  Scenario: [List] List all the SMS Delivery Reports
    When I send a request to list all the SMS delivery reports
    Then the SMS delivery reports list contains "3" SMS delivery reports

  Scenario: [List] List all the SMS Delivery Reports manually
    When I iterate manually over the SMS delivery reports pages
    Then the SMS delivery reports list contains "3" SMS delivery reports
    Then the SMS delivery reports iteration result contains the data from "2" pages
