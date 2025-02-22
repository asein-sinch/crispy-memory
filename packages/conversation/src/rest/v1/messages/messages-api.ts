import {
  ApiListPromise,
  buildPageResultPromise,
  createIteratorMethodsForPagination,
  PaginatedApiProperties,
  PaginationEnum,
  RequestBody,
  SinchClientParameters,
} from '@crispy-1a/sdk-client';
import {
  ConversationMessage,
  DeleteMessageRequestData,
  GetMessageRequestData,
  ListMessagesRequestData,
  Recipient,
  SendCardMessageRequestData,
  SendCarouselMessageRequestData,
  SendChoiceMessageRequestData,
  SendContactInfoMessageRequestData,
  SendListMessageRequestData,
  SendLocationMessageRequestData,
  SendMediaMessageRequestData,
  SendMessageRequest,
  SendMessageRequestData,
  SendMessageResponse,
  SendTemplateMessageRequestData,
  SendTextMessageRequestData,
  UpdateMessageRequestData,
} from '../../../models';
import { ConversationDomainApi } from '../conversation-domain-api';

export class MessagesApi extends ConversationDomainApi {

  /**
   * Initialize your interface
   *
   * @param {SinchClientParameters} sinchClientParameters - The parameters used to initialize the API Client.
   */
  constructor(sinchClientParameters: SinchClientParameters) {
    super(sinchClientParameters, 'MessagesApi');
  }

  /**
   * Delete a message
   * Delete a specific message by its ID.  Note: Removing all messages of a conversation will not automatically delete the conversation.
   * @param { DeleteMessageRequestData } data - The data to provide to the API call.
   */
  public async delete(data: DeleteMessageRequestData): Promise<any> {
    this.client = this.getSinchClient();
    data['messages_source'] = data['messages_source'] !== undefined ? data['messages_source'] : 'CONVERSATION_SOURCE';
    const getParams = this.client.extractQueryParams<DeleteMessageRequestData>(data, ['messages_source']);
    const headers: { [key: string]: string | undefined } = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };

    const body: RequestBody = '';
    const basePathUrl = `${this.client.apiClientOptions.hostname}/v1/projects/${this.client.apiClientOptions.projectId}/messages/${data['message_id']}`;

    const requestOptions
      = await this.client.prepareOptions(basePathUrl, 'DELETE', getParams, headers, body || undefined);
    const url = this.client.prepareUrl(requestOptions.hostname, requestOptions.queryParams);

    return this.client.processCall<any>({
      url,
      requestOptions,
      apiName: this.apiName,
      operationId: 'DeleteMessage',
    });
  }

  /**
   * Get a message
   * Retrieves a specific message by its ID.
   * @param { GetMessageRequestData } data - The data to provide to the API call.
   */
  public async get(data: GetMessageRequestData): Promise<ConversationMessage> {
    this.client = this.getSinchClient();
    data['messages_source'] = data['messages_source'] !== undefined ? data['messages_source'] : 'CONVERSATION_SOURCE';
    const getParams = this.client.extractQueryParams<GetMessageRequestData>(data, ['messages_source']);
    const headers: { [key: string]: string | undefined } = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };

    const body: RequestBody = '';
    const basePathUrl = `${this.client.apiClientOptions.hostname}/v1/projects/${this.client.apiClientOptions.projectId}/messages/${data['message_id']}`;

    const requestOptions = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined);
    const url = this.client.prepareUrl(requestOptions.hostname, requestOptions.queryParams);

    return this.client.processCall<ConversationMessage>({
      url,
      requestOptions,
      apiName: this.apiName,
      operationId: 'GetMessage',
    });
  }

  /**
   * List messages
   * This operation lists all messages sent or received via particular [Processing Modes](../../../../../conversation/processing-modes/).  Setting the &#x60;messages_source&#x60; parameter to &#x60;CONVERSATION_SOURCE&#x60; allows for querying messages in &#x60;CONVERSATION&#x60; mode, and setting it to &#x60;DISPATCH_SOURCE&#x60; will allow for queries of messages in &#x60;DISPATCH&#x60; mode.  Combining multiple parameters is supported for more detailed filtering of messages, but some of them are not supported depending on the value specified for &#x60;messages_source&#x60;. The description for each field will inform if that field may not be supported.  The messages are ordered by their &#x60;accept_time&#x60; property in descending order, where &#x60;accept_time&#x60; is a timestamp of when the message was enqueued by the Conversation API. This means messages received most recently will be listed first.
   * @param { ListMessagesRequestData } data - The data to provide to the API call.
   * @return {ApiListPromise<ConversationMessage>}
   */
  public list(data: ListMessagesRequestData): ApiListPromise<ConversationMessage> {
    this.client = this.getSinchClient();
    data['messages_source'] = data['messages_source'] !== undefined ? data['messages_source'] : 'CONVERSATION_SOURCE';
    const getParams = this.client.extractQueryParams<ListMessagesRequestData>(data, [
      'conversation_id',
      'contact_id',
      'app_id',
      'channel_identity',
      'start_time',
      'end_time',
      'page_size',
      'page_token',
      'view',
      'messages_source',
      'only_recipient_originated',
      'channel',
    ]);
    const headers: { [key: string]: string | undefined } = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };

    const body: RequestBody = '';
    const basePathUrl = `${this.client.apiClientOptions.hostname}/v1/projects/${this.client.apiClientOptions.projectId}/messages`;

    const requestOptionsPromise = this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined);

    const operationProperties: PaginatedApiProperties = {
      pagination: PaginationEnum.TOKEN2,
      apiName: this.apiName,
      operationId: 'ListMessages',
      dataKey: 'messages',
    };

    // Create the promise containing the response wrapped as a PageResult
    const listPromise = buildPageResultPromise<ConversationMessage>(
      this.client,
      requestOptionsPromise,
      operationProperties);

    // Add properties to the Promise to offer the possibility to use it as an iterator
    Object.assign(
      listPromise,
      createIteratorMethodsForPagination<ConversationMessage>(
        this.client, requestOptionsPromise, listPromise, operationProperties),
    );

    return listPromise as ApiListPromise<ConversationMessage>;
  }

  /**
   * Send a message
   * You can send a message from a Conversation app to a contact associated with that app. If the recipient is not associated with an existing contact, a new contact will be created.  The message is added to the active conversation with the contact if a conversation already exists. If no active conversation exists a new one is started automatically.  You can find all of your IDs and authentication credentials on the [Sinch Customer Dashboard](https://dashboard.sinch.com/convapi/overview).
   * @param { SendCardMessageRequestData<Recipient> } data - The data to provide to the API call.
   */
  public async send(
    data: SendMessageRequestData<Recipient>,
  ): Promise<SendMessageResponse> {
    return this.sendMessage(data, 'SendMessage');
  }

  /**
   * Send a card message
   * You can send a message from a Conversation app to a contact associated with that app. If the recipient is not associated with an existing contact, a new contact will be created.  The message is added to the active conversation with the contact if a conversation already exists. If no active conversation exists a new one is started automatically.  You can find all of your IDs and authentication credentials on the [Sinch Customer Dashboard](https://dashboard.sinch.com/convapi/overview).
   * @param { SendCardMessageRequestData<Recipient> } data - The data to provide to the API call.
   */
  public async sendCardMessage(
    data: SendCardMessageRequestData<Recipient>,
  ): Promise<SendMessageResponse> {
    return this.sendMessage(data, 'SendCardMessage');
  }

  /**
   * Send a carousel message
   * You can send a message from a Conversation app to a contact associated with that app. If the recipient is not associated with an existing contact, a new contact will be created.  The message is added to the active conversation with the contact if a conversation already exists. If no active conversation exists a new one is started automatically.  You can find all of your IDs and authentication credentials on the [Sinch Customer Dashboard](https://dashboard.sinch.com/convapi/overview).
   * @param { SendCarouselMessageRequestData<Recipient> } data - The data to provide to the API call.
   */
  public async sendCarouselMessage(
    data: SendCarouselMessageRequestData<Recipient>,
  ): Promise<SendMessageResponse> {
    return this.sendMessage(data, 'SendCarouselMessage');
  }

  /**
   * Send a choice message
   * You can send a message from a Conversation app to a contact associated with that app. If the recipient is not associated with an existing contact, a new contact will be created.  The message is added to the active conversation with the contact if a conversation already exists. If no active conversation exists a new one is started automatically.  You can find all of your IDs and authentication credentials on the [Sinch Customer Dashboard](https://dashboard.sinch.com/convapi/overview).
   * @param { SendChoiceMessageRequestData<Recipient> } data - The data to provide to the API call.
   */
  public async sendChoiceMessage(
    data: SendChoiceMessageRequestData<Recipient>,
  ): Promise<SendMessageResponse> {
    return this.sendMessage(data, 'SendChoiceMessage');
  }

  /**
   * Send a contact info message
   * You can send a message from a Conversation app to a contact associated with that app. If the recipient is not associated with an existing contact, a new contact will be created.  The message is added to the active conversation with the contact if a conversation already exists. If no active conversation exists a new one is started automatically.  You can find all of your IDs and authentication credentials on the [Sinch Customer Dashboard](https://dashboard.sinch.com/convapi/overview).
   * @param { SendContactInfoMessageRequestData<Recipient> } data - The data to provide to the API call.
   */
  public async sendContactInfoMessage(
    data: SendContactInfoMessageRequestData<Recipient>,
  ): Promise<SendMessageResponse> {
    return this.sendMessage(data, 'SendContactInfoMessage');
  }

  /**
   * Send a list message
   * You can send a message from a Conversation app to a contact associated with that app. If the recipient is not associated with an existing contact, a new contact will be created.  The message is added to the active conversation with the contact if a conversation already exists. If no active conversation exists a new one is started automatically.  You can find all of your IDs and authentication credentials on the [Sinch Customer Dashboard](https://dashboard.sinch.com/convapi/overview).
   * @param { SendListMessageRequestData<Recipient> } data - The data to provide to the API call.
   */
  public async sendListMessage(
    data: SendListMessageRequestData<Recipient>,
  ): Promise<SendMessageResponse> {
    return this.sendMessage(data, 'SendListMessage');
  }

  /**
   * Send a location message
   * You can send a message from a Conversation app to a contact associated with that app. If the recipient is not associated with an existing contact, a new contact will be created.  The message is added to the active conversation with the contact if a conversation already exists. If no active conversation exists a new one is started automatically.  You can find all of your IDs and authentication credentials on the [Sinch Customer Dashboard](https://dashboard.sinch.com/convapi/overview).
   * @param { SendLocationMessageRequestData<Recipient> } data - The data to provide to the API call.
   */
  public async sendLocationMessage(
    data: SendLocationMessageRequestData<Recipient>,
  ): Promise<SendMessageResponse> {
    return this.sendMessage(data, 'SendLocationMessage');
  }

  /**
   * Send a media message
   * You can send a message from a Conversation app to a contact associated with that app. If the recipient is not associated with an existing contact, a new contact will be created.  The message is added to the active conversation with the contact if a conversation already exists. If no active conversation exists a new one is started automatically.  You can find all of your IDs and authentication credentials on the [Sinch Customer Dashboard](https://dashboard.sinch.com/convapi/overview).
   * @param { SendCardMessageRequestData<Recipient> } data - The data to provide to the API call.
   */
  public async sendMediaMessage(
    data: SendMediaMessageRequestData<Recipient>,
  ): Promise<SendMessageResponse> {
    return this.sendMessage(data, 'SendMediaMessage');
  }

  /**
   * Send a template message
   * You can send a message from a Conversation app to a contact associated with that app. If the recipient is not associated with an existing contact, a new contact will be created.  The message is added to the active conversation with the contact if a conversation already exists. If no active conversation exists a new one is started automatically.  You can find all of your IDs and authentication credentials on the [Sinch Customer Dashboard](https://dashboard.sinch.com/convapi/overview).
   * @param { SendCardMessageRequestData<Recipient> } data - The data to provide to the API call.
   */
  public async sendTemplateMessage(
    data: SendTemplateMessageRequestData<Recipient>,
  ): Promise<SendMessageResponse> {
    return this.sendMessage(data, 'SendTemplateMessage');
  }

  /**
   * Send a text message
   * You can send a message from a Conversation app to a contact associated with that app. If the recipient is not associated with an existing contact, a new contact will be created.  The message is added to the active conversation with the contact if a conversation already exists. If no active conversation exists a new one is started automatically.  You can find all of your IDs and authentication credentials on the [Sinch Customer Dashboard](https://dashboard.sinch.com/convapi/overview).
   * @param { SendTextMessageRequestData<Recipient> } data - The data to provide to the API call.
   */
  public async sendTextMessage(
    data: SendTextMessageRequestData<Recipient>,
  ): Promise<SendMessageResponse> {
    return this.sendMessage(data, 'SendTextMessage');
  }

  private async sendMessage(
    data: SendMessageRequestData<Recipient>,
    operationId: string,
  ): Promise<SendMessageResponse> {
    this.client = this.getSinchClient();
    const getParams = this.client.extractQueryParams<SendMessageRequestData<Recipient>>(
      data, [] as never[]);
    const headers: { [key: string]: string | undefined } = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };

    // Special fields handling: see method for details
    const requestDataBody = this.performSendMessageRequestBodyTransformation(data.sendMessageRequestBody);

    const body: RequestBody = requestDataBody
      ? JSON.stringify(requestDataBody)
      : '{}';
    const basePathUrl = `${this.client.apiClientOptions.hostname}/v1/projects/${this.client.apiClientOptions.projectId}/messages:send`;

    const requestOptions = await this.client.prepareOptions(basePathUrl, 'POST', getParams, headers, body || undefined);
    const url = this.client.prepareUrl(requestOptions.hostname, requestOptions.queryParams);

    return this.client.processCall<SendMessageResponse>({
      url,
      requestOptions,
      apiName: this.apiName,
      operationId,
    });
  }

  performSendMessageRequestBodyTransformation(
    body: SendMessageRequest<Recipient>,
  ): SendMessageRequest<Recipient> {
    const requestDataBody = { ...body };
    // 'ttl' field can be a number or a string and needs to be formatted as for instance "10s" to be accepted by the server
    if (typeof requestDataBody.ttl === 'number') {
      requestDataBody.ttl = requestDataBody.ttl.toString();
    }
    if (typeof requestDataBody.ttl === 'string' && !requestDataBody.ttl.endsWith('s')) {
      requestDataBody.ttl = requestDataBody.ttl + 's';
    }
    return requestDataBody;
  }

  /**
   * Update message metadata
   * Update a specific message metadata by its ID.
   * @param { UpdateMessageRequestData } data - The data to provide to the API call.
   */
  public async update(data: UpdateMessageRequestData): Promise<ConversationMessage> {
    this.client = this.getSinchClient();
    data['messages_source'] = data['messages_source'] !== undefined ? data['messages_source'] : 'CONVERSATION_SOURCE';
    const getParams = this.client.extractQueryParams<UpdateMessageRequestData>(data, ['messages_source']);
    const headers: { [key: string]: string | undefined } = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };

    const body: RequestBody = data['updateMessageRequestBody']
      ? JSON.stringify(data['updateMessageRequestBody'])
      : '{}';
    const basePathUrl = `${this.client.apiClientOptions.hostname}/v1/projects/${this.client.apiClientOptions.projectId}/messages/${data['message_id']}`;

    const requestOptions
      = await this.client.prepareOptions(basePathUrl, 'PATCH', getParams, headers, body || undefined);
    const url = this.client.prepareUrl(requestOptions.hostname, requestOptions.queryParams);

    return this.client.processCall<ConversationMessage>({
      url,
      requestOptions,
      apiName: this.apiName,
      operationId: 'UpdateMessageMetadata',
    });
  }

}
