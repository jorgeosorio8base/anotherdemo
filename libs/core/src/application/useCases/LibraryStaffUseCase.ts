
        import {ILibraryStaffUseCase} from './interfaces';
        import {LibraryStaffEntity} from '../../domain';
        import {
            QueryLibraryStaffArgs,
            QueryLibraryStaffListArgs,
            MutationLibraryStaffCreateArgs, MutationLibraryStaffDeleteArgs, MutationLibraryStaffUpdateArgs,
            
        } from '../../definitions/schema';
        import {ILibraryStaffRepository, LibraryStaffRepository, IRepositoryParams} from '../../infrastructure';

        export class LibraryStaffUseCase implements ILibraryStaffUseCase {
              private readonly repository: ILibraryStaffRepository;
              private readonly errorCatcher: (error: unknown, methodName: string) => never;

              constructor() {
                    this.repository = new LibraryStaffRepository();
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

            async getLibraryStaff(params: IRepositoryParams<QueryLibraryStaffArgs>): Promise<LibraryStaffEntity | null> {
                        try {
                            return this.repository.getLibraryStaff(params)
                            .then((result) => new LibraryStaffEntity(result))
                            .catch((err) => this.errorCatcher(err, 'getLibraryStaff'));
                        } catch (error) {
                            this.errorCatcher(error, 'getLibraryStaff');
                        }
            }

            async getLibraryStaffList(params: IRepositoryParams<QueryLibraryStaffListArgs>): Promise<{
                count: number;
                items: Array<LibraryStaffEntity>;
                }> {
                try {
                    return this.repository.getLibraryStaffList(params)
                    .then((result) => {
                        return {
                            count: result?.count || 0,
                            items: result?.items?.map((item) => new LibraryStaffEntity(item)) || [],
                        };
                    })
                    .catch((err) => this.errorCatcher(err, 'getLibraryStaffList'));
                } catch (error) {
                    this.errorCatcher(error, 'getLibraryStaffList');
                }
            }

            async createLibraryStaff(params: IRepositoryParams<MutationLibraryStaffCreateArgs>): Promise<boolean> {
                        try {
                            return this.repository.createLibraryStaff(params)
                            .then((result) => !!result?.id)
                            .catch((err) => this.errorCatcher(err, 'createLibraryStaff'));
                        } catch (error) {
                            this.errorCatcher(error, 'createLibraryStaff');
                        }
                    }

                    async deleteLibraryStaff(params: IRepositoryParams<MutationLibraryStaffDeleteArgs>): Promise<boolean> {
                        try {
                            return this.repository.deleteLibraryStaff(params)
                            .then((result) => !!result?.success)
                            .catch((err) => this.errorCatcher(err, 'deleteLibraryStaff'));
                        } catch (error) {
                            this.errorCatcher(error, 'deleteLibraryStaff');
                        }
                    }
                  
async updateLibraryStaff(params: IRepositoryParams<MutationLibraryStaffUpdateArgs>): Promise<boolean> {
                        try {
                            return this.repository.updateLibraryStaff(params)
                            .then((result) => !!result?.id)
                            .catch((err) => this.errorCatcher(err, 'updateLibraryStaff'));
                        } catch (error) {
                            this.errorCatcher(error, 'updateLibraryStaff');
                        }
                    }

              
            }
    