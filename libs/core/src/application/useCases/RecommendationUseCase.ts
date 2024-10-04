
        import {IRecommendationUseCase} from './interfaces';
        import {RecommendationEntity} from '../../domain';
        import {
            QueryRecommendationArgs,
            QueryRecommendationsListArgs,
            MutationRecommendationCreateArgs, MutationRecommendationDeleteArgs, MutationRecommendationUpdateArgs,
            
        } from '../../definitions/schema';
        import {IRecommendationRepository, RecommendationRepository, IRepositoryParams} from '../../infrastructure';

        export class RecommendationUseCase implements IRecommendationUseCase {
              private readonly repository: IRecommendationRepository;
              private readonly errorCatcher: (error: unknown, methodName: string) => never;

              constructor() {
                    this.repository = new RecommendationRepository();
                    this.errorCatcher = (
                      error: unknown,
                      methodName: string,
                    ) => {
                        if (error instanceof Error) {
                            throw new Error(error.message);
                        }
                        
                        if (typeof error === 'string') {
                            throw new Error(error);
                        }

                        throw new Error(`An error occurred trying to ${methodName}`);
                    };
              }

            async getRecommendation(params: IRepositoryParams<QueryRecommendationArgs>): Promise<RecommendationEntity | null> {
                        try {
                            return this.repository.getRecommendation(params)
                            .then((result) => new RecommendationEntity(result))
                            .catch((err) => this.errorCatcher(err, 'getRecommendation'));
                        } catch (error) {
                            this.errorCatcher(error, 'getRecommendation');
                        }
            }

            async getRecommendationList(params: IRepositoryParams<QueryRecommendationsListArgs>): Promise<{
                count: number;
                items: Array<RecommendationEntity>;
                }> {
                try {
                    return this.repository.getRecommendationsList(params)
                    .then((result) => {
                        return {
                            count: result?.count || 0,
                            items: result?.items?.map((item) => new RecommendationEntity(item)) || [],
                        };
                    })
                    .catch((err) => this.errorCatcher(err, 'getRecommendationsList'));
                } catch (error) {
                    this.errorCatcher(error, 'getRecommendationsList');
                }
            }

            async createRecommendation(params: IRepositoryParams<MutationRecommendationCreateArgs>): Promise<boolean> {
                        try {
                            return this.repository.createRecommendation(params)
                            .then((result) => !!result?.id)
                            .catch((err) => this.errorCatcher(err, 'createRecommendation'));
                        } catch (error) {
                            this.errorCatcher(error, 'createRecommendation');
                        }
                    }

                    async deleteRecommendation(params: IRepositoryParams<MutationRecommendationDeleteArgs>): Promise<boolean> {
                        try {
                            return this.repository.deleteRecommendation(params)
                            .then((result) => !!result?.success)
                            .catch((err) => this.errorCatcher(err, 'deleteRecommendation'));
                        } catch (error) {
                            this.errorCatcher(error, 'deleteRecommendation');
                        }
                    }
                  
async updateRecommendation(params: IRepositoryParams<MutationRecommendationUpdateArgs>): Promise<boolean> {
                        try {
                            return this.repository.updateRecommendation(params)
                            .then((result) => !!result?.id)
                            .catch((err) => this.errorCatcher(err, 'updateRecommendation'));
                        } catch (error) {
                            this.errorCatcher(error, 'updateRecommendation');
                        }
                    }

              
            }
    