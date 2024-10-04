
              import { useMutation, useQueryClient } from "@tanstack/react-query";
              import { useSession } from 'next-auth/react';
              import {UseCases} from "../usecases";
              import {
                  MutationReviewCreateArgs
              } from '@anotherdemo/core';


              
                  /** 
             * Type: MutationReviewCreateArgs
            {
 *   data: ReviewCreateInput
 * }
 * 
 *  ReviewCreateInput = {
 *   book_id?: InputMaybe<ReviewsBook_IdRelationInput>
 *   comment: Scalars['String']['input']
 *   patron_id?: InputMaybe<ReviewsPatron_IdRelationInput>
 *   rating?: InputMaybe<Scalars['Int']['input']>
 * }
 * 
 * 
 * 
 * export type ReviewsBook_IdRelationInput = {
 *   connect?: InputMaybe<BookKeyFilter>
 *   create?: InputMaybe<Reviews_BookCreateInput>
 * }
 * 
 * export type ReviewsPatron_IdRelationInput = {
 *   connect?: InputMaybe<PatronKeyFilter>
 *   create?: InputMaybe<Reviews_PatronCreateInput>
 * }
 * 
             */
                
             

              /**
               * Hook to create a Review from the server.
               * @returns {UseMutationResult<boolean, Error, MutationReviewCreateArgs>}
               * @example
               * const {mutate, isPending, isError, mutateAsync} = useCreateReview();
               * @param {MutationReviewCreateArgs} params
              */

              export function useCreateReview() {
                const {data: session} = useSession();
                const queryClient = useQueryClient();
                

                return useMutation<
                  boolean,
                  Error,
                  MutationReviewCreateArgs
                >(
                {
                  mutationKey: ['REVIEW_CREATE_MUTATION'],
                  mutationFn: async (params) => UseCases.Review.createReview({
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
            