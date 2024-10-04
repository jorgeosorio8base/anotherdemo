
              import { useMutation, useQueryClient } from "@tanstack/react-query";
              import { useSession } from 'next-auth/react';
              import {UseCases} from "../usecases";
              import {
                  MutationLoanUpdateArgs
              } from '@anotherdemo/core';


              
                  /** 
             * Type: MutationLoanUpdateArgs
            {
 *   data: LoanUpdateInput
 *   destroyDetached?: InputMaybe<Scalars['Boolean']['input']>
 *   filter?: InputMaybe<LoanKeyFilter>
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 *  LoanUpdateInput = {
 *   book_id?: InputMaybe<LoansBook_IdUpdateRelationInput>
 *   due_date?: InputMaybe<Scalars['DateTime']['input']>
 *   id?: InputMaybe<Scalars['ID']['input']>
 *   patron_id?: InputMaybe<LoansPatron_IdUpdateRelationInput>
 *   status?: InputMaybe<Scalars['String']['input']>
 * }
 * 
 * 
 * 
 * export type LoansBook_IdUpdateRelationInput = {
 *   connect?: InputMaybe<BookKeyFilter>
 *   create?: InputMaybe<Loans_BookCreateInput>
 *   disconnect?: InputMaybe<BookKeyFilter>
 *   reconnect?: InputMaybe<BookKeyFilter>
 *   update?: InputMaybe<Loans_BookUpdateInput>
 * }
 * 
 * export type LoansPatron_IdUpdateRelationInput = {
 *   connect?: InputMaybe<PatronKeyFilter>
 *   create?: InputMaybe<Loans_PatronCreateInput>
 *   disconnect?: InputMaybe<PatronKeyFilter>
 *   reconnect?: InputMaybe<PatronKeyFilter>
 *   update?: InputMaybe<Loans_PatronUpdateInput>
 * }
 * 
 * export type 
 * 
 * 
 * 
 * export type LoanKeyFilter = {
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * 
 * 
             */
                
             

              /**
               * Hook to update a Loan from the server.
               * @returns {UseMutationResult<boolean, Error, MutationLoanUpdateArgs>}
               * @example
               * const {mutate, isPending, isError, mutateAsync} = useUpdateLoan();
               * @param {MutationLoanUpdateArgs} params
              */

              export function useUpdateLoan() {
                const {data: session} = useSession();
                const queryClient = useQueryClient();
                

                return useMutation<
                  boolean,
                  Error,
                  MutationLoanUpdateArgs
                >(
                {
                  mutationKey: ['LOAN_UPDATE_MUTATION'],
                  mutationFn: async (params) => UseCases.Loan.updateLoan({
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
            