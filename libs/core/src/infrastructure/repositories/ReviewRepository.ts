
        import {IRepositoryParams, IReviewRepository} from './interfaces';
        import {Http, IHttp} from '../http';
        import { gql } from 'graphql-request';
        import {Environment} from '../../environment';
        import {
            Review,
            QueryReviewArgs,
            QueryReviewsListArgs,
            ReviewListResponse,
            MutationReviewCreateArgs, MutationReviewDeleteArgs, MutationReviewUpdateArgs,
            SuccessResponse,
            
        } from '../../definitions/schema';

        export class ReviewRepository implements IReviewRepository {
            private readonly http: IHttp;

            constructor() {
                this.http = new Http();
            }

            async getReview(params: IRepositoryParams<QueryReviewArgs>): Promise<Review | null> {
                return this.http.requestGraphQL<{
                    review: Review
                }>({
                    url: Environment.BACKEND_API_URL,
                    requestDocument:
                        gql`
                            query GET_REVIEW(
                            $id: ID
                        ) {
                            review(
                              id: $id
                            ) {
                                id
createdAt
updatedAt


rating
comment    
                            }
                        }
                        `
                      ,
                      token: params.token,
                    variables: params.variables,
                })?.then((response) => response.review)?.catch(() => null);
            }

            async getReviewsList(params: IRepositoryParams<QueryReviewsListArgs>): Promise<ReviewListResponse> {
                return this.http.requestGraphQL<{
                    reviewsList: ReviewListResponse
                }>({
                    url: Environment.BACKEND_API_URL,
                    requestDocument:
                        gql`
                            query GET_REVIEWS (
                                  $first: Int
                                  $skip: Int
                                  $filter: ReviewFilter
                                  $sort: [ReviewSort!]
                            ) {
                                reviewsList (
                                  first: $first
                                  skip: $skip
                                  filter: $filter
                                  sort: $sort
                                ) {
                                    items {
                                        id
createdAt
updatedAt


rating
comment
                                    }
                                    count
                            }
                        }
                      `,
                      token: params.token,
                    variables: params.variables,
                })
                ?.then((response) => response.reviewsList);
            }

            
                    async createReview(params: IRepositoryParams<MutationReviewCreateArgs>): Promise<Review | null> {
                        return this.http.requestGraphQL<{
                          reviewCreate: Review
                        }>({
                            url: Environment.BACKEND_API_URL,
                            requestDocument:
                                gql`
                                    mutation CREATE_REVIEW (
                                      $data: ReviewCreateInput!
                                    ) {
                                         reviewCreate (
                                          data: $data
                                        ) {
                                            id
                                        }
                                    }
                                `,
                            token: params.token,
                            variables: params.variables,
                        })?.then((response) => response.reviewCreate)?.catch(() => null);
                  }
                

                    async deleteReview(params: IRepositoryParams<MutationReviewDeleteArgs>): Promise<SuccessResponse | null> {
                        return this.http.requestGraphQL<SuccessResponse>({
                            url: Environment.BACKEND_API_URL,
                            requestDocument:
                                gql`
                                    mutation DELETE_REVIEW (
                                      $data: ReviewDeleteInput!
                                      $filter: ReviewKeyFilter
                                      $force: Boolean
                                    ) {
                                        reviewDelete (
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
                  

                    async updateReview(params: IRepositoryParams<MutationReviewUpdateArgs>): Promise<Review | null> {
                        return this.http.requestGraphQL<{
                          reviewUpdate: Review
                        }>({
                            url: Environment.BACKEND_API_URL,
                            requestDocument:
                                gql`
                                    mutation UPDATE_REVIEW (
                                      $data: ReviewUpdateInput!
                                    ) {
                                         reviewUpdate (
                                          data: $data
                                        ) {
                                            id
                                        }
                                    }
                                `,
                            token: params.token,
                            variables: params.variables,
                        })?.then((response) => response.reviewUpdate)?.catch(() => null);
                  }
                

            
        }
      