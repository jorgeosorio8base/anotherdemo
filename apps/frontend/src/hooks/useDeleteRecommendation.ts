
              import { useMutation, useQueryClient } from "@tanstack/react-query";
              import { useSession } from 'next-auth/react';
              import {UseCases} from "../usecases";
              import {
                  MutationRecommendationDeleteArgs
              } from '@anotherdemo/core';


              
                  /** 
             * Type: MutationRecommendationDeleteArgs
            {
 *   data?: InputMaybe<RecommendationDeleteInput>
 *   filter?: InputMaybe<RecommendationKeyFilter>
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 * 
 * 
 * 
 * 
 *  RecommendationDeleteInput = {
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * export type 
 * 
 * export type RecommendationKeyFilter = {
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * 
 * 
             */
                
             

              /**
               * Hook to delete a Recommendation from the server.
               * @returns {UseMutationResult<boolean, Error, MutationRecommendationDeleteArgs>}
               * @example
               * const {mutate, isPending, isError, mutateAsync} = useDeleteRecommendation();
               * @param {MutationRecommendationDeleteArgs} params
              */

              export function useDeleteRecommendation() {
                const {data: session} = useSession();
                const queryClient = useQueryClient();
                

                return useMutation<
                  boolean,
                  Error,
                  MutationRecommendationDeleteArgs
                >(
                {
                  mutationKey: ['RECOMMENDATION_DELETE_MUTATION'],
                  mutationFn: async (params) => UseCases.Recommendation.deleteRecommendation({
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
            