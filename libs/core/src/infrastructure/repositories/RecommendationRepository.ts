
        import {IRepositoryParams, IRecommendationRepository} from './interfaces';
        import {Http, IHttp} from '../http';
        import { gql } from 'graphql-request';
        import {Environment} from '../../environment';
        import {
            Recommendation,
            QueryRecommendationArgs,
            QueryRecommendationsListArgs,
            RecommendationListResponse,
            MutationRecommendationCreateArgs, MutationRecommendationDeleteArgs, MutationRecommendationUpdateArgs,
            SuccessResponse,
            
        } from '../../definitions/schema';

        export class RecommendationRepository implements IRecommendationRepository {
            private readonly http: IHttp;

            constructor() {
                this.http = new Http();
            }

            async getRecommendation(params: IRepositoryParams<QueryRecommendationArgs>): Promise<Recommendation | null> {
                return this.http.requestGraphQL<{
                    recommendation: Recommendation
                }>({
                    url: Environment.BACKEND_API_URL,
                    requestDocument:
                        gql`
                            query GET_RECOMMENDATION(
                            $id: ID
                        ) {
                            recommendation(
                              id: $id
                            ) {
                                id
createdAt
updatedAt


reason    
                            }
                        }
                        `
                      ,
                      token: params.token,
                    variables: params.variables,
                })?.then((response) => response.recommendation)?.catch(() => null);
            }

            async getRecommendationsList(params: IRepositoryParams<QueryRecommendationsListArgs>): Promise<RecommendationListResponse> {
                return this.http.requestGraphQL<{
                    recommendationsList: RecommendationListResponse
                }>({
                    url: Environment.BACKEND_API_URL,
                    requestDocument:
                        gql`
                            query GET_RECOMMENDATIONS (
                                  $first: Int
                                  $skip: Int
                                  $filter: RecommendationFilter
                                  $sort: [RecommendationSort!]
                            ) {
                                recommendationsList (
                                  first: $first
                                  skip: $skip
                                  filter: $filter
                                  sort: $sort
                                ) {
                                    items {
                                        id
createdAt
updatedAt


reason
                                    }
                                    count
                            }
                        }
                      `,
                      token: params.token,
                    variables: params.variables,
                })
                ?.then((response) => response.recommendationsList);
            }

            
                    async createRecommendation(params: IRepositoryParams<MutationRecommendationCreateArgs>): Promise<Recommendation | null> {
                        return this.http.requestGraphQL<{
                          recommendationCreate: Recommendation
                        }>({
                            url: Environment.BACKEND_API_URL,
                            requestDocument:
                                gql`
                                    mutation CREATE_RECOMMENDATION (
                                      $data: RecommendationCreateInput!
                                    ) {
                                         recommendationCreate (
                                          data: $data
                                        ) {
                                            id
                                        }
                                    }
                                `,
                            token: params.token,
                            variables: params.variables,
                        })?.then((response) => response.recommendationCreate)?.catch(() => null);
                  }
                

                    async deleteRecommendation(params: IRepositoryParams<MutationRecommendationDeleteArgs>): Promise<SuccessResponse | null> {
                        return this.http.requestGraphQL<SuccessResponse>({
                            url: Environment.BACKEND_API_URL,
                            requestDocument:
                                gql`
                                    mutation DELETE_RECOMMENDATION (
                                      $data: RecommendationDeleteInput!
                                      $filter: RecommendationKeyFilter
                                      $force: Boolean
                                    ) {
                                        recommendationDelete (
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
                  

                    async updateRecommendation(params: IRepositoryParams<MutationRecommendationUpdateArgs>): Promise<Recommendation | null> {
                        return this.http.requestGraphQL<{
                          recommendationUpdate: Recommendation
                        }>({
                            url: Environment.BACKEND_API_URL,
                            requestDocument:
                                gql`
                                    mutation UPDATE_RECOMMENDATION (
                                      $data: RecommendationUpdateInput!
                                    ) {
                                         recommendationUpdate (
                                          data: $data
                                        ) {
                                            id
                                        }
                                    }
                                `,
                            token: params.token,
                            variables: params.variables,
                        })?.then((response) => response.recommendationUpdate)?.catch(() => null);
                  }
                

            
        }
      