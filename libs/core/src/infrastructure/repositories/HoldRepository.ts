
        import {IRepositoryParams, IHoldRepository} from './interfaces';
        import {Http, IHttp} from '../http';
        import { gql } from 'graphql-request';
        import {Environment} from '../../environment';
        import {
            Hold,
            QueryHoldArgs,
            QueryHoldsListArgs,
            HoldListResponse,
            MutationHoldCreateArgs, MutationHoldDeleteArgs, MutationHoldUpdateArgs,
            SuccessResponse,
            
        } from '../../definitions/schema';

        export class HoldRepository implements IHoldRepository {
            private readonly http: IHttp;

            constructor() {
                this.http = new Http();
            }

            async getHold(params: IRepositoryParams<QueryHoldArgs>): Promise<Hold | null> {
                return this.http.requestGraphQL<{
                    hold: Hold
                }>({
                    url: Environment.BACKEND_API_URL,
                    requestDocument:
                        gql`
                            query GET_HOLD(
                            $id: ID
                        ) {
                            hold(
                              id: $id
                            ) {
                                id
createdAt
updatedAt


position_in_queue    
                            }
                        }
                        `
                      ,
                      token: params.token,
                    variables: params.variables,
                })?.then((response) => response.hold)?.catch(() => null);
            }

            async getHoldsList(params: IRepositoryParams<QueryHoldsListArgs>): Promise<HoldListResponse> {
                return this.http.requestGraphQL<{
                    holdsList: HoldListResponse
                }>({
                    url: Environment.BACKEND_API_URL,
                    requestDocument:
                        gql`
                            query GET_HOLDS (
                                  $first: Int
                                  $skip: Int
                                  $filter: HoldFilter
                                  $sort: [HoldSort!]
                            ) {
                                holdsList (
                                  first: $first
                                  skip: $skip
                                  filter: $filter
                                  sort: $sort
                                ) {
                                    items {
                                        id
createdAt
updatedAt


position_in_queue
                                    }
                                    count
                            }
                        }
                      `,
                      token: params.token,
                    variables: params.variables,
                })
                ?.then((response) => response.holdsList);
            }

            
                    async createHold(params: IRepositoryParams<MutationHoldCreateArgs>): Promise<Hold | null> {
                        return this.http.requestGraphQL<{
                          holdCreate: Hold
                        }>({
                            url: Environment.BACKEND_API_URL,
                            requestDocument:
                                gql`
                                    mutation CREATE_HOLD (
                                      $data: HoldCreateInput!
                                    ) {
                                         holdCreate (
                                          data: $data
                                        ) {
                                            id
                                        }
                                    }
                                `,
                            token: params.token,
                            variables: params.variables,
                        })?.then((response) => response.holdCreate)?.catch(() => null);
                  }
                

                    async deleteHold(params: IRepositoryParams<MutationHoldDeleteArgs>): Promise<SuccessResponse | null> {
                        return this.http.requestGraphQL<SuccessResponse>({
                            url: Environment.BACKEND_API_URL,
                            requestDocument:
                                gql`
                                    mutation DELETE_HOLD (
                                      $data: HoldDeleteInput!
                                      $filter: HoldKeyFilter
                                      $force: Boolean
                                    ) {
                                        holdDelete (
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
                  

                    async updateHold(params: IRepositoryParams<MutationHoldUpdateArgs>): Promise<Hold | null> {
                        return this.http.requestGraphQL<{
                          holdUpdate: Hold
                        }>({
                            url: Environment.BACKEND_API_URL,
                            requestDocument:
                                gql`
                                    mutation UPDATE_HOLD (
                                      $data: HoldUpdateInput!
                                    ) {
                                         holdUpdate (
                                          data: $data
                                        ) {
                                            id
                                        }
                                    }
                                `,
                            token: params.token,
                            variables: params.variables,
                        })?.then((response) => response.holdUpdate)?.catch(() => null);
                  }
                

            
        }
      