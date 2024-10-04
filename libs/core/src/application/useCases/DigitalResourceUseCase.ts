
        import {IDigitalResourceUseCase} from './interfaces';
        import {DigitalResourceEntity} from '../../domain';
        import {
            QueryDigitalResourceArgs,
            QueryDigitalResourcesListArgs,
            MutationDigitalResourceCreateArgs, MutationDigitalResourceDeleteArgs, MutationDigitalResourceUpdateArgs,
            
        } from '../../definitions/schema';
        import {IDigitalResourceRepository, DigitalResourceRepository, IRepositoryParams} from '../../infrastructure';

        export class DigitalResourceUseCase implements IDigitalResourceUseCase {
              private readonly repository: IDigitalResourceRepository;
              private readonly errorCatcher: (error: unknown, methodName: string) => never;

              constructor() {
                    this.repository = new DigitalResourceRepository();
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

            async getDigitalResource(params: IRepositoryParams<QueryDigitalResourceArgs>): Promise<DigitalResourceEntity | null> {
                        try {
                            return this.repository.getDigitalResource(params)
                            .then((result) => new DigitalResourceEntity(result))
                            .catch((err) => this.errorCatcher(err, 'getDigitalResource'));
                        } catch (error) {
                            this.errorCatcher(error, 'getDigitalResource');
                        }
            }

            async getDigitalResourceList(params: IRepositoryParams<QueryDigitalResourcesListArgs>): Promise<{
                count: number;
                items: Array<DigitalResourceEntity>;
                }> {
                try {
                    return this.repository.getDigitalResourcesList(params)
                    .then((result) => {
                        return {
                            count: result?.count || 0,
                            items: result?.items?.map((item) => new DigitalResourceEntity(item)) || [],
                        };
                    })
                    .catch((err) => this.errorCatcher(err, 'getDigitalResourcesList'));
                } catch (error) {
                    this.errorCatcher(error, 'getDigitalResourcesList');
                }
            }

            async createDigitalResource(params: IRepositoryParams<MutationDigitalResourceCreateArgs>): Promise<boolean> {
                        try {
                            return this.repository.createDigitalResource(params)
                            .then((result) => !!result?.id)
                            .catch((err) => this.errorCatcher(err, 'createDigitalResource'));
                        } catch (error) {
                            this.errorCatcher(error, 'createDigitalResource');
                        }
                    }

                    async deleteDigitalResource(params: IRepositoryParams<MutationDigitalResourceDeleteArgs>): Promise<boolean> {
                        try {
                            return this.repository.deleteDigitalResource(params)
                            .then((result) => !!result?.success)
                            .catch((err) => this.errorCatcher(err, 'deleteDigitalResource'));
                        } catch (error) {
                            this.errorCatcher(error, 'deleteDigitalResource');
                        }
                    }
                  
async updateDigitalResource(params: IRepositoryParams<MutationDigitalResourceUpdateArgs>): Promise<boolean> {
                        try {
                            return this.repository.updateDigitalResource(params)
                            .then((result) => !!result?.id)
                            .catch((err) => this.errorCatcher(err, 'updateDigitalResource'));
                        } catch (error) {
                            this.errorCatcher(error, 'updateDigitalResource');
                        }
                    }

              
            }
    