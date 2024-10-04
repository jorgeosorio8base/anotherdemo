
              import { useMutation, useQueryClient } from "@tanstack/react-query";
              import { useSession } from 'next-auth/react';
              import {UseCases} from "../usecases";
              import {
                  MutationLoanDeleteArgs
              } from '@anotherdemo/core';


              
                  /** 
             * Type: MutationLoanDeleteArgs
            {
 *   data?: InputMaybe<LoanDeleteInput>
 *   filter?: InputMaybe<LoanKeyFilter>
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 * 
 * 
 * 
 * 
 *  LoanDeleteInput = {
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * export type 
 * 
 * export type LoanKeyFilter = {
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * 
 * 
             */
                
             

              /**
               * Hook to delete a Loan from the server.
               * @returns {UseMutationResult<boolean, Error, MutationLoanDeleteArgs>}
               * @example
               * const {mutate, isPending, isError, mutateAsync} = useDeleteLoan();
               * @param {MutationLoanDeleteArgs} params
              */

              export function useDeleteLoan() {
                const {data: session} = useSession();
                const queryClient = useQueryClient();
                

                return useMutation<
                  boolean,
                  Error,
                  MutationLoanDeleteArgs
                >(
                {
                  mutationKey: ['LOAN_DELETE_MUTATION'],
                  mutationFn: async (params) => UseCases.Loan.deleteLoan({
                    variables: params,
                    token: session?.token?.idToken,
                  }),
                  onSuccess: () => {
                    queryClient.invalidateQueries({
                      queryKey: ['LOAN_LIST_QUERY'],
                    });
                  },
                }
                );
              }
            