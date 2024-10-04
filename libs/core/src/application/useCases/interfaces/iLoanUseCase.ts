
        import {
            QueryLoanArgs,
            QueryLoansListArgs,
            MutationLoanCreateArgs, MutationLoanDeleteArgs, MutationLoanUpdateArgs,
            
        } from '../../../definitions/schema';
        import {LoanEntity } from '../../../domain';
        import {IRepositoryParams} from '../../../infrastructure';

        export interface ILoanUseCase {
            getLoan(params: IRepositoryParams<QueryLoanArgs>): Promise<LoanEntity | null>;
            getLoanList(params: IRepositoryParams<QueryLoansListArgs>): Promise<{
                count: number;
                items: Array<LoanEntity>;
            }>;
            createLoan(params: IRepositoryParams<MutationLoanCreateArgs>): Promise<boolean>;
deleteLoan(params: IRepositoryParams<MutationLoanDeleteArgs>): Promise<boolean>;
updateLoan(params: IRepositoryParams<MutationLoanUpdateArgs>): Promise<boolean>;
              
        }
    