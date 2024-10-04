
        import {IRepositoryParams, IDigitalResourceRepository} from './interfaces';
        import {Http, IHttp} from '../http';
        import { gql } from 'graphql-request';
        import {Environment} from '../../environment';
        import {
            DigitalResource,
            QueryDigitalResourceArgs,
            QueryDigitalResourcesListArgs,
            DigitalResourceListResponse,
            MutationDigitalResourceCreateArgs, MutationDigitalResourceDeleteArgs, MutationDigitalResourceUpdateArgs,
            SuccessResponse,
            
        } from '../../definitions/schema';

        export class DigitalResourceRepository implements IDigitalResourceRepository {
            private readonly http: IHttp;

            constructor() {
                this.http = new Http();
            }

            async getDigitalResource(params: IRepositoryParams<QueryDigitalResourceArgs>): Promise<DigitalResource | null> {
                return this.http.requestGraphQL<{
                    digitalResource: DigitalResource
                }>({
                    url: Environment.BACKEND_API_URL,
                    requestDocument:
                        gql`
                            query GET_DIGITALRESOURCE(
                            $id: ID
                        ) {
                            digitalResource(
                              id: $id
                            ) {
                                id
createdAt
updatedAt
title
author
format
publication_date
availability_status    
                            }
                        }
                        `
                      ,
                      token: params.token,
                    variables: params.variables,
                })?.then((response) => response.digitalResource)?.catch(() => null);
            }

            async getDigitalResourcesList(params: IRepositoryParams<QueryDigitalResourcesListArgs>): Promise<DigitalResourceListResponse> {
                return this.http.requestGraphQL<{
                    digitalResourcesList: DigitalResourceListResponse
                }>({
                    url: Environment.BACKEND_API_URL,
                    requestDocument:
                        gql`
                            query GET_DIGITALRESOURCES (
                                  $first: Int
                                  $skip: Int
                                  $filter: DigitalResourceFilter
                                  $sort: [DigitalResourceSort!]
                            ) {
                                digitalResourcesList (
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
author
format
publication_date
availability_status
                                    }
                                    count
                            }
                        }
                      `,
                      token: params.token,
                    variables: params.variables,
                })
                ?.then((response) => response.digitalResourcesList);
            }

            
                    async createDigitalResource(params: IRepositoryParams<MutationDigitalResourceCreateArgs>): Promise<DigitalResource | null> {
                        return this.http.requestGraphQL<{
                          digitalResourceCreate: DigitalResource
                        }>({
                            url: Environment.BACKEND_API_URL,
                            requestDocument:
                                gql`
                                    mutation CREATE_DIGITALRESOURCE (
                                      $data: DigitalResourceCreateInput!
                                    ) {
                                         digitalResourceCreate (
                                          data: $data
                                        ) {
                                            id
                                        }
                                    }
                                `,
                            token: params.token,
                            variables: params.variables,
                        })?.then((response) => response.digitalResourceCreate)?.catch(() => null);
                  }
                

                    async deleteDigitalResource(params: IRepositoryParams<MutationDigitalResourceDeleteArgs>): Promise<SuccessResponse | null> {
                        return this.http.requestGraphQL<SuccessResponse>({
                            url: Environment.BACKEND_API_URL,
                            requestDocument:
                                gql`
                                    mutation DELETE_DIGITALRESOURCE (
                                      $data: DigitalResourceDeleteInput!
                                      $filter: DigitalResourceKeyFilter
                                      $force: Boolean
                                    ) {
                                        digitalResourceDelete (
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
                  

                    async updateDigitalResource(params: IRepositoryParams<MutationDigitalResourceUpdateArgs>): Promise<DigitalResource | null> {
                        return this.http.requestGraphQL<{
                          digitalResourceUpdate: DigitalResource
                        }>({
                            url: Environment.BACKEND_API_URL,
                            requestDocument:
                                gql`
                                    mutation UPDATE_DIGITALRESOURCE (
                                      $data: DigitalResourceUpdateInput!
                                    ) {
                                         digitalResourceUpdate (
                                          data: $data
                                        ) {
                                            id
                                        }
                                    }
                                `,
                            token: params.token,
                            variables: params.variables,
                        })?.then((response) => response.digitalResourceUpdate)?.catch(() => null);
                  }
                

            
        }
      