import {
  RequestBody,
  SinchClientParameters,
} from '@crispy-1a/sdk-client';
import {
  CreateWebhookRequestData,
  DeleteWebhookRequestData,
  GetWebhookRequestData,
  ListWebhooksRequestData,
  ListWebhooksResponse,
  UpdateWebhookRequestData,
  Webhook,
} from '../../../models';
import { ConversationDomainApi } from '../conversation-domain-api';

export class WebhooksApi extends ConversationDomainApi {

  /**
   * Initialize your interface
   *
   * @param {SinchClientParameters} sinchClientParameters - The parameters used to initialize the API Client.
   */
  constructor(sinchClientParameters: SinchClientParameters) {
    super(sinchClientParameters, 'WebhooksApi');
  }

  /**
   * Create a new webhook
   * Creates a webhook for receiving callbacks on specific triggers. You can create up to 5 webhooks per app.
   * @param { CreateWebhookRequestData } data - The data to provide to the API call.
   */
  public async create(data: CreateWebhookRequestData): Promise<Webhook> {
    this.client = this.getSinchClient();
    const getParams = this.client.extractQueryParams<CreateWebhookRequestData>(data, [] as never[]);
    const headers: { [key: string]: string | undefined } = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };

    const body: RequestBody = data['webhookCreateRequestBody']
      ? JSON.stringify(data['webhookCreateRequestBody'])
      : '{}';
    const basePathUrl = `${this.client.apiClientOptions.hostname}/v1/projects/${this.client.apiClientOptions.projectId}/webhooks`;

    const requestOptions = await this.client.prepareOptions(basePathUrl, 'POST', getParams, headers, body || undefined);
    const url = this.client.prepareUrl(requestOptions.hostname, requestOptions.queryParams);

    return this.client.processCall<Webhook>({
      url,
      requestOptions,
      apiName: this.apiName,
      operationId: 'CreateWebhook',
    });
  }

  /**
   * Delete an existing webhook
   * Deletes a webhook as specified by the webhook ID.
   * @param { DeleteWebhookRequestData } data - The data to provide to the API call.
   */
  public async delete(data: DeleteWebhookRequestData): Promise<any> {
    this.client = this.getSinchClient();
    const getParams = this.client.extractQueryParams<DeleteWebhookRequestData>(data, [] as never[]);
    const headers: { [key: string]: string | undefined } = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };

    const body: RequestBody = '';
    const basePathUrl = `${this.client.apiClientOptions.hostname}/v1/projects/${this.client.apiClientOptions.projectId}/webhooks/${data['webhook_id']}`;

    const requestOptions
      = await this.client.prepareOptions(basePathUrl, 'DELETE', getParams, headers, body || undefined);
    const url = this.client.prepareUrl(requestOptions.hostname, requestOptions.queryParams);

    return this.client.processCall<any>({
      url,
      requestOptions,
      apiName: this.apiName,
      operationId: 'DeleteWebhook',
    });
  }

  /**
   * Get a webhook
   * Get a webhook as specified by the webhook ID.
   * @param { GetWebhookRequestData } data - The data to provide to the API call.
   */
  public async get(data: GetWebhookRequestData): Promise<Webhook> {
    this.client = this.getSinchClient();
    const getParams = this.client.extractQueryParams<GetWebhookRequestData>(data, [] as never[]);
    const headers: { [key: string]: string | undefined } = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };

    const body: RequestBody = '';
    const basePathUrl = `${this.client.apiClientOptions.hostname}/v1/projects/${this.client.apiClientOptions.projectId}/webhooks/${data['webhook_id']}`;

    const requestOptions = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined);
    const url = this.client.prepareUrl(requestOptions.hostname, requestOptions.queryParams);

    return this.client.processCall<Webhook>({
      url,
      requestOptions,
      apiName: this.apiName,
      operationId: 'GetWebhook',
    });
  }

  /**
   * List webhooks
   * List all webhooks for a given app as specified by the App ID.
   * @param { ListWebhooksRequestData } data - The data to provide to the API call.
   */
  public async list(data: ListWebhooksRequestData): Promise<ListWebhooksResponse> {
    this.client = this.getSinchClient();
    const getParams = this.client.extractQueryParams<ListWebhooksRequestData>(data, [] as never[]);
    const headers: { [key: string]: string | undefined } = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };

    const body: RequestBody = '';
    const basePathUrl = `${this.client.apiClientOptions.hostname}/v1/projects/${this.client.apiClientOptions.projectId}/apps/${data['app_id']}/webhooks`;

    const requestOptions = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined);
    const url = this.client.prepareUrl(requestOptions.hostname, requestOptions.queryParams);

    return this.client.processCall<ListWebhooksResponse>({
      url,
      requestOptions,
      apiName: this.apiName,
      operationId: 'ListWebhooks',
    });
  }

  /**
   * Update an existing webhook
   * Updates an existing webhook as specified by the webhook ID.
   * @param { UpdateWebhookRequestData } data - The data to provide to the API call.
   */
  public async update(data: UpdateWebhookRequestData): Promise<Webhook> {
    this.client = this.getSinchClient();
    const getParams = this.client.extractQueryParams<UpdateWebhookRequestData>(data, ['update_mask']);
    const headers: { [key: string]: string | undefined } = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };

    const body: RequestBody = data['webhookUpdateRequestBody']
      ? JSON.stringify(data['webhookUpdateRequestBody'])
      : '{}';
    const basePathUrl = `${this.client.apiClientOptions.hostname}/v1/projects/${this.client.apiClientOptions.projectId}/webhooks/${data['webhook_id']}`;

    const requestOptions
      = await this.client.prepareOptions(basePathUrl, 'PATCH', getParams, headers, body || undefined);
    const url = this.client.prepareUrl(requestOptions.hostname, requestOptions.queryParams);

    return this.client.processCall<Webhook>({
      url,
      requestOptions,
      apiName: this.apiName,
      operationId: 'UpdateWebhook',
    });
  }

}
