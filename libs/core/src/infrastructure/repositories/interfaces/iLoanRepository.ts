
        import {
            Loan,
            QueryLoanArgs,
            QueryLoansListArgs,
            LoanListResponse,
            MutationLoanCreateArgs, MutationLoanDeleteArgs, MutationLoanUpdateArgs,
            SuccessResponse,
            
        } from '../../../definitions/schema';
        import {IRepositoryParams} from './iRepositoryParams';

        export interface ILoanRepository {
            getLoan(params: IRepositoryParams<QueryLoanArgs>): Promise<Loan | null>;
            getLoansList(params: IRepositoryParams<QueryLoansListArgs>): Promise<LoanListResponse>;
            createLoan(params: IRepositoryParams<MutationLoanCreateArgs>): Promise<Loan | null>;
deleteLoan(params: IRepositoryParams<MutationLoanDeleteArgs>): Promise<SuccessResponse | null>;
updateLoan(params: IRepositoryParams<MutationLoanUpdateArgs>): Promise<Loan | null>;
            
          }
    