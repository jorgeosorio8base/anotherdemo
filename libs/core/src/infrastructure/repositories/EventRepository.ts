
        import {IRepositoryParams, IEventRepository} from './interfaces';
        import {Http, IHttp} from '../http';
        import { gql } from 'graphql-request';
        import {Environment} from '../../environment';
        import {
            Event,
            QueryEventArgs,
            QueryEventsListArgs,
            EventListResponse,
            MutationEventCreateArgs, MutationEventDeleteArgs, MutationEventUpdateArgs,
            SuccessResponse,
            
        } from '../../definitions/schema';

        export class EventRepository implements IEventRepository {
            private readonly http: IHttp;

            constructor() {
                this.http = new Http();
            }

            async getEvent(params: IRepositoryParams<QueryEventArgs>): Promise<Event | null> {
                return this.http.requestGraphQL<{
                    event: Event
                }>({
                    url: Environment.BACKEND_API_URL,
                    requestDocument:
                        gql`
                            query GET_EVENT(
                            $id: ID
                        ) {
                            event(
                              id: $id
                            ) {
                                id
createdAt
updatedAt
title
description
event_date
location    
                            }
                        }
                        `
                      ,
                      token: params.token,
                    variables: params.variables,
                })?.then((response) => response.event)?.catch(() => null);
            }

            async getEventsList(params: IRepositoryParams<QueryEventsListArgs>): Promise<EventListResponse> {
                return this.http.requestGraphQL<{
                    eventsList: EventListResponse
                }>({
                    url: Environment.BACKEND_API_URL,
                    requestDocument:
                        gql`
                            query GET_EVENTS (
                                  $first: Int
                                  $skip: Int
                                  $filter: EventFilter
                                  $sort: [EventSort!]
                            ) {
                                eventsList (
                                  first: $first
                                  skip: $skip
                                  filter: $filter
                                  sort: $sort
                                ) {
                                    items {
                                        id
createdAt
updatedAt
title
description
event_date
location
                                    }
                                    count
                            }
                        }
                      `,
                      token: params.token,
                    variables: params.variables,
                })
                ?.then((response) => response.eventsList);
            }

            
                    async createEvent(params: IRepositoryParams<MutationEventCreateArgs>): Promise<Event | null> {
                        return this.http.requestGraphQL<{
                          eventCreate: Event
                        }>({
                            url: Environment.BACKEND_API_URL,
                            requestDocument:
                                gql`
                                    mutation CREATE_EVENT (
                                      $data: EventCreateInput!
                                    ) {
                                         eventCreate (
                                          data: $data
                                        ) {
                                            id
                                        }
                                    }
                                `,
                            token: params.token,
                            variables: params.variables,
                        })?.then((response) => response.eventCreate)?.catch(() => null);
                  }
                

                    async deleteEvent(params: IRepositoryParams<MutationEventDeleteArgs>): Promise<SuccessResponse | null> {
                        return this.http.requestGraphQL<SuccessResponse>({
                            url: Environment.BACKEND_API_URL,
                            requestDocument:
                                gql`
                                    mutation DELETE_EVENT (
                                      $data: EventDeleteInput!
                                      $filter: EventKeyFilter
                                      $force: Boolean
                                    ) {
                                        eventDelete (
                                          data: $data
                                          filter: $filter
                                          force: $force
                                        ) {
                                            success
                                        }
                                    }
                                `,
                            token: params.token,
                            variables: params.variables,
                        })?.catch(() => null);
                }
                  

                    async updateEvent(params: IRepositoryParams<MutationEventUpdateArgs>): Promise<Event | null> {
                        return this.http.requestGraphQL<{
                          eventUpdate: Event
                        }>({
                            url: Environment.BACKEND_API_URL,
                            requestDocument:
                                gql`
                                    mutation UPDATE_EVENT (
                                      $data: EventUpdateInput!
                                    ) {
                                         eventUpdate (
                                          data: $data
                                        ) {
                                            id
                                        }
                                    }
                                `,
                            token: params.token,
                            variables: params.variables,
                        })?.then((response) => response.eventUpdate)?.catch(() => null);
                  }
                

            
        }
      