import {
  calculateMD5,
  calculateSignature,
  calculateWebhookSignature,
  computeSignedData,
  generateAuthorizationHeader,
  validateAuthenticationHeader,
  validateSignatureHeader,
  validateWebhookSignature,
} from '../../src';

describe('Authorization validation', () => {

  const APPLICATION_KEY = 'app-key';
  const APPLICATION_SECRET = 'app-secret';
  const PATH = '/webhook';
  const BODY = '{"id":"018d2104-aaa-bbbb-1234","price":{"amount":0.0308},"rate":{"amount":0.0}}';
  const METHOD = 'POST';
  const CONTENT_TYPE = 'application/json; charset=utf-8';
  const X_TIMESTAMP = 'x-timestamp:2024-01-19T09:19:28.9372196Z';

  it('should calculate the content-MD5 for the stringified JSON', () => {
    const body = {
      identity: {
        type: 'number',
        endpoint: '+33444555666',
      },
      method: 'sms',
    };
    expect(calculateMD5(JSON.stringify(body))).toBe('RkD29EocJh6t7zr5QfKM4g==');
  });

  it('should calculate the signature', () => {
    const secret = btoa('my-secret');
    const stringToSign = 'pKXhl9sOsUjClws1oANArA==';
    expect(calculateSignature(secret, stringToSign)).toBe('1vZeB9AYiJthOvaZeZFhOxZWLSqHHFWzFw7AGjrTtmk=');
  });

  it('should generate the authorization header', () => {
    const header = generateAuthorizationHeader(
      METHOD,
      BODY,
      CONTENT_TYPE,
      X_TIMESTAMP,
      PATH,
      APPLICATION_KEY,
      APPLICATION_SECRET,
    );
    expect(header).toEqual('Application app-key:p7hUz20oz16Fhfogs4Z0X+VA/Nhuu505I1alXYqwlKw=');
  });

  it('should validate the authorization header for "application" authorization', () => {
    const headers = {
      'Content-Type': CONTENT_TYPE,
      'x-timestamp': X_TIMESTAMP,
      'authorization': 'Application app-key:wC8XcoLQ22cxrOsUqqbWk+LHJ82wtqR/IgeIp9NG8LY=',
    };

    const validated = validateAuthenticationHeader(
      APPLICATION_KEY,
      APPLICATION_SECRET,
      headers,
      BODY,
      PATH,
      METHOD,
    );

    expect(validated).toBeTruthy();
  });

  it('should validate the authorization header for "basic" authorization', () => {
    const headers = {
      'Content-Type': CONTENT_TYPE,
      'x-timestamp': X_TIMESTAMP,
      'authorization': `Basic ${APPLICATION_KEY}:${APPLICATION_SECRET}`,
    };

    const validated = validateAuthenticationHeader(
      APPLICATION_KEY,
      APPLICATION_SECRET,
      headers,
      PATH,
      BODY,
      METHOD,
    );

    expect(validated).toBeTruthy();
  });

  it('should throw an exception when trying to validate an authorization header with an unsupported scheme', () => {
    const headers = {
      'Content-Type': CONTENT_TYPE,
      'x-timestamp': X_TIMESTAMP,
      'authorization': 'Unknown app-key:p7hUz20oz16Fhfogs4Z0X+VA/Nhuu505I1alXYqwlKw=',
    };
    const validated = validateAuthenticationHeader(
      APPLICATION_KEY,
      APPLICATION_SECRET,
      headers,
      PATH,
      BODY,
      METHOD,
    );

    expect(validated).toBeFalsy();
  });

  it('should throw an exception when trying to validate a malformatted authorization header', () => {
    const headers = {
      'Content-Type': CONTENT_TYPE,
      'x-timestamp': X_TIMESTAMP,
      'authorization': `Application  ${APPLICATION_KEY}:${APPLICATION_SECRET}`,
    };
    const validated = validateAuthenticationHeader(
      APPLICATION_KEY,
      APPLICATION_SECRET,
      headers,
      PATH,
      BODY,
      METHOD,
    );

    expect(validated).toBeFalsy();
  });

  it('should throw an exception when trying to validate a malformed value in the authorization header', () => {
    const headers = {
      'Content-Type': CONTENT_TYPE,
      'x-timestamp': X_TIMESTAMP,
      'authorization': `Application ${APPLICATION_KEY}${APPLICATION_SECRET}`,
    };
    const validated = validateAuthenticationHeader(
      APPLICATION_KEY,
      APPLICATION_SECRET,
      headers,
      PATH,
      BODY,
      METHOD,
    );

    expect(validated).toBeFalsy();
  });

  it('should throw an exception when trying to validate a malformed value in the basic authorization header', () => {
    const headers = {
      'Content-Type': CONTENT_TYPE,
      'x-timestamp': X_TIMESTAMP,
      'authorization': `Basic ${APPLICATION_KEY}${APPLICATION_SECRET}`,
    };
    const validated = validateAuthenticationHeader(
      APPLICATION_KEY,
      APPLICATION_SECRET,
      headers,
      PATH,
      BODY,
      METHOD,
    );

    expect(validated).toBeFalsy();
  });

  it('should throw an exception when trying to validate an basic authorization with a wrong value', () => {
    const headers = {
      'Content-Type': CONTENT_TYPE,
      'x-timestamp': X_TIMESTAMP,
      'authorization': `Basic ${APPLICATION_KEY}:wrong-app-secret`,
    };
    const validated = validateAuthenticationHeader(
      APPLICATION_KEY,
      APPLICATION_SECRET,
      headers,
      PATH,
      BODY,
      METHOD,
    );

    expect(validated).toBeFalsy();
  });

  it('should validate the signature header when valid', () => {
    const headers = {
      'X-Sinch-Signature': 'b93021e0182c2772dbcdf4e8983ae8f409e78c3b',
    };
    const secret = 'my-callback-secret';
    // eslint-disable-next-line max-len
    const stringToSign = '{"eventId":"01hpa0mww4m79q8j2dwn3ggbgz","timestamp":"2024-02-10T17:22:09.412722588","projectId":"37b62a7b-0177-abcd-efgh-e10f848de123","resourceId":"+17818510001","resourceType":"ACTIVE_NUMBER","eventType":"DEPROVISIONING_FROM_VOICE_PLATFORM","status":"SUCCEEDED","failureCode":null}';
    const validated = validateSignatureHeader(
      secret,
      headers,
      stringToSign,
    );
    expect(validated).toBeTruthy();
  });

  it('should reject the signature header when missing', () => {
    const headers = {};
    const secret = 'my-callback-secret';
    // eslint-disable-next-line max-len
    const stringToSign = '{"eventId":"01hpa0mww4m79q8j2dwn3ggbgz","timestamp":"2024-02-10T17:22:09.412722588","projectId":"37b62a7b-0177-abcd-efgh-e10f848de123","resourceId":"+17818510001","resourceType":"ACTIVE_NUMBER","eventType":"DEPROVISIONING_FROM_VOICE_PLATFORM","status":"SUCCEEDED","failureCode":null}';
    const validated = validateSignatureHeader(
      secret,
      headers,
      stringToSign,
    );
    expect(validated).toBeFalsy();
  });

  it('should reject the signature header when invalid', () => {
    const headers = {
      'X-Sinch-Signature': 'invalid-signature',
    };
    const secret = 'my-callback-secret';
    // eslint-disable-next-line max-len
    const stringToSign = '{"eventId":"01hpa0mww4m79q8j2dwn3ggbgz","timestamp":"2024-02-10T17:22:09.412722588","projectId":"37b62a7b-0177-abcd-efgh-e10f848de123","resourceId":"+17818510001","resourceType":"ACTIVE_NUMBER","eventType":"DEPROVISIONING_FROM_VOICE_PLATFORM","status":"SUCCEEDED","failureCode":null}';
    const validated = validateSignatureHeader(
      secret,
      headers,
      stringToSign,
    );
    expect(validated).toBeFalsy();
  });

});

describe('Webhook signature (Conversation API)', () => {

  // eslint-disable-next-line max-len
  const CONVERSATION_BODY = '{"app_id":"01HNB3364PWBBG2GZZWVVT3DD2","accepted_time":"2024-10-02T10:17:03.182Z","event_time":"2024-10-02T10:17:03.231Z","project_id":"b8bae3c6-e7df-422b-9401-8ae3ee3e0add","message_delivery_report":{"message_id":"01J96BQDEEWGPYZ7TPJJ65VZZQ","conversation_id":"01J56409H2G38JK3E4GCGJ9JMN","status":"QUEUED_ON_CHANNEL","channel_identity":{"channel":"SMS","identity":"33662162466","app_id":""},"contact_id":"01HY0X6CJZ53XQ9R2GZE4P6ZEW","metadata":"","processing_mode":"CONVERSATION"},"message_metadata":"","correlation_id":""}';
  const NONCE = '01J96BQDWFSB6PHAMPT96V2ZF1';
  const TIMESTAMP = '1727864223';
  const APP_SECRET = '';
  const VALID_SIGNATURE = 'TLBhB2nx31MVzaygSMmUmkpp4t2lbY8W3k1xr5ISfSs=';

  it('should compute the signed data', () => {
    const body = 'body';
    const nonce = 'nonce';
    const timestamp = 'timestamp';
    const signedData = computeSignedData(body, nonce, timestamp);
    expect(signedData).toEqual('body.nonce.timestamp');
  });

  it('should calculate the right signature', () => {
    const signedData = computeSignedData(CONVERSATION_BODY, NONCE, TIMESTAMP);
    const signature = calculateWebhookSignature(signedData, APP_SECRET);

    expect(signature).toEqual(VALID_SIGNATURE);
  });

  it('should validate the signature header when valid', () => {
    const headers = {
      'x-sinch-webhook-signature': VALID_SIGNATURE,
      'x-sinch-webhook-signature-algorithm': 'HmacSHA256',
      'x-sinch-webhook-signature-nonce': NONCE,
      'x-sinch-webhook-signature-timestamp': TIMESTAMP,
    };
    const validated = validateWebhookSignature(
      APP_SECRET,
      headers,
      CONVERSATION_BODY,
    );
    expect(validated).toBeTruthy();
  });

  it('should reject the signature header when missing', () => {
    const headers = {};
    const validated = validateWebhookSignature(
      APP_SECRET,
      headers,
      CONVERSATION_BODY,
    );
    expect(validated).toBeFalsy();
  });

  it('should reject the signature header when invalid', () => {
    const headers = {
      'x-sinch-webhook-signature': 'invalid-signature',
      'x-sinch-webhook-signature-algorithm': 'HmacSHA256',
      'x-sinch-webhook-signature-nonce': NONCE,
      'x-sinch-webhook-signature-timestamp': TIMESTAMP,
    };
    const validated = validateWebhookSignature(
      APP_SECRET,
      headers,
      CONVERSATION_BODY,
    );
    expect(validated).toBeFalsy();
  });

});
