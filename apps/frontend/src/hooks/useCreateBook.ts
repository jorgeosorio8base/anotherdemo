
              import { useMutation, useQueryClient } from "@tanstack/react-query";
              import { useSession } from 'next-auth/react';
              import {UseCases} from "../usecases";
              import {
                  MutationBookCreateArgs
              } from '@anotherdemo/core';


              
                  /** 
             * Type: MutationBookCreateArgs
            {
 *   data: BookCreateInput
 * }
 * 
 *  BookCreateInput = {
 *   Holds?: InputMaybe<BooksHoldsRelationInput>
 *   Loans?: InputMaybe<BooksLoansRelationInput>
 *   Recommendations?: InputMaybe<BooksRecommendationsRelationInput>
 *   Reviews?: InputMaybe<BooksReviewsRelationInput>
 *   author?: InputMaybe<Scalars['String']['input']>
 *   availability_status?: InputMaybe<Scalars['String']['input']>
 *   genre?: InputMaybe<Scalars['String']['input']>
 *   isbn?: InputMaybe<Scalars['String']['input']>
 *   publication_date?: InputMaybe<Scalars['DateTime']['input']>
 *   title?: InputMaybe<Scalars['String']['input']>
 * }
 * 
 * 
 * 
 * export type BooksHoldsRelationInput = {
 *   connect?: InputMaybe<HoldKeyFilter>
 *   create?: InputMaybe<Book_Id_HoldCreateInput>
 * }
 * 
 * export type BooksLoansRelationInput = {
 *   connect?: InputMaybe<LoanKeyFilter>
 *   create?: InputMaybe<Book_Id_LoanCreateInput>
 * }
 * 
 * export type BooksRecommendationsRelationInput = {
 *   connect?: InputMaybe<RecommendationKeyFilter>
 *   create?: InputMaybe<Book_Id_RecommendationCreateInput>
 * }
 * 
 * export type BooksReviewsRelationInput = {
 *   connect?: InputMaybe<ReviewKeyFilter>
 *   create?: InputMaybe<Book_Id_ReviewCreateInput>
 * }
 * 
             */
                
             

              /**
               * Hook to create a Book from the server.
               * @returns {UseMutationResult<boolean, Error, MutationBookCreateArgs>}
               * @example
               * const {mutate, isPending, isError, mutateAsync} = useCreateBook();
               * @param {MutationBookCreateArgs} params
              */

              export function useCreateBook() {
                const {data: session} = useSession();
                const queryClient = useQueryClient();
                

                return useMutation<
                  boolean,
                  Error,
                  MutationBookCreateArgs
                >(
                {
                  mutationKey: ['BOOK_CREATE_MUTATION'],
                  mutationFn: async (params) => UseCases.Book.createBook({
                    variables: params,
                    token: session?.token?.idToken,
                  }),
                  onSuccess: () => {
                    queryClient.invalidateQueries({
                      queryKey: ['BOOK_LIST_QUERY'],
                    });
                  },
                }
                );
              }
            