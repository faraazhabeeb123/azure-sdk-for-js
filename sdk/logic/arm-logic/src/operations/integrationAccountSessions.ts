/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/integrationAccountSessionsMappers";
import * as Parameters from "../models/parameters";
import { LogicManagementClientContext } from "../logicManagementClientContext";

/** Class representing a IntegrationAccountSessions. */
export class IntegrationAccountSessions {
  private readonly client: LogicManagementClientContext;

  /**
   * Create a IntegrationAccountSessions.
   * @param {LogicManagementClientContext} client Reference to the service client.
   */
  constructor(client: LogicManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets a list of integration account sessions.
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param [options] The optional parameters
   * @returns Promise<Models.IntegrationAccountSessionsListResponse>
   */
  list(resourceGroupName: string, integrationAccountName: string, options?: Models.IntegrationAccountSessionsListOptionalParams): Promise<Models.IntegrationAccountSessionsListResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param callback The callback
   */
  list(resourceGroupName: string, integrationAccountName: string, callback: msRest.ServiceCallback<Models.IntegrationAccountSessionListResult>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, integrationAccountName: string, options: Models.IntegrationAccountSessionsListOptionalParams, callback: msRest.ServiceCallback<Models.IntegrationAccountSessionListResult>): void;
  list(resourceGroupName: string, integrationAccountName: string, options?: Models.IntegrationAccountSessionsListOptionalParams | msRest.ServiceCallback<Models.IntegrationAccountSessionListResult>, callback?: msRest.ServiceCallback<Models.IntegrationAccountSessionListResult>): Promise<Models.IntegrationAccountSessionsListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        integrationAccountName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.IntegrationAccountSessionsListResponse>;
  }

  /**
   * Gets an integration account session.
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param sessionName The integration account session name.
   * @param [options] The optional parameters
   * @returns Promise<Models.IntegrationAccountSessionsGetResponse>
   */
  get(resourceGroupName: string, integrationAccountName: string, sessionName: string, options?: msRest.RequestOptionsBase): Promise<Models.IntegrationAccountSessionsGetResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param sessionName The integration account session name.
   * @param callback The callback
   */
  get(resourceGroupName: string, integrationAccountName: string, sessionName: string, callback: msRest.ServiceCallback<Models.IntegrationAccountSession>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param sessionName The integration account session name.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, integrationAccountName: string, sessionName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.IntegrationAccountSession>): void;
  get(resourceGroupName: string, integrationAccountName: string, sessionName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.IntegrationAccountSession>, callback?: msRest.ServiceCallback<Models.IntegrationAccountSession>): Promise<Models.IntegrationAccountSessionsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        integrationAccountName,
        sessionName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.IntegrationAccountSessionsGetResponse>;
  }

  /**
   * Creates or updates an integration account session.
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param sessionName The integration account session name.
   * @param session The integration account session.
   * @param [options] The optional parameters
   * @returns Promise<Models.IntegrationAccountSessionsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, integrationAccountName: string, sessionName: string, session: Models.IntegrationAccountSession, options?: msRest.RequestOptionsBase): Promise<Models.IntegrationAccountSessionsCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param sessionName The integration account session name.
   * @param session The integration account session.
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, integrationAccountName: string, sessionName: string, session: Models.IntegrationAccountSession, callback: msRest.ServiceCallback<Models.IntegrationAccountSession>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param sessionName The integration account session name.
   * @param session The integration account session.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, integrationAccountName: string, sessionName: string, session: Models.IntegrationAccountSession, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.IntegrationAccountSession>): void;
  createOrUpdate(resourceGroupName: string, integrationAccountName: string, sessionName: string, session: Models.IntegrationAccountSession, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.IntegrationAccountSession>, callback?: msRest.ServiceCallback<Models.IntegrationAccountSession>): Promise<Models.IntegrationAccountSessionsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        integrationAccountName,
        sessionName,
        session,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.IntegrationAccountSessionsCreateOrUpdateResponse>;
  }

  /**
   * Deletes an integration account session.
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param sessionName The integration account session name.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, integrationAccountName: string, sessionName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param sessionName The integration account session name.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, integrationAccountName: string, sessionName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param sessionName The integration account session name.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, integrationAccountName: string, sessionName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, integrationAccountName: string, sessionName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        integrationAccountName,
        sessionName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Gets a list of integration account sessions.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.IntegrationAccountSessionsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.IntegrationAccountSessionsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.IntegrationAccountSessionListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.IntegrationAccountSessionListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.IntegrationAccountSessionListResult>, callback?: msRest.ServiceCallback<Models.IntegrationAccountSessionListResult>): Promise<Models.IntegrationAccountSessionsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.IntegrationAccountSessionsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/sessions",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.integrationAccountName
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.top,
    Parameters.filter
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.IntegrationAccountSessionListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/sessions/{sessionName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.integrationAccountName,
    Parameters.sessionName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.IntegrationAccountSession
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/sessions/{sessionName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.integrationAccountName,
    Parameters.sessionName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "session",
    mapper: {
      ...Mappers.IntegrationAccountSession,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.IntegrationAccountSession
    },
    201: {
      bodyMapper: Mappers.IntegrationAccountSession
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/sessions/{sessionName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.integrationAccountName,
    Parameters.sessionName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.IntegrationAccountSessionListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};