
        import {
            Review,
            QueryReviewArgs,
            QueryReviewsListArgs,
            ReviewListResponse,
            MutationReviewCreateArgs, MutationReviewDeleteArgs, MutationReviewUpdateArgs,
            SuccessResponse,
            
        } from '../../../definitions/schema';
        import {IRepositoryParams} from './iRepositoryParams';

        export interface IReviewRepository {
            getReview(params: IRepositoryParams<QueryReviewArgs>): Promise<Review | null>;
            getReviewsList(params: IRepositoryParams<QueryReviewsListArgs>): Promise<ReviewListResponse>;
            createReview(params: IRepositoryParams<MutationReviewCreateArgs>): Promise<Review | null>;
deleteReview(params: IRepositoryParams<MutationReviewDeleteArgs>): Promise<SuccessResponse | null>;
updateReview(params: IRepositoryParams<MutationReviewUpdateArgs>): Promise<Review | null>;
            
          }
    