
              import { useMutation, useQueryClient } from "@tanstack/react-query";
              import { useSession } from 'next-auth/react';
              import {UseCases} from "../usecases";
              import {
                  MutationBookUpdateArgs
              } from '@anotherdemo/core';


              
                  /** 
             * Type: MutationBookUpdateArgs
            {
 *   data: BookUpdateInput
 *   destroyDetached?: InputMaybe<Scalars['Boolean']['input']>
 *   filter?: InputMaybe<BookKeyFilter>
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 *  BookUpdateInput = {
 *   Holds?: InputMaybe<BooksHoldsUpdateRelationInput>
 *   Loans?: InputMaybe<BooksLoansUpdateRelationInput>
 *   Recommendations?: InputMaybe<BooksRecommendationsUpdateRelationInput>
 *   Reviews?: InputMaybe<BooksReviewsUpdateRelationInput>
 *   author?: InputMaybe<Scalars['String']['input']>
 *   availability_status?: InputMaybe<Scalars['String']['input']>
 *   genre?: InputMaybe<Scalars['String']['input']>
 *   id?: InputMaybe<Scalars['ID']['input']>
 *   isbn?: InputMaybe<Scalars['String']['input']>
 *   publication_date?: InputMaybe<Scalars['DateTime']['input']>
 *   title?: InputMaybe<Scalars['String']['input']>
 * }
 * 
 * 
 * 
 * export type BooksHoldsUpdateRelationInput = {
 *   connect?: InputMaybe<HoldKeyFilter>
 *   create?: InputMaybe<Book_Id_HoldCreateInput>
 *   disconnect?: InputMaybe<HoldKeyFilter>
 *   reconnect?: InputMaybe<HoldKeyFilter>
 *   update?: InputMaybe<Book_Id_HoldUpdateInput>
 * }
 * 
 * export type BooksLoansUpdateRelationInput = {
 *   connect?: InputMaybe<LoanKeyFilter>
 *   create?: InputMaybe<Book_Id_LoanCreateInput>
 *   disconnect?: InputMaybe<LoanKeyFilter>
 *   reconnect?: InputMaybe<LoanKeyFilter>
 *   update?: InputMaybe<Book_Id_LoanUpdateInput>
 * }
 * 
 * export type BooksRecommendationsUpdateRelationInput = {
 *   connect?: InputMaybe<RecommendationKeyFilter>
 *   create?: InputMaybe<Book_Id_RecommendationCreateInput>
 *   disconnect?: InputMaybe<RecommendationKeyFilter>
 *   reconnect?: InputMaybe<RecommendationKeyFilter>
 *   update?: InputMaybe<Book_Id_RecommendationUpdateInput>
 * }
 * 
 * export type BooksReviewsUpdateRelationInput = {
 *   connect?: InputMaybe<ReviewKeyFilter>
 *   create?: InputMaybe<Book_Id_ReviewCreateInput>
 *   disconnect?: InputMaybe<ReviewKeyFilter>
 *   reconnect?: InputMaybe<ReviewKeyFilter>
 *   update?: InputMaybe<Book_Id_ReviewUpdateInput>
 * }
 * 
 * export type 
 * 
 * 
 * 
 * export type BookKeyFilter = {
 *   id?: InputMaybe<Scalars['ID']['input']>
 *   isbn?: InputMaybe<Scalars['String']['input']>
 * }
 * 
 * 
 * 
             */
                
             

              /**
               * Hook to update a Book from the server.
               * @returns {UseMutationResult<boolean, Error, MutationBookUpdateArgs>}
               * @example
               * const {mutate, isPending, isError, mutateAsync} = useUpdateBook();
               * @param {MutationBookUpdateArgs} params
              */

              export function useUpdateBook() {
                const {data: session} = useSession();
                const queryClient = useQueryClient();
                

                return useMutation<
                  boolean,
                  Error,
                  MutationBookUpdateArgs
                >(
                {
                  mutationKey: ['BOOK_UPDATE_MUTATION'],
                  mutationFn: async (params) => UseCases.Book.updateBook({
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
            