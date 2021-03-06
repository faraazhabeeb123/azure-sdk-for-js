## API Report File for "@azure/service-bus"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { AbortSignalLike } from '@azure/abort-controller';
import { AmqpMessage } from '@azure/core-amqp';
import { delay } from '@azure/core-amqp';
import { Delivery } from 'rhea-promise';
import { HttpOperationResponse } from '@azure/core-http';
import Long from 'long';
import { MessagingError } from '@azure/core-amqp';
import { OperationTracingOptions } from '@azure/core-tracing';
import { ProxySettings } from '@azure/core-http';
import { RetryOptions } from '@azure/core-amqp';
import { ServiceClient } from '@azure/core-http';
import { TokenCredential } from '@azure/core-amqp';
import { TokenType } from '@azure/core-amqp';
import { WebSocketImpl } from 'rhea-promise';
import { WebSocketOptions } from '@azure/core-amqp';

// @public
export type AuthorizationRule = {
    claimType: string;
    claimValue: string;
    rights: {
        accessRights?: string[];
    };
    keyName: string;
    primaryKey?: string;
    secondaryKey?: string;
};

// @public
export interface CorrelationRuleFilter {
    contentType?: string;
    correlationId?: string;
    label?: string;
    messageId?: string;
    replyTo?: string;
    replyToSessionId?: string;
    sessionId?: string;
    to?: string;
    userProperties?: any;
}

// @public
export interface CreateBatchOptions extends OperationOptions {
    maxSizeInBytes?: number;
}

// @public
export type CreateQueueResponse = QueueResponse;

// @public
export type CreateRuleResponse = RuleResponse;

// @public
export interface CreateSessionReceiverOptions extends SessionReceiverOptions, OperationOptions {
}

// @public
export type CreateSubscriptionResponse = SubscriptionResponse;

// @public
export type CreateTopicResponse = TopicResponse;

// @public
export interface DeadLetterOptions {
    deadLetterErrorDescription: string;
    deadLetterReason: string;
}

export { delay }

// @public
export interface DeleteQueueResponse {
    _response: HttpOperationResponse;
}

// @public
export interface DeleteRuleResponse {
    _response: HttpOperationResponse;
}

// @public
export interface DeleteSubscriptionResponse {
    _response: HttpOperationResponse;
}

// @public
export interface DeleteTopicResponse {
    _response: HttpOperationResponse;
}

export { Delivery }

// @public
export type EntityStatus = "Active" | "Creating" | "Deleting" | "ReceiveDisabled" | "SendDisabled" | "Disabled" | "Renaming" | "Restoring" | "Unknown";

// @public
export interface GetMessageIteratorOptions extends OperationOptions, WaitTimeOptions {
}

// @public
export type GetNamespaceResponse = NamespaceResponse;

// @public
export type GetQueueResponse = QueueResponse;

// @public
export interface GetQueueRuntimeInfoResponse extends QueueRuntimeInfo {
    _response: HttpOperationResponse;
}

// @public
export interface GetQueuesResponse extends Array<QueueDescription> {
    _response: HttpOperationResponse;
}

// @public
export interface GetQueuesRuntimeInfoResponse extends Array<QueueRuntimeInfo> {
    _response: HttpOperationResponse;
}

// @public
export type GetRuleResponse = RuleResponse;

// @public
export interface GetRulesResponse extends Array<RuleDescription> {
    _response: HttpOperationResponse;
}

// @public
export type GetSubscriptionResponse = SubscriptionResponse;

// @public
export interface GetSubscriptionRuntimeInfoResponse extends SubscriptionRuntimeInfo {
    _response: HttpOperationResponse;
}

// @public
export interface GetSubscriptionsResponse extends Array<SubscriptionDescription> {
    _response: HttpOperationResponse;
}

// @public
export interface GetSubscriptionsRuntimeInfoResponse extends Array<SubscriptionRuntimeInfo> {
    _response: HttpOperationResponse;
}

// @public
export type GetTopicResponse = TopicResponse;

// @public
export interface GetTopicRuntimeInfoResponse extends TopicRuntimeInfo {
    _response: HttpOperationResponse;
}

// @public
export interface GetTopicsResponse extends Array<TopicDescription> {
    _response: HttpOperationResponse;
}

// @public
export interface GetTopicsRuntimeInfoResponse extends Array<TopicRuntimeInfo> {
    _response: HttpOperationResponse;
}

// @public
export interface ListRequestOptions {
    skip?: number;
    top?: number;
}

// @public
export type MessageCountDetails = {
    activeMessageCount: number;
    deadLetterMessageCount: number;
    scheduledMessageCount: number;
    transferMessageCount: number;
    transferDeadLetterMessageCount: number;
};

// @public
export interface MessageHandlerOptions {
    autoComplete?: boolean;
    maxConcurrentCalls?: number;
    maxMessageAutoRenewLockDurationInMs?: number;
}

// @public
export interface MessageHandlers<ReceivedMessageT> {
    processError(err: Error): Promise<void>;
    processMessage(message: ReceivedMessageT): Promise<void>;
}

export { MessagingError }

// @public
export interface NamespaceProperties {
    createdOn: string;
    messagingSku: string;
    messagingUnits: number | undefined;
    name: string;
    namespaceType: string;
    updatedOn: string;
}

// @public
export interface NamespaceResponse extends NamespaceProperties {
    _response: HttpOperationResponse;
}

// @public
export interface OperationOptions {
    abortSignal?: AbortSignalLike;
    tracingOptions?: OperationTracingOptions;
}

// @public
export interface PeekMessagesOptions extends OperationOptions {
    fromSequenceNumber?: Long;
    maxMessageCount?: number;
}

// @public
export interface QueueDescription {
    authorizationRules?: AuthorizationRule[];
    autoDeleteOnIdle?: string;
    deadLetteringOnMessageExpiration?: boolean;
    defaultMessageTtl?: string;
    duplicateDetectionHistoryTimeWindow?: string;
    enableBatchedOperations?: boolean;
    enablePartitioning?: boolean;
    forwardDeadLetteredMessagesTo?: string;
    forwardTo?: string;
    lockDuration?: string;
    maxDeliveryCount?: number;
    maxSizeInMegabytes?: number;
    name: string;
    requiresDuplicateDetection?: boolean;
    requiresSession?: boolean;
    status?: EntityStatus;
    userMetadata?: string;
}

// @public
export interface QueueResponse extends QueueDescription {
    _response: HttpOperationResponse;
}

// @public
export interface QueueRuntimeInfo {
    accessedOn?: string;
    createdOn?: string;
    messageCount?: number;
    messageCountDetails?: MessageCountDetails;
    name: string;
    sizeInBytes?: number;
    updatedOn?: string;
}

// @public
export interface ReceiveBatchOptions extends OperationOptions, WaitTimeOptions {
}

// @public
export interface ReceivedMessage extends ServiceBusMessage {
    readonly _amqpMessage: AmqpMessage;
    readonly deadLetterSource?: string;
    readonly deliveryCount?: number;
    readonly enqueuedSequenceNumber?: number;
    readonly enqueuedTimeUtc?: Date;
    readonly expiresAtUtc?: Date;
    lockedUntilUtc?: Date;
    readonly lockToken?: string;
    readonly sequenceNumber?: Long;
}

// @public
export interface ReceivedMessageWithLock extends ReceivedMessage {
    abandon(propertiesToModify?: {
        [key: string]: any;
    }): Promise<void>;
    complete(): Promise<void>;
    deadLetter(options?: DeadLetterOptions & {
        [key: string]: any;
    }): Promise<void>;
    defer(propertiesToModify?: {
        [key: string]: any;
    }): Promise<void>;
    renewLock(): Promise<Date>;
}

// @public
export interface Receiver<ReceivedMessageT> {
    close(): Promise<void>;
    entityPath: string;
    getMessageIterator(options?: GetMessageIteratorOptions): AsyncIterableIterator<ReceivedMessageT>;
    isClosed: boolean;
    isReceivingMessages(): boolean;
    peekMessages(options?: PeekMessagesOptions): Promise<ReceivedMessage[]>;
    receiveBatch(maxMessages: number, options?: ReceiveBatchOptions): Promise<ReceivedMessageT[]>;
    receiveDeferredMessage(sequenceNumber: Long, options?: OperationOptions): Promise<ReceivedMessageT | undefined>;
    receiveDeferredMessages(sequenceNumbers: Long[], options?: OperationOptions): Promise<ReceivedMessageT[]>;
    receiveMode: "peekLock" | "receiveAndDelete";
    subscribe(handlers: MessageHandlers<ReceivedMessageT>, options?: SubscribeOptions): void;
}

export { RetryOptions }

// @public
export interface RuleDescription {
    action?: SqlRuleAction;
    filter?: SqlRuleFilter | CorrelationRuleFilter;
    name: string;
}

// @public
export interface RuleResponse extends RuleDescription {
    _response: HttpOperationResponse;
}

// @public
export interface Sender {
    cancelScheduledMessage(sequenceNumber: Long, options?: OperationOptions): Promise<void>;
    cancelScheduledMessages(sequenceNumbers: Long[], options?: OperationOptions): Promise<void>;
    close(): Promise<void>;
    createBatch(options?: CreateBatchOptions): Promise<ServiceBusMessageBatch>;
    entityPath: string;
    isClosed: boolean;
    open(options?: SenderOpenOptions): Promise<void>;
    scheduleMessage(scheduledEnqueueTimeUtc: Date, message: ServiceBusMessage, options?: OperationOptions): Promise<Long>;
    scheduleMessages(scheduledEnqueueTimeUtc: Date, messages: ServiceBusMessage[], options?: OperationOptions): Promise<Long[]>;
    send(message: ServiceBusMessage, options?: OperationOptions): Promise<void>;
    send(messages: ServiceBusMessage[], options?: OperationOptions): Promise<void>;
    send(messageBatch: ServiceBusMessageBatch, options?: OperationOptions): Promise<void>;
}

// @public
export interface SenderOpenOptions {
    abortSignal?: AbortSignalLike;
}

// @public
export class ServiceBusClient {
    constructor(connectionString: string, options?: ServiceBusClientOptions);
    constructor(fullyQualifiedNamespace: string, credential: TokenCredential, options?: ServiceBusClientOptions);
    close(): Promise<void>;
    createDeadLetterReceiver(queueName: string, receiveMode: "peekLock"): Receiver<ReceivedMessageWithLock>;
    createDeadLetterReceiver(queueName: string, receiveMode: "receiveAndDelete"): Receiver<ReceivedMessage>;
    createDeadLetterReceiver(topicName: string, subscriptionName: string, receiveMode: "peekLock"): Receiver<ReceivedMessageWithLock>;
    createDeadLetterReceiver(topicName: string, subscriptionName: string, receiveMode: "receiveAndDelete"): Receiver<ReceivedMessage>;
    createReceiver(queueName: string, receiveMode: "peekLock"): Receiver<ReceivedMessageWithLock>;
    createReceiver(queueName: string, receiveMode: "receiveAndDelete"): Receiver<ReceivedMessage>;
    createReceiver(topicName: string, subscriptionName: string, receiveMode: "peekLock"): Receiver<ReceivedMessageWithLock>;
    createReceiver(topicName: string, subscriptionName: string, receiveMode: "receiveAndDelete"): Receiver<ReceivedMessage>;
    createSender(queueOrTopicName: string): Sender;
    createSessionReceiver(queueName: string, receiveMode: "peekLock", options?: CreateSessionReceiverOptions): Promise<SessionReceiver<ReceivedMessageWithLock>>;
    createSessionReceiver(queueName: string, receiveMode: "receiveAndDelete", options?: CreateSessionReceiverOptions): Promise<SessionReceiver<ReceivedMessage>>;
    createSessionReceiver(topicName: string, subscriptionName: string, receiveMode: "peekLock", options?: CreateSessionReceiverOptions): Promise<SessionReceiver<ReceivedMessageWithLock>>;
    createSessionReceiver(topicName: string, subscriptionName: string, receiveMode: "receiveAndDelete", options?: CreateSessionReceiverOptions): Promise<SessionReceiver<ReceivedMessage>>;
    fullyQualifiedNamespace: string;
}

// @public
export interface ServiceBusClientOptions {
    retryOptions?: RetryOptions;
    webSocketOptions?: WebSocketOptions;
}

// @public
export class ServiceBusManagementClient extends ServiceClient {
    constructor(connectionString: string, options?: ServiceBusManagementClientOptions);
    createQueue(queueName: string): Promise<CreateQueueResponse>;
    createQueue(queue: QueueDescription): Promise<CreateQueueResponse>;
    createRule(topicName: string, subscriptionName: string, rule: RuleDescription): Promise<CreateRuleResponse>;
    createSubscription(topicName: string, subscriptionName: string): Promise<CreateSubscriptionResponse>;
    createSubscription(subscription: SubscriptionDescription): Promise<CreateSubscriptionResponse>;
    createTopic(topicName: string): Promise<CreateTopicResponse>;
    createTopic(topic: TopicDescription): Promise<CreateTopicResponse>;
    deleteQueue(queueName: string): Promise<DeleteQueueResponse>;
    deleteRule(topicName: string, subscriptionName: string, ruleName: string): Promise<DeleteRuleResponse>;
    deleteSubscription(topicName: string, subscriptionName: string): Promise<DeleteSubscriptionResponse>;
    deleteTopic(topicName: string): Promise<DeleteTopicResponse>;
    getNamespaceProperties(): Promise<GetNamespaceResponse>;
    getQueue(queueName: string): Promise<GetQueueResponse>;
    getQueueRuntimeInfo(queueName: string): Promise<GetQueueRuntimeInfoResponse>;
    getQueues(listRequestOptions?: ListRequestOptions): Promise<GetQueuesResponse>;
    getQueuesRuntimeInfo(listRequestOptions?: ListRequestOptions): Promise<GetQueuesRuntimeInfoResponse>;
    getRule(topicName: string, subscriptioName: string, ruleName: string): Promise<GetRuleResponse>;
    getRules(topicName: string, subscriptionName: string, listRequestOptions?: ListRequestOptions): Promise<GetRulesResponse>;
    getSubscription(topicName: string, subscriptionName: string): Promise<GetSubscriptionResponse>;
    getSubscriptionRuntimeInfo(topicName: string, subscriptionName: string): Promise<GetSubscriptionRuntimeInfoResponse>;
    getSubscriptions(topicName: string, listRequestOptions?: ListRequestOptions): Promise<GetSubscriptionsResponse>;
    getSubscriptionsRuntimeInfo(topicName: string, listRequestOptions?: ListRequestOptions): Promise<GetSubscriptionsRuntimeInfoResponse>;
    getTopic(topicName: string): Promise<GetTopicResponse>;
    getTopicRuntimeInfo(topicName: string): Promise<GetTopicRuntimeInfoResponse>;
    getTopics(listRequestOptions?: ListRequestOptions): Promise<GetTopicsResponse>;
    getTopicsRuntimeInfo(listRequestOptions?: ListRequestOptions): Promise<GetTopicsRuntimeInfoResponse>;
    queueExists(queueName: string): Promise<boolean>;
    subscriptionExists(topicName: string, subscriptionName: string): Promise<boolean>;
    topicExists(topicName: string): Promise<boolean>;
    updateQueue(queue: QueueDescription): Promise<UpdateQueueResponse>;
    updateRule(topicName: string, subscriptionName: string, rule: RuleDescription): Promise<UpdateRuleResponse>;
    updateSubscription(subscription: SubscriptionDescription): Promise<UpdateSubscriptionResponse>;
    updateTopic(topic: TopicDescription): Promise<UpdateTopicResponse>;
}

// @public
export interface ServiceBusManagementClientOptions {
    proxySettings?: ProxySettings;
}

// @public
export interface ServiceBusMessage {
    body: any;
    contentType?: string;
    correlationId?: string | number | Buffer;
    label?: string;
    messageId?: string | number | Buffer;
    partitionKey?: string;
    replyTo?: string;
    replyToSessionId?: string;
    scheduledEnqueueTimeUtc?: Date;
    sessionId?: string;
    timeToLive?: number;
    to?: string;
    userProperties?: {
        [key: string]: any;
    };
    viaPartitionKey?: string;
}

// @public
export interface ServiceBusMessageBatch {
    readonly count: number;
    // @internal
    _generateMessage(): Buffer;
    readonly maxSizeInBytes: number;
    readonly sizeInBytes: number;
    tryAdd(message: ServiceBusMessage): boolean;
}

// @public
export interface SessionMessageHandlerOptions {
    autoComplete?: boolean;
    maxConcurrentCalls?: number;
}

// @public
export interface SessionReceiver<ReceivedMessageT extends ReceivedMessage | ReceivedMessageWithLock> extends Receiver<ReceivedMessageT> {
    getState(options?: OperationOptions): Promise<any>;
    renewSessionLock(options?: OperationOptions): Promise<Date>;
    readonly sessionId: string;
    sessionLockedUntilUtc: Date | undefined;
    setState(state: any, options?: OperationOptions): Promise<void>;
}

// @public
export interface SessionReceiverOptions {
    autoRenewLockDurationInMs?: number;
    sessionId?: string;
}

// @public
export type SqlParameter = {
    key: string;
    value: string | number;
    type: string;
};

// @public
export type SqlRuleAction = SqlRuleFilter;

// @public
export interface SqlRuleFilter {
    compatibilityLevel?: number;
    requiresPreprocessing?: boolean;
    sqlExpression?: string;
    sqlParameters?: SqlParameter[];
}

// @public
export interface SubscribeOptions extends OperationOptions, MessageHandlerOptions {
}

// @public
export interface SubscriptionDescription {
    autoDeleteOnIdle?: string;
    deadLetteringOnFilterEvaluationExceptions?: boolean;
    deadLetteringOnMessageExpiration?: boolean;
    defaultMessageTtl?: string;
    enableBatchedOperations?: boolean;
    forwardDeadLetteredMessagesTo?: string;
    forwardTo?: string;
    lockDuration?: string;
    maxDeliveryCount?: number;
    requiresSession?: boolean;
    status?: EntityStatus;
    subscriptionName: string;
    topicName: string;
    userMetadata?: string;
}

// @public
export interface SubscriptionResponse extends SubscriptionDescription {
    _response: HttpOperationResponse;
}

// @public
export interface SubscriptionRuntimeInfo {
    accessedOn?: string;
    createdOn: string;
    messageCount: number;
    messageCountDetails?: MessageCountDetails;
    subscriptionName: string;
    topicName: string;
    updatedOn: string;
}

export { TokenCredential }

export { TokenType }

// @public
export interface TopicDescription {
    authorizationRules?: AuthorizationRule[];
    autoDeleteOnIdle?: string;
    defaultMessageTtl?: string;
    duplicateDetectionHistoryTimeWindow?: string;
    enableBatchedOperations?: boolean;
    enablePartitioning?: boolean;
    maxSizeInMegabytes?: number;
    name: string;
    requiresDuplicateDetection?: boolean;
    status?: EntityStatus;
    supportOrdering?: boolean;
    userMetadata?: string;
}

// @public
export interface TopicResponse extends TopicDescription {
    _response: HttpOperationResponse;
}

// @public
export interface TopicRuntimeInfo {
    accessedOn?: string;
    createdOn?: string;
    name: string;
    sizeInBytes?: number;
    subscriptionCount?: number;
    updatedOn?: string;
}

// @public
export type UpdateQueueResponse = QueueResponse;

// @public
export type UpdateRuleResponse = RuleResponse;

// @public
export type UpdateSubscriptionResponse = SubscriptionResponse;

// @public
export type UpdateTopicResponse = TopicResponse;

// @public
export interface WaitTimeOptions {
    maxWaitTimeInMs: number;
}

export { WebSocketImpl }

export { WebSocketOptions }


// (No @packageDocumentation comment for this package)

```
