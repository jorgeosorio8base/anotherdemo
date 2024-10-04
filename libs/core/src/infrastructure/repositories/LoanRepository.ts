
        import {IRepositoryParams, ILoanRepository} from './interfaces';
        import {Http, IHttp} from '../http';
        import { gql } from 'graphql-request';
        import {Environment} from '../../environment';
        import {
            Loan,
            QueryLoanArgs,
            QueryLoansListArgs,
            LoanListResponse,
            MutationLoanCreateArgs, MutationLoanDeleteArgs, MutationLoanUpdateArgs,
            SuccessResponse,
            
        } from '../../definitions/schema';

        export class LoanRepository implements ILoanRepository {
            private readonly http: IHttp;

            constructor() {
                this.http = new Http();
            }

            async getLoan(params: IRepositoryParams<QueryLoanArgs>): Promise<Loan | null> {
                return this.http.requestGraphQL<{
                    loan: Loan
                }>({
                    url: Environment.BACKEND_API_URL,
                    requestDocument:
                        gql`
                            query GET_LOAN(
                            $id: ID
                        ) {
                            loan(
                              id: $id
                            ) {
                                id
createdAt
updatedAt


due_date
status    
                            }
                        }
                        `
                      ,
                      token: params.token,
                    variables: params.variables,
                })?.then((response) => response.loan)?.catch(() => null);
            }

            async getLoansList(params: IRepositoryParams<QueryLoansListArgs>): Promise<LoanListResponse> {
                return this.http.requestGraphQL<{
                    loansList: LoanListResponse
                }>({
                    url: Environment.BACKEND_API_URL,
                    requestDocument:
                        gql`
                            query GET_LOANS (
                                  $first: Int
                                  $skip: Int
                                  $filter: LoanFilter
                                  $sort: [LoanSort!]
                            ) {
                                loansList (
                                  first: $first
                                  skip: $skip
                                  filter: $filter
                                  sort: $sort
                                ) {
                                    items {
                                        id
createdAt
updatedAt


due_date
status
                                    }
                                    count
                            }
                        }
                      `,
                      token: params.token,
                    variables: params.variables,
                })
                ?.then((response) => response.loansList);
            }

            
                    async createLoan(params: IRepositoryParams<MutationLoanCreateArgs>): Promise<Loan | null> {
                        return this.http.requestGraphQL<{
                          loanCreate: Loan
                        }>({
                            url: Environment.BACKEND_API_URL,
                            requestDocument:
                                gql`
                                    mutation CREATE_LOAN (
                                      $data: LoanCreateInput!
                                    ) {
                                         loanCreate (
                                          data: $data
                                        ) {
                                            id
                                        }
                                    }
                                `,
                            token: params.token,
                            variables: params.variables,
                        })?.then((response) => response.loanCreate)?.catch(() => null);
                  }
                

                    async deleteLoan(params: IRepositoryParams<MutationLoanDeleteArgs>): Promise<SuccessResponse | null> {
                        return this.http.requestGraphQL<SuccessResponse>({
                            url: Environment.BACKEND_API_URL,
                            requestDocument:
                                gql`
                                    mutation DELETE_LOAN (
                                      $data: LoanDeleteInput!
                                      $filter: LoanKeyFilter
                                      $force: Boolean
                                    ) {
                                        loanDelete (
                                          data: $data
                                          filter: $filter
                                          force: $force
                                        ) {
                                            success
                                        }
                                    }
                                `,
                            token: params.token,
                            variables: params.variables,
                        })?.catch(() => null);
                }
                  

                    async updateLoan(params: IRepositoryParams<MutationLoanUpdateArgs>): Promise<Loan | null> {
                        return this.http.requestGraphQL<{
                          loanUpdate: Loan
                        }>({
                            url: Environment.BACKEND_API_URL,
                            requestDocument:
                                gql`
                                    mutation UPDATE_LOAN (
                                      $data: LoanUpdateInput!
                                    ) {
                                         loanUpdate (
                                          data: $data
                                        ) {
                                            id
                                        }
                                    }
                                `,
                            token: params.token,
                            variables: params.variables,
                        })?.then((response) => response.loanUpdate)?.catch(() => null);
                  }
                

            
        }
      