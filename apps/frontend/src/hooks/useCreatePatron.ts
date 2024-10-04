
              import { useMutation, useQueryClient } from "@tanstack/react-query";
              import { useSession } from 'next-auth/react';
              import {UseCases} from "../usecases";
              import {
                  MutationPatronCreateArgs
              } from '@anotherdemo/core';


              
                  /** 
             * Type: MutationPatronCreateArgs
            {
 *   data: PatronCreateInput
 * }
 * 
 *  PatronCreateInput = {
 *   Holds?: InputMaybe<PatronsHoldsRelationInput>
 *   Loans?: InputMaybe<PatronsLoansRelationInput>
 *   Recommendations?: InputMaybe<PatronsRecommendationsRelationInput>
 *   Reviews?: InputMaybe<PatronsReviewsRelationInput>
 *   borrowing_history: Scalars['JSON']['input']
 *   membership_status?: InputMaybe<Scalars['String']['input']>
 *   user_id?: InputMaybe<PatronsUser_IdRelationInput>
 * }
 * 
 * 
 * 
 * export type PatronsHoldsRelationInput = {
 *   connect?: InputMaybe<HoldKeyFilter>
 *   create?: InputMaybe<Patron_Id_HoldCreateInput>
 * }
 * 
 * export type PatronsLoansRelationInput = {
 *   connect?: InputMaybe<LoanKeyFilter>
 *   create?: InputMaybe<Patron_Id_LoanCreateInput>
 * }
 * 
 * export type PatronsRecommendationsRelationInput = {
 *   connect?: InputMaybe<RecommendationKeyFilter>
 *   create?: InputMaybe<Patron_Id_RecommendationCreateInput>
 * }
 * 
 * export type PatronsReviewsRelationInput = {
 *   connect?: InputMaybe<ReviewKeyFilter>
 *   create?: InputMaybe<Patron_Id_ReviewCreateInput>
 * }
 * 
 * export type PatronsUser_IdRelationInput = {
 *   connect?: InputMaybe<UserKeyFilter>
 *   create?: InputMaybe<Patrons_UserCreateInput>
 * }
 * 
             */
                
             

              /**
               * Hook to create a Patron from the server.
               * @returns {UseMutationResult<boolean, Error, MutationPatronCreateArgs>}
               * @example
               * const {mutate, isPending, isError, mutateAsync} = useCreatePatron();
               * @param {MutationPatronCreateArgs} params
              */

              export function useCreatePatron() {
                const {data: session} = useSession();
                const queryClient = useQueryClient();
                

                return useMutation<
                  boolean,
                  Error,
                  MutationPatronCreateArgs
                >(
                {
                  mutationKey: ['PATRON_CREATE_MUTATION'],
                  mutationFn: async (params) => UseCases.Patron.createPatron({
                    variables: params,
                    token: session?.token?.idToken,
                  }),
                  onSuccess: () => {
                    queryClient.invalidateQueries({
                      queryKey: ['PATRON_LIST_QUERY'],
                    });
                  },
                }
                );
              }
            