
        import {
            QueryReviewArgs,
            QueryReviewsListArgs,
            MutationReviewCreateArgs, MutationReviewDeleteArgs, MutationReviewUpdateArgs,
            
        } from '../../../definitions/schema';
        import {ReviewEntity } from '../../../domain';
        import {IRepositoryParams} from '../../../infrastructure';

        export interface IReviewUseCase {
            getReview(params: IRepositoryParams<QueryReviewArgs>): Promise<ReviewEntity | null>;
            getReviewList(params: IRepositoryParams<QueryReviewsListArgs>): Promise<{
                count: number;
                items: Array<ReviewEntity>;
            }>;
            createReview(params: IRepositoryParams<MutationReviewCreateArgs>): Promise<boolean>;
deleteReview(params: IRepositoryParams<MutationReviewDeleteArgs>): Promise<boolean>;
updateReview(params: IRepositoryParams<MutationReviewUpdateArgs>): Promise<boolean>;
              
        }
    