
              import { useMutation, useQueryClient } from "@tanstack/react-query";
              import { useSession } from 'next-auth/react';
              import {UseCases} from "../usecases";
              import {
                  MutationRecommendationUpdateArgs
              } from '@anotherdemo/core';


              
                  /** 
             * Type: MutationRecommendationUpdateArgs
            {
 *   data: RecommendationUpdateInput
 *   destroyDetached?: InputMaybe<Scalars['Boolean']['input']>
 *   filter?: InputMaybe<RecommendationKeyFilter>
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 *  RecommendationUpdateInput = {
 *   book_id?: InputMaybe<RecommendationsBook_IdUpdateRelationInput>
 *   id?: InputMaybe<Scalars['ID']['input']>
 *   patron_id?: InputMaybe<RecommendationsPatron_IdUpdateRelationInput>
 *   reason?: InputMaybe<Scalars['String']['input']>
 * }
 * 
 * 
 * 
 * export type RecommendationsBook_IdUpdateRelationInput = {
 *   connect?: InputMaybe<BookKeyFilter>
 *   create?: InputMaybe<Recommendations_BookCreateInput>
 *   disconnect?: InputMaybe<BookKeyFilter>
 *   reconnect?: InputMaybe<BookKeyFilter>
 *   update?: InputMaybe<Recommendations_BookUpdateInput>
 * }
 * 
 * export type RecommendationsPatron_IdUpdateRelationInput = {
 *   connect?: InputMaybe<PatronKeyFilter>
 *   create?: InputMaybe<Recommendations_PatronCreateInput>
 *   disconnect?: InputMaybe<PatronKeyFilter>
 *   reconnect?: InputMaybe<PatronKeyFilter>
 *   update?: InputMaybe<Recommendations_PatronUpdateInput>
 * }
 * 
 * export type 
 * 
 * 
 * 
 * export type RecommendationKeyFilter = {
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * 
 * 
             */
                
             

              /**
               * Hook to update a Recommendation from the server.
               * @returns {UseMutationResult<boolean, Error, MutationRecommendationUpdateArgs>}
               * @example
               * const {mutate, isPending, isError, mutateAsync} = useUpdateRecommendation();
               * @param {MutationRecommendationUpdateArgs} params
              */

              export function useUpdateRecommendation() {
                const {data: session} = useSession();
                const queryClient = useQueryClient();
                

                return useMutation<
                  boolean,
                  Error,
                  MutationRecommendationUpdateArgs
                >(
                {
                  mutationKey: ['RECOMMENDATION_UPDATE_MUTATION'],
                  mutationFn: async (params) => UseCases.Recommendation.updateRecommendation({
                    variables: params,
                    token: session?.token?.idToken,
                  }),
                  onSuccess: () => {
                    queryClient.invalidateQueries({
                      queryKey: ['RECOMMENDATION_LIST_QUERY'],
                    });
                  },
                }
                );
              }
            