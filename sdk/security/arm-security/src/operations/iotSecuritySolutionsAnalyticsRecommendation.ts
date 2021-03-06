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
import * as Mappers from "../models/iotSecuritySolutionsAnalyticsRecommendationMappers";
import * as Parameters from "../models/parameters";
import { SecurityCenterContext } from "../securityCenterContext";

/** Class representing a IotSecuritySolutionsAnalyticsRecommendation. */
export class IotSecuritySolutionsAnalyticsRecommendation {
  private readonly client: SecurityCenterContext;

  /**
   * Create a IotSecuritySolutionsAnalyticsRecommendation.
   * @param {SecurityCenterContext} client Reference to the service client.
   */
  constructor(client: SecurityCenterContext) {
    this.client = client;
  }

  /**
   * Use this method to get the aggregated security analytics recommendation of yours IoT Security
   * solution. This aggregation is performed by recommendation name.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param solutionName The name of the IoT Security solution.
   * @param aggregatedRecommendationName Name of the recommendation aggregated for this query.
   * @param [options] The optional parameters
   * @returns Promise<Models.IotSecuritySolutionsAnalyticsRecommendationGetResponse>
   */
  get(resourceGroupName: string, solutionName: string, aggregatedRecommendationName: string, options?: msRest.RequestOptionsBase): Promise<Models.IotSecuritySolutionsAnalyticsRecommendationGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param solutionName The name of the IoT Security solution.
   * @param aggregatedRecommendationName Name of the recommendation aggregated for this query.
   * @param callback The callback
   */
  get(resourceGroupName: string, solutionName: string, aggregatedRecommendationName: string, callback: msRest.ServiceCallback<Models.IoTSecurityAggregatedRecommendation>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param solutionName The name of the IoT Security solution.
   * @param aggregatedRecommendationName Name of the recommendation aggregated for this query.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, solutionName: string, aggregatedRecommendationName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.IoTSecurityAggregatedRecommendation>): void;
  get(resourceGroupName: string, solutionName: string, aggregatedRecommendationName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.IoTSecurityAggregatedRecommendation>, callback?: msRest.ServiceCallback<Models.IoTSecurityAggregatedRecommendation>): Promise<Models.IotSecuritySolutionsAnalyticsRecommendationGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        solutionName,
        aggregatedRecommendationName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.IotSecuritySolutionsAnalyticsRecommendationGetResponse>;
  }

  /**
   * Use this method to get the list of aggregated security analytics recommendations of yours IoT
   * Security solution.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param solutionName The name of the IoT Security solution.
   * @param [options] The optional parameters
   * @returns Promise<Models.IotSecuritySolutionsAnalyticsRecommendationListResponse>
   */
  list(resourceGroupName: string, solutionName: string, options?: Models.IotSecuritySolutionsAnalyticsRecommendationListOptionalParams): Promise<Models.IotSecuritySolutionsAnalyticsRecommendationListResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param solutionName The name of the IoT Security solution.
   * @param callback The callback
   */
  list(resourceGroupName: string, solutionName: string, callback: msRest.ServiceCallback<Models.IoTSecurityAggregatedRecommendationList>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param solutionName The name of the IoT Security solution.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, solutionName: string, options: Models.IotSecuritySolutionsAnalyticsRecommendationListOptionalParams, callback: msRest.ServiceCallback<Models.IoTSecurityAggregatedRecommendationList>): void;
  list(resourceGroupName: string, solutionName: string, options?: Models.IotSecuritySolutionsAnalyticsRecommendationListOptionalParams | msRest.ServiceCallback<Models.IoTSecurityAggregatedRecommendationList>, callback?: msRest.ServiceCallback<Models.IoTSecurityAggregatedRecommendationList>): Promise<Models.IotSecuritySolutionsAnalyticsRecommendationListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        solutionName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.IotSecuritySolutionsAnalyticsRecommendationListResponse>;
  }

  /**
   * Use this method to get the list of aggregated security analytics recommendations of yours IoT
   * Security solution.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.IotSecuritySolutionsAnalyticsRecommendationListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.IotSecuritySolutionsAnalyticsRecommendationListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.IoTSecurityAggregatedRecommendationList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.IoTSecurityAggregatedRecommendationList>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.IoTSecurityAggregatedRecommendationList>, callback?: msRest.ServiceCallback<Models.IoTSecurityAggregatedRecommendationList>): Promise<Models.IotSecuritySolutionsAnalyticsRecommendationListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.IotSecuritySolutionsAnalyticsRecommendationListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/iotSecuritySolutions/{solutionName}/analyticsModels/default/aggregatedRecommendations/{aggregatedRecommendationName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.solutionName,
    Parameters.aggregatedRecommendationName
  ],
  queryParameters: [
    Parameters.apiVersion3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.IoTSecurityAggregatedRecommendation
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/iotSecuritySolutions/{solutionName}/analyticsModels/default/aggregatedRecommendations",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.solutionName
  ],
  queryParameters: [
    Parameters.apiVersion3,
    Parameters.top
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.IoTSecurityAggregatedRecommendationList
    },
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
      bodyMapper: Mappers.IoTSecurityAggregatedRecommendationList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
