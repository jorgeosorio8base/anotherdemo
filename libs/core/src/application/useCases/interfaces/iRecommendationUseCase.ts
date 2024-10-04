
        import {
            QueryRecommendationArgs,
            QueryRecommendationsListArgs,
            MutationRecommendationCreateArgs, MutationRecommendationDeleteArgs, MutationRecommendationUpdateArgs,
            
        } from '../../../definitions/schema';
        import {RecommendationEntity } from '../../../domain';
        import {IRepositoryParams} from '../../../infrastructure';

        export interface IRecommendationUseCase {
            getRecommendation(params: IRepositoryParams<QueryRecommendationArgs>): Promise<RecommendationEntity | null>;
            getRecommendationList(params: IRepositoryParams<QueryRecommendationsListArgs>): Promise<{
                count: number;
                items: Array<RecommendationEntity>;
            }>;
            createRecommendation(params: IRepositoryParams<MutationRecommendationCreateArgs>): Promise<boolean>;
deleteRecommendation(params: IRepositoryParams<MutationRecommendationDeleteArgs>): Promise<boolean>;
updateRecommendation(params: IRepositoryParams<MutationRecommendationUpdateArgs>): Promise<boolean>;
              
        }
    