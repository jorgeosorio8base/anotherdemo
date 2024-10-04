
              import { useMutation, useQueryClient } from "@tanstack/react-query";
              import { useSession } from 'next-auth/react';
              import {UseCases} from "../usecases";
              import {
                  MutationLoanCreateArgs
              } from '@anotherdemo/core';


              
                  /** 
             * Type: MutationLoanCreateArgs
            {
 *   data: LoanCreateInput
 * }
 * 
 *  LoanCreateInput = {
 *   book_id?: InputMaybe<LoansBook_IdRelationInput>
 *   due_date?: InputMaybe<Scalars['DateTime']['input']>
 *   patron_id?: InputMaybe<LoansPatron_IdRelationInput>
 *   status?: InputMaybe<Scalars['String']['input']>
 * }
 * 
 * 
 * 
 * export type LoansBook_IdRelationInput = {
 *   connect?: InputMaybe<BookKeyFilter>
 *   create?: InputMaybe<Loans_BookCreateInput>
 * }
 * 
 * export type LoansPatron_IdRelationInput = {
 *   connect?: InputMaybe<PatronKeyFilter>
 *   create?: InputMaybe<Loans_PatronCreateInput>
 * }
 * 
             */
                
             

              /**
               * Hook to create a Loan from the server.
               * @returns {UseMutationResult<boolean, Error, MutationLoanCreateArgs>}
               * @example
               * const {mutate, isPending, isError, mutateAsync} = useCreateLoan();
               * @param {MutationLoanCreateArgs} params
              */

              export function useCreateLoan() {
                const {data: session} = useSession();
                const queryClient = useQueryClient();
                

                return useMutation<
                  boolean,
                  Error,
                  MutationLoanCreateArgs
                >(
                {
                  mutationKey: ['LOAN_CREATE_MUTATION'],
                  mutationFn: async (params) => UseCases.Loan.createLoan({
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
            