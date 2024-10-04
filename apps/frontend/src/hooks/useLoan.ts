
            import { useQuery, useQueryClient } from "@tanstack/react-query";
            import { useSession } from 'next-auth/react';
            import {UseCases} from "../usecases";
            import {
            QueryLoanArgs,
            LoanEntity,
        } from '@anotherdemo/core';

            /*
              Type: ILoanEntity

              
          

           ILoanEntity {
              Id?: string;
CreatedAt?: string;
UpdatedAt?: string;


DueDate?: string;
Status?: string;
          }
      
            */

          
              /*
            Type: QueryLoanArgs
            {
  id?: InputMaybe<Scalars['ID']['input']>
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>
}




          */
            

        /**
         * Hook to fetch Loan from the server.
         *
         * @returns {UseQueryResult<LoanEntity | null>}
         * 
         * @example
         * const {data, isError, isLoading, isFetching, refetch} = useLoan({id: '1'});
         * 
         * @param {QueryLoanArgs} variables - The query variables.
        */

        export function useLoan(
              variables: QueryLoanArgs,
        ) {
          const {data: session} = useSession();
          return useQuery<LoanEntity | null>(
          {
              queryKey: ['LOAN_QUERY'],
              queryFn: async () => UseCases.Loan.getLoan({
                variables,
                token: session?.token?.idToken,
              }),
              enabled: !!session?.token?.idToken,
          });
        }
    