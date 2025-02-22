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
  Conversation,
  ConversationRecentMessage,
  CreateConversationRequestData,
  DeleteConversationRequestData,
  GetConversationRequestData,
  InjectEventRequestData,
  InjectEventResponse,
  InjectMessageRequestData,
  ListConversationsRequestData,
  ListRecentConversationsRequestData,
  StopActiveConversationRequestData,
  UpdateConversationRequestData,
} from '../../../models';
import { ConversationDomainApi } from '../conversation-domain-api';

export class ConversationApi extends ConversationDomainApi {

  /**
   * Initialize your interface
   *
   * @param {SinchClientParameters} sinchClientParameters - The parameters used to initialize the API Client.
   */
  constructor(sinchClientParameters: SinchClientParameters) {
    super(sinchClientParameters, 'ConversationApi');
  }

  /**
   * Create a conversation
   * Creates a new empty conversation. It is generally not needed to create a conversation explicitly since sending or receiving a message automatically creates a new conversation if it does not already exist between the given app and contact. Creating empty conversation is useful if the metadata of the conversation should be populated when the first message in the conversation is a contact message or the first message in the conversation comes out-of-band and needs to be injected with InjectMessage endpoint.
   * @param { CreateConversationRequestData } data - The data to provide to the API call.
   */
  public async create(data: CreateConversationRequestData): Promise<Conversation> {
    this.client = this.getSinchClient();
    const getParams = this.client.extractQueryParams<CreateConversationRequestData>(data, [] as never[]);
    const headers: { [key: string]: string | undefined } = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };

    const body: RequestBody
      = data['createConversationRequestBody'] ? JSON.stringify(data['createConversationRequestBody']) : '{}';
    const basePathUrl = `${this.client.apiClientOptions.hostname}/v1/projects/${this.client.apiClientOptions.projectId}/conversations`;

    const requestOptions = await this.client.prepareOptions(basePathUrl, 'POST', getParams, headers, body || undefined);
    const url = this.client.prepareUrl(requestOptions.hostname, requestOptions.queryParams);

    return this.client.processCall<Conversation>({
      url,
      requestOptions,
      apiName: this.apiName,
      operationId: 'CreateConversation',
    });
  }

  /**
   * Delete a conversation
   * Deletes a conversation together with all the messages sent as part of the conversation.
   * @param { DeleteConversationRequestData } data - The data to provide to the API call.
   */
  public async delete(data: DeleteConversationRequestData): Promise<any> {
    this.client = this.getSinchClient();
    const getParams = this.client.extractQueryParams<DeleteConversationRequestData>(data, [] as never[]);
    const headers: { [key: string]: string | undefined } = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };

    const body: RequestBody = '';
    const basePathUrl = `${this.client.apiClientOptions.hostname}/v1/projects/${this.client.apiClientOptions.projectId}/conversations/${data['conversation_id']}`;

    const requestOptions
      = await this.client.prepareOptions(basePathUrl, 'DELETE', getParams, headers, body || undefined);
    const url = this.client.prepareUrl(requestOptions.hostname, requestOptions.queryParams);

    return this.client.processCall<any>({
      url,
      requestOptions,
      apiName: this.apiName,
      operationId: 'DeleteConversation',
    });
  }

  /**
   * Get a conversation
   * Retrieves a conversation by id. A conversation has two participating entities, an app and a contact.
   * @param { GetConversationRequestData } data - The data to provide to the API call.
   */
  public async get(data: GetConversationRequestData): Promise<Conversation> {
    this.client = this.getSinchClient();
    const getParams = this.client.extractQueryParams<GetConversationRequestData>(data, [] as never[]);
    const headers: { [key: string]: string | undefined } = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };

    const body: RequestBody = '';
    const basePathUrl = `${this.client.apiClientOptions.hostname}/v1/projects/${this.client.apiClientOptions.projectId}/conversations/${data['conversation_id']}`;

    const requestOptions = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined);
    const url = this.client.prepareUrl(requestOptions.hostname, requestOptions.queryParams);

    return this.client.processCall<Conversation>({
      url,
      requestOptions,
      apiName: this.apiName,
      operationId: 'GetConversation',
    });
  }

  /**
   * Inject an event
   * This operation injects a conversation event into a specific conversation.
   * @param { InjectEventRequestData } data - The data to provide to the API call.
   */
  public async injectEvent(data: InjectEventRequestData): Promise<InjectEventResponse> {
    this.client = this.getSinchClient();
    const getParams = this.client.extractQueryParams<InjectEventRequestData>(data, [] as never[]);
    const headers: { [key: string]: string | undefined } = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };

    const body: RequestBody = data['injectConversationEventRequestBody']
      ? JSON.stringify(data['injectConversationEventRequestBody'])
      : '{}';
    const basePathUrl = `${this.client.apiClientOptions.hostname}/v1/projects/${this.client.apiClientOptions.projectId}/conversations/${data['conversation_id']}:inject-event`;

    const requestOptions = await this.client.prepareOptions(basePathUrl, 'POST', getParams, headers, body || undefined);
    const url = this.client.prepareUrl(requestOptions.hostname, requestOptions.queryParams);

    return this.client.processCall<InjectEventResponse>({
      url,
      requestOptions,
      apiName: this.apiName,
      operationId: 'InjectEvent',
    });
  }

  /**
   * Inject a message
   * This operation injects a conversation message in to a specific conversation.
   * @param { InjectMessageRequestData } data - The data to provide to the API call.
   */
  public async injectMessage(data: InjectMessageRequestData): Promise<any> {
    this.client = this.getSinchClient();
    const getParams = this.client.extractQueryParams<InjectMessageRequestData>(data, [] as never[]);
    const headers: { [key: string]: string | undefined } = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };

    const body: RequestBody
      = data['injectMessageRequestBody'] ? JSON.stringify(data['injectMessageRequestBody']) : '{}';
    const basePathUrl = `${this.client.apiClientOptions.hostname}/v1/projects/${this.client.apiClientOptions.projectId}/conversations/${data['conversation_id']}:inject-message`;

    const requestOptions = await this.client.prepareOptions(basePathUrl, 'POST', getParams, headers, body || undefined);
    const url = this.client.prepareUrl(requestOptions.hostname, requestOptions.queryParams);

    return this.client.processCall<any>({
      url,
      requestOptions,
      apiName: this.apiName,
      operationId: 'InjectMessage',
    });
  }

  /**
   * List conversations
   * This operation lists all conversations that are associated with an app and/or a contact.
   * @param { ListConversationsRequestData } data - The data to provide to the API call.
   * @return {ApiListPromise<Conversation>}
   */
  public list(data: ListConversationsRequestData): ApiListPromise<Conversation> {
    this.client = this.getSinchClient();
    const getParams = this.client.extractQueryParams<ListConversationsRequestData>(data, [
      'app_id',
      'contact_id',
      'only_active',
      'page_size',
      'page_token',
      'active_channel',
    ]);
    const headers: { [key: string]: string | undefined } = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };

    const body: RequestBody = '';
    const basePathUrl = `${this.client.apiClientOptions.hostname}/v1/projects/${this.client.apiClientOptions.projectId}/conversations`;

    const requestOptionsPromise = this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined);

    const operationProperties: PaginatedApiProperties = {
      pagination: PaginationEnum.TOKEN2,
      apiName: this.apiName,
      operationId: 'ListConversations',
      dataKey: 'conversations',
    };

    // Create the promise containing the response wrapped as a PageResult
    const listPromise = buildPageResultPromise<Conversation>(
      this.client,
      requestOptionsPromise,
      operationProperties);

    // Add properties to the Promise to offer the possibility to use it as an iterator
    Object.assign(
      listPromise,
      createIteratorMethodsForPagination<Conversation>(
        this.client, requestOptionsPromise, listPromise, operationProperties),
    );

    return listPromise as ApiListPromise<Conversation>;
  }

  /**
   * List recent conversations
   * This operation lists conversations and their most recent message, ordered by when the most recent message was sent for that conversation.
   * @param { ListRecentConversationsRequestData } data - The data to provide to the API call.
   * @return {ApiListPromise<ConversationRecentMessage>}
   */
  public listRecent(data: ListRecentConversationsRequestData): ApiListPromise<ConversationRecentMessage> {
    this.client = this.getSinchClient();
    const getParams = this.client.extractQueryParams<ListRecentConversationsRequestData>(data, [
      'app_id',
      'only_active',
      'page_size',
      'page_token',
      'order',
    ]);
    // Manually set the default page size to 10 otherwise the API returns an empty list
    getParams.page_size = getParams.page_size !== undefined ? getParams.page_size : '10';
    const headers: { [key: string]: string | undefined } = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };

    const body: RequestBody = '';
    const basePathUrl = `${this.client.apiClientOptions.hostname}/v1/projects/${this.client.apiClientOptions.projectId}/conversations:recent`;

    const requestOptionsPromise = this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined);

    const operationProperties: PaginatedApiProperties = {
      pagination: PaginationEnum.TOKEN2,
      apiName: this.apiName,
      operationId: 'ListRecentConversations',
      dataKey: 'conversations',
    };

    // Create the promise containing the response wrapped as a PageResult
    const listPromise = buildPageResultPromise<Conversation>(
      this.client,
      requestOptionsPromise,
      operationProperties);

    // Add properties to the Promise to offer the possibility to use it as an iterator
    Object.assign(
      listPromise,
      createIteratorMethodsForPagination<Conversation>(
        this.client, requestOptionsPromise, listPromise, operationProperties),
    );

    return listPromise as ApiListPromise<ConversationRecentMessage>;
  }

  /**
   * Stop conversation
   * This operation stops the referenced conversation, if the conversation is still active. A new conversation will be created if a new message is exchanged between the app or contact that was part of the stopped conversation.
   * @param { StopActiveConversationRequestData } data - The data to provide to the API call.
   */
  public async stopActive(data: StopActiveConversationRequestData): Promise<any> {
    this.client = this.getSinchClient();
    const getParams = this.client.extractQueryParams<StopActiveConversationRequestData>(data, [] as never[]);
    const headers: { [key: string]: string | undefined } = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };

    const body: RequestBody = '';
    const basePathUrl = `${this.client.apiClientOptions.hostname}/v1/projects/${this.client.apiClientOptions.projectId}/conversations/${data['conversation_id']}:stop`;

    const requestOptions = await this.client.prepareOptions(basePathUrl, 'POST', getParams, headers, body || undefined);
    const url = this.client.prepareUrl(requestOptions.hostname, requestOptions.queryParams);

    return this.client.processCall<any>({
      url,
      requestOptions,
      apiName: this.apiName,
      operationId: 'StopActiveConversation',
    });
  }

  /**
   * Update a conversation
   * This operation updates a conversation which can, for instance, be used to update the metadata associated with a conversation.
   * @param { UpdateConversationRequestData } data - The data to provide to the API call.
   */
  public async update(data: UpdateConversationRequestData): Promise<Conversation> {
    this.client = this.getSinchClient();
    data['metadata_update_strategy'] = data['metadata_update_strategy'] !== undefined
      ? data['metadata_update_strategy']
      : 'REPLACE';
    const getParams = this.client.extractQueryParams<UpdateConversationRequestData>(data, [
      'update_mask',
      'metadata_update_strategy',
    ]);
    const headers: { [key: string]: string | undefined } = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };

    const body: RequestBody = data['updateConversationRequestBody']
      ? JSON.stringify(data['updateConversationRequestBody'])
      : '{}';
    const basePathUrl = `${this.client.apiClientOptions.hostname}/v1/projects/${this.client.apiClientOptions.projectId}/conversations/${data['conversation_id']}`;

    const requestOptions
      = await this.client.prepareOptions(basePathUrl, 'PATCH', getParams, headers, body || undefined);
    const url = this.client.prepareUrl(requestOptions.hostname, requestOptions.queryParams);

    return this.client.processCall<Conversation>({
      url,
      requestOptions,
      apiName: this.apiName,
      operationId: 'UpdateConversation',
    });
  }

}
