
              import { useMutation, useQueryClient } from "@tanstack/react-query";
              import { useSession } from 'next-auth/react';
              import {UseCases} from "../usecases";
              import {
                  MutationRecommendationCreateArgs
              } from '@anotherdemo/core';


              
                  /** 
             * Type: MutationRecommendationCreateArgs
            {
 *   data: RecommendationCreateInput
 * }
 * 
 *  RecommendationCreateInput = {
 *   book_id?: InputMaybe<RecommendationsBook_IdRelationInput>
 *   patron_id?: InputMaybe<RecommendationsPatron_IdRelationInput>
 *   reason: Scalars['String']['input']
 * }
 * 
 * 
 * 
 * export type RecommendationsBook_IdRelationInput = {
 *   connect?: InputMaybe<BookKeyFilter>
 *   create?: InputMaybe<Recommendations_BookCreateInput>
 * }
 * 
 * export type RecommendationsPatron_IdRelationInput = {
 *   connect?: InputMaybe<PatronKeyFilter>
 *   create?: InputMaybe<Recommendations_PatronCreateInput>
 * }
 * 
             */
                
             

              /**
               * Hook to create a Recommendation from the server.
               * @returns {UseMutationResult<boolean, Error, MutationRecommendationCreateArgs>}
               * @example
               * const {mutate, isPending, isError, mutateAsync} = useCreateRecommendation();
               * @param {MutationRecommendationCreateArgs} params
              */

              export function useCreateRecommendation() {
                const {data: session} = useSession();
                const queryClient = useQueryClient();
                

                return useMutation<
                  boolean,
                  Error,
                  MutationRecommendationCreateArgs
                >(
                {
                  mutationKey: ['RECOMMENDATION_CREATE_MUTATION'],
                  mutationFn: async (params) => UseCases.Recommendation.createRecommendation({
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
            