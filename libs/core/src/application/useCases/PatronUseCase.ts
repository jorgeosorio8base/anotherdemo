
        import {IPatronUseCase} from './interfaces';
        import {PatronEntity} from '../../domain';
        import {
            QueryPatronArgs,
            QueryPatronsListArgs,
            MutationPatronCreateArgs, MutationPatronDeleteArgs, MutationPatronUpdateArgs,
            
        } from '../../definitions/schema';
        import {IPatronRepository, PatronRepository, IRepositoryParams} from '../../infrastructure';

        export class PatronUseCase implements IPatronUseCase {
              private readonly repository: IPatronRepository;
              private readonly errorCatcher: (error: unknown, methodName: string) => never;

              constructor() {
                    this.repository = new PatronRepository();
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

            async getPatron(params: IRepositoryParams<QueryPatronArgs>): Promise<PatronEntity | null> {
                        try {
                            return this.repository.getPatron(params)
                            .then((result) => new PatronEntity(result))
                            .catch((err) => this.errorCatcher(err, 'getPatron'));
                        } catch (error) {
                            this.errorCatcher(error, 'getPatron');
                        }
            }

            async getPatronList(params: IRepositoryParams<QueryPatronsListArgs>): Promise<{
                count: number;
                items: Array<PatronEntity>;
                }> {
                try {
                    return this.repository.getPatronsList(params)
                    .then((result) => {
                        return {
                            count: result?.count || 0,
                            items: result?.items?.map((item) => new PatronEntity(item)) || [],
                        };
                    })
                    .catch((err) => this.errorCatcher(err, 'getPatronsList'));
                } catch (error) {
                    this.errorCatcher(error, 'getPatronsList');
                }
            }

            async createPatron(params: IRepositoryParams<MutationPatronCreateArgs>): Promise<boolean> {
                        try {
                            return this.repository.createPatron(params)
                            .then((result) => !!result?.id)
                            .catch((err) => this.errorCatcher(err, 'createPatron'));
                        } catch (error) {
                            this.errorCatcher(error, 'createPatron');
                        }
                    }

                    async deletePatron(params: IRepositoryParams<MutationPatronDeleteArgs>): Promise<boolean> {
                        try {
                            return this.repository.deletePatron(params)
                            .then((result) => !!result?.success)
                            .catch((err) => this.errorCatcher(err, 'deletePatron'));
                        } catch (error) {
                            this.errorCatcher(error, 'deletePatron');
                        }
                    }
                  
async updatePatron(params: IRepositoryParams<MutationPatronUpdateArgs>): Promise<boolean> {
                        try {
                            return this.repository.updatePatron(params)
                            .then((result) => !!result?.id)
                            .catch((err) => this.errorCatcher(err, 'updatePatron'));
                        } catch (error) {
                            this.errorCatcher(error, 'updatePatron');
                        }
                    }

              
            }
    