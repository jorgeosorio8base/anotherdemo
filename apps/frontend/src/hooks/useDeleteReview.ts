
              import { useMutation, useQueryClient } from "@tanstack/react-query";
              import { useSession } from 'next-auth/react';
              import {UseCases} from "../usecases";
              import {
                  MutationReviewDeleteArgs
              } from '@anotherdemo/core';


              
                  /** 
             * Type: MutationReviewDeleteArgs
            {
 *   data?: InputMaybe<ReviewDeleteInput>
 *   filter?: InputMaybe<ReviewKeyFilter>
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 * 
 * 
 * 
 * 
 *  ReviewDeleteInput = {
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * export type 
 * 
 * export type ReviewKeyFilter = {
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * 
 * 
             */
                
             

              /**
               * Hook to delete a Review from the server.
               * @returns {UseMutationResult<boolean, Error, MutationReviewDeleteArgs>}
               * @example
               * const {mutate, isPending, isError, mutateAsync} = useDeleteReview();
               * @param {MutationReviewDeleteArgs} params
              */

              export function useDeleteReview() {
                const {data: session} = useSession();
                const queryClient = useQueryClient();
                

                return useMutation<
                  boolean,
                  Error,
                  MutationReviewDeleteArgs
                >(
                {
                  mutationKey: ['REVIEW_DELETE_MUTATION'],
                  mutationFn: async (params) => UseCases.Review.deleteReview({
                    variables: params,
                    token: session?.token?.idToken,
                  }),
                  onSuccess: () => {
                    queryClient.invalidateQueries({
                      queryKey: ['REVIEW_LIST_QUERY'],
                    });
                  },
                }
                );
              }
            