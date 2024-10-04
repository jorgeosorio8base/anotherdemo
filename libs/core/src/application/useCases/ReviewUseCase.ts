
        import {IReviewUseCase} from './interfaces';
        import {ReviewEntity} from '../../domain';
        import {
            QueryReviewArgs,
            QueryReviewsListArgs,
            MutationReviewCreateArgs, MutationReviewDeleteArgs, MutationReviewUpdateArgs,
            
        } from '../../definitions/schema';
        import {IReviewRepository, ReviewRepository, IRepositoryParams} from '../../infrastructure';

        export class ReviewUseCase implements IReviewUseCase {
              private readonly repository: IReviewRepository;
              private readonly errorCatcher: (error: unknown, methodName: string) => never;

              constructor() {
                    this.repository = new ReviewRepository();
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

            async getReview(params: IRepositoryParams<QueryReviewArgs>): Promise<ReviewEntity | null> {
                        try {
                            return this.repository.getReview(params)
                            .then((result) => new ReviewEntity(result))
                            .catch((err) => this.errorCatcher(err, 'getReview'));
                        } catch (error) {
                            this.errorCatcher(error, 'getReview');
                        }
            }

            async getReviewList(params: IRepositoryParams<QueryReviewsListArgs>): Promise<{
                count: number;
                items: Array<ReviewEntity>;
                }> {
                try {
                    return this.repository.getReviewsList(params)
                    .then((result) => {
                        return {
                            count: result?.count || 0,
                            items: result?.items?.map((item) => new ReviewEntity(item)) || [],
                        };
                    })
                    .catch((err) => this.errorCatcher(err, 'getReviewsList'));
                } catch (error) {
                    this.errorCatcher(error, 'getReviewsList');
                }
            }

            async createReview(params: IRepositoryParams<MutationReviewCreateArgs>): Promise<boolean> {
                        try {
                            return this.repository.createReview(params)
                            .then((result) => !!result?.id)
                            .catch((err) => this.errorCatcher(err, 'createReview'));
                        } catch (error) {
                            this.errorCatcher(error, 'createReview');
                        }
                    }

                    async deleteReview(params: IRepositoryParams<MutationReviewDeleteArgs>): Promise<boolean> {
                        try {
                            return this.repository.deleteReview(params)
                            .then((result) => !!result?.success)
                            .catch((err) => this.errorCatcher(err, 'deleteReview'));
                        } catch (error) {
                            this.errorCatcher(error, 'deleteReview');
                        }
                    }
                  
async updateReview(params: IRepositoryParams<MutationReviewUpdateArgs>): Promise<boolean> {
                        try {
                            return this.repository.updateReview(params)
                            .then((result) => !!result?.id)
                            .catch((err) => this.errorCatcher(err, 'updateReview'));
                        } catch (error) {
                            this.errorCatcher(error, 'updateReview');
                        }
                    }

              
            }
    