
        import {ILoanUseCase} from './interfaces';
        import {LoanEntity} from '../../domain';
        import {
            QueryLoanArgs,
            QueryLoansListArgs,
            MutationLoanCreateArgs, MutationLoanDeleteArgs, MutationLoanUpdateArgs,
            
        } from '../../definitions/schema';
        import {ILoanRepository, LoanRepository, IRepositoryParams} from '../../infrastructure';

        export class LoanUseCase implements ILoanUseCase {
              private readonly repository: ILoanRepository;
              private readonly errorCatcher: (error: unknown, methodName: string) => never;

              constructor() {
                    this.repository = new LoanRepository();
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

            async getLoan(params: IRepositoryParams<QueryLoanArgs>): Promise<LoanEntity | null> {
                        try {
                            return this.repository.getLoan(params)
                            .then((result) => new LoanEntity(result))
                            .catch((err) => this.errorCatcher(err, 'getLoan'));
                        } catch (error) {
                            this.errorCatcher(error, 'getLoan');
                        }
            }

            async getLoanList(params: IRepositoryParams<QueryLoansListArgs>): Promise<{
                count: number;
                items: Array<LoanEntity>;
                }> {
                try {
                    return this.repository.getLoansList(params)
                    .then((result) => {
                        return {
                            count: result?.count || 0,
                            items: result?.items?.map((item) => new LoanEntity(item)) || [],
                        };
                    })
                    .catch((err) => this.errorCatcher(err, 'getLoansList'));
                } catch (error) {
                    this.errorCatcher(error, 'getLoansList');
                }
            }

            async createLoan(params: IRepositoryParams<MutationLoanCreateArgs>): Promise<boolean> {
                        try {
                            return this.repository.createLoan(params)
                            .then((result) => !!result?.id)
                            .catch((err) => this.errorCatcher(err, 'createLoan'));
                        } catch (error) {
                            this.errorCatcher(error, 'createLoan');
                        }
                    }

                    async deleteLoan(params: IRepositoryParams<MutationLoanDeleteArgs>): Promise<boolean> {
                        try {
                            return this.repository.deleteLoan(params)
                            .then((result) => !!result?.success)
                            .catch((err) => this.errorCatcher(err, 'deleteLoan'));
                        } catch (error) {
                            this.errorCatcher(error, 'deleteLoan');
                        }
                    }
                  
async updateLoan(params: IRepositoryParams<MutationLoanUpdateArgs>): Promise<boolean> {
                        try {
                            return this.repository.updateLoan(params)
                            .then((result) => !!result?.id)
                            .catch((err) => this.errorCatcher(err, 'updateLoan'));
                        } catch (error) {
                            this.errorCatcher(error, 'updateLoan');
                        }
                    }

              
            }
    