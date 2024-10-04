
        import {IHoldUseCase} from './interfaces';
        import {HoldEntity} from '../../domain';
        import {
            QueryHoldArgs,
            QueryHoldsListArgs,
            MutationHoldCreateArgs, MutationHoldDeleteArgs, MutationHoldUpdateArgs,
            
        } from '../../definitions/schema';
        import {IHoldRepository, HoldRepository, IRepositoryParams} from '../../infrastructure';

        export class HoldUseCase implements IHoldUseCase {
              private readonly repository: IHoldRepository;
              private readonly errorCatcher: (error: unknown, methodName: string) => never;

              constructor() {
                    this.repository = new HoldRepository();
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

            async getHold(params: IRepositoryParams<QueryHoldArgs>): Promise<HoldEntity | null> {
                        try {
                            return this.repository.getHold(params)
                            .then((result) => new HoldEntity(result))
                            .catch((err) => this.errorCatcher(err, 'getHold'));
                        } catch (error) {
                            this.errorCatcher(error, 'getHold');
                        }
            }

            async getHoldList(params: IRepositoryParams<QueryHoldsListArgs>): Promise<{
                count: number;
                items: Array<HoldEntity>;
                }> {
                try {
                    return this.repository.getHoldsList(params)
                    .then((result) => {
                        return {
                            count: result?.count || 0,
                            items: result?.items?.map((item) => new HoldEntity(item)) || [],
                        };
                    })
                    .catch((err) => this.errorCatcher(err, 'getHoldsList'));
                } catch (error) {
                    this.errorCatcher(error, 'getHoldsList');
                }
            }

            async createHold(params: IRepositoryParams<MutationHoldCreateArgs>): Promise<boolean> {
                        try {
                            return this.repository.createHold(params)
                            .then((result) => !!result?.id)
                            .catch((err) => this.errorCatcher(err, 'createHold'));
                        } catch (error) {
                            this.errorCatcher(error, 'createHold');
                        }
                    }

                    async deleteHold(params: IRepositoryParams<MutationHoldDeleteArgs>): Promise<boolean> {
                        try {
                            return this.repository.deleteHold(params)
                            .then((result) => !!result?.success)
                            .catch((err) => this.errorCatcher(err, 'deleteHold'));
                        } catch (error) {
                            this.errorCatcher(error, 'deleteHold');
                        }
                    }
                  
async updateHold(params: IRepositoryParams<MutationHoldUpdateArgs>): Promise<boolean> {
                        try {
                            return this.repository.updateHold(params)
                            .then((result) => !!result?.id)
                            .catch((err) => this.errorCatcher(err, 'updateHold'));
                        } catch (error) {
                            this.errorCatcher(error, 'updateHold');
                        }
                    }

              
            }
    