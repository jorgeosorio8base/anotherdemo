
        import {
            Recommendation,
            QueryRecommendationArgs,
            QueryRecommendationsListArgs,
            RecommendationListResponse,
            MutationRecommendationCreateArgs, MutationRecommendationDeleteArgs, MutationRecommendationUpdateArgs,
            SuccessResponse,
            
        } from '../../../definitions/schema';
        import {IRepositoryParams} from './iRepositoryParams';

        export interface IRecommendationRepository {
            getRecommendation(params: IRepositoryParams<QueryRecommendationArgs>): Promise<Recommendation | null>;
            getRecommendationsList(params: IRepositoryParams<QueryRecommendationsListArgs>): Promise<RecommendationListResponse>;
            createRecommendation(params: IRepositoryParams<MutationRecommendationCreateArgs>): Promise<Recommendation | null>;
deleteRecommendation(params: IRepositoryParams<MutationRecommendationDeleteArgs>): Promise<SuccessResponse | null>;
updateRecommendation(params: IRepositoryParams<MutationRecommendationUpdateArgs>): Promise<Recommendation | null>;
            
          }
    