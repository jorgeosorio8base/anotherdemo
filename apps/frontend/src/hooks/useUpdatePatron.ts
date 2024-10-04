
              import { useMutation, useQueryClient } from "@tanstack/react-query";
              import { useSession } from 'next-auth/react';
              import {UseCases} from "../usecases";
              import {
                  MutationPatronUpdateArgs
              } from '@anotherdemo/core';


              
                  /** 
             * Type: MutationPatronUpdateArgs
            {
 *   data: PatronUpdateInput
 *   destroyDetached?: InputMaybe<Scalars['Boolean']['input']>
 *   filter?: InputMaybe<PatronKeyFilter>
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 *  PatronUpdateInput = {
 *   Holds?: InputMaybe<PatronsHoldsUpdateRelationInput>
 *   Loans?: InputMaybe<PatronsLoansUpdateRelationInput>
 *   Recommendations?: InputMaybe<PatronsRecommendationsUpdateRelationInput>
 *   Reviews?: InputMaybe<PatronsReviewsUpdateRelationInput>
 *   borrowing_history?: InputMaybe<Scalars['JSON']['input']>
 *   id?: InputMaybe<Scalars['ID']['input']>
 *   membership_status?: InputMaybe<Scalars['String']['input']>
 *   user_id?: InputMaybe<PatronsUser_IdUpdateRelationInput>
 * }
 * 
 * 
 * 
 * export type PatronsHoldsUpdateRelationInput = {
 *   connect?: InputMaybe<HoldKeyFilter>
 *   create?: InputMaybe<Patron_Id_HoldCreateInput>
 *   disconnect?: InputMaybe<HoldKeyFilter>
 *   reconnect?: InputMaybe<HoldKeyFilter>
 *   update?: InputMaybe<Patron_Id_HoldUpdateInput>
 * }
 * 
 * export type PatronsLoansUpdateRelationInput = {
 *   connect?: InputMaybe<LoanKeyFilter>
 *   create?: InputMaybe<Patron_Id_LoanCreateInput>
 *   disconnect?: InputMaybe<LoanKeyFilter>
 *   reconnect?: InputMaybe<LoanKeyFilter>
 *   update?: InputMaybe<Patron_Id_LoanUpdateInput>
 * }
 * 
 * export type PatronsRecommendationsUpdateRelationInput = {
 *   connect?: InputMaybe<RecommendationKeyFilter>
 *   create?: InputMaybe<Patron_Id_RecommendationCreateInput>
 *   disconnect?: InputMaybe<RecommendationKeyFilter>
 *   reconnect?: InputMaybe<RecommendationKeyFilter>
 *   update?: InputMaybe<Patron_Id_RecommendationUpdateInput>
 * }
 * 
 * export type PatronsReviewsUpdateRelationInput = {
 *   connect?: InputMaybe<ReviewKeyFilter>
 *   create?: InputMaybe<Patron_Id_ReviewCreateInput>
 *   disconnect?: InputMaybe<ReviewKeyFilter>
 *   reconnect?: InputMaybe<ReviewKeyFilter>
 *   update?: InputMaybe<Patron_Id_ReviewUpdateInput>
 * }
 * 
 * export type PatronsUser_IdUpdateRelationInput = {
 *   connect?: InputMaybe<UserKeyFilter>
 *   create?: InputMaybe<Patrons_UserCreateInput>
 *   disconnect?: InputMaybe<UserKeyFilter>
 *   reconnect?: InputMaybe<UserKeyFilter>
 *   update?: InputMaybe<Patrons_UserUpdateInput>
 * }
 * 
 * export type 
 * 
 * 
 * 
 * export type PatronKeyFilter = {
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * 
 * 
             */
                
             

              /**
               * Hook to update a Patron from the server.
               * @returns {UseMutationResult<boolean, Error, MutationPatronUpdateArgs>}
               * @example
               * const {mutate, isPending, isError, mutateAsync} = useUpdatePatron();
               * @param {MutationPatronUpdateArgs} params
              */

              export function useUpdatePatron() {
                const {data: session} = useSession();
                const queryClient = useQueryClient();
                

                return useMutation<
                  boolean,
                  Error,
                  MutationPatronUpdateArgs
                >(
                {
                  mutationKey: ['PATRON_UPDATE_MUTATION'],
                  mutationFn: async (params) => UseCases.Patron.updatePatron({
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
            