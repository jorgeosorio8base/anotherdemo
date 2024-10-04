
        import {IRepositoryParams, IPatronRepository} from './interfaces';
        import {Http, IHttp} from '../http';
        import { gql } from 'graphql-request';
        import {Environment} from '../../environment';
        import {
            Patron,
            QueryPatronArgs,
            QueryPatronsListArgs,
            PatronListResponse,
            MutationPatronCreateArgs, MutationPatronDeleteArgs, MutationPatronUpdateArgs,
            SuccessResponse,
            
        } from '../../definitions/schema';

        export class PatronRepository implements IPatronRepository {
            private readonly http: IHttp;

            constructor() {
                this.http = new Http();
            }

            async getPatron(params: IRepositoryParams<QueryPatronArgs>): Promise<Patron | null> {
                return this.http.requestGraphQL<{
                    patron: Patron
                }>({
                    url: Environment.BACKEND_API_URL,
                    requestDocument:
                        gql`
                            query GET_PATRON(
                            $id: ID,$user_id: String
                        ) {
                            patron(
                              id: $id,user_id: $user_id
                            ) {
                                id
createdAt
updatedAt

membership_status
borrowing_history



    
                            }
                        }
                        `
                      ,
                      token: params.token,
                    variables: params.variables,
                })?.then((response) => response.patron)?.catch(() => null);
            }

            async getPatronsList(params: IRepositoryParams<QueryPatronsListArgs>): Promise<PatronListResponse> {
                return this.http.requestGraphQL<{
                    patronsList: PatronListResponse
                }>({
                    url: Environment.BACKEND_API_URL,
                    requestDocument:
                        gql`
                            query GET_PATRONS (
                                  $first: Int
                                  $skip: Int
                                  $filter: PatronFilter
                                  $sort: [PatronSort!]
                            ) {
                                patronsList (
                                  first: $first
                                  skip: $skip
                                  filter: $filter
                                  sort: $sort
                                ) {
                                    items {
                                        id
createdAt
updatedAt

membership_status
borrowing_history




                                    }
                                    count
                            }
                        }
                      `,
                      token: params.token,
                    variables: params.variables,
                })
                ?.then((response) => response.patronsList);
            }

            
                    async createPatron(params: IRepositoryParams<MutationPatronCreateArgs>): Promise<Patron | null> {
                        return this.http.requestGraphQL<{
                          patronCreate: Patron
                        }>({
                            url: Environment.BACKEND_API_URL,
                            requestDocument:
                                gql`
                                    mutation CREATE_PATRON (
                                      $data: PatronCreateInput!
                                    ) {
                                         patronCreate (
                                          data: $data
                                        ) {
                                            id
                                        }
                                    }
                                `,
                            token: params.token,
                            variables: params.variables,
                        })?.then((response) => response.patronCreate)?.catch(() => null);
                  }
                

                    async deletePatron(params: IRepositoryParams<MutationPatronDeleteArgs>): Promise<SuccessResponse | null> {
                        return this.http.requestGraphQL<SuccessResponse>({
                            url: Environment.BACKEND_API_URL,
                            requestDocument:
                                gql`
                                    mutation DELETE_PATRON (
                                      $data: PatronDeleteInput!
                                      $filter: PatronKeyFilter
                                      $force: Boolean
                                    ) {
                                        patronDelete (
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
                  

                    async updatePatron(params: IRepositoryParams<MutationPatronUpdateArgs>): Promise<Patron | null> {
                        return this.http.requestGraphQL<{
                          patronUpdate: Patron
                        }>({
                            url: Environment.BACKEND_API_URL,
                            requestDocument:
                                gql`
                                    mutation UPDATE_PATRON (
                                      $data: PatronUpdateInput!
                                    ) {
                                         patronUpdate (
                                          data: $data
                                        ) {
                                            id
                                        }
                                    }
                                `,
                            token: params.token,
                            variables: params.variables,
                        })?.then((response) => response.patronUpdate)?.catch(() => null);
                  }
                

            
        }
      