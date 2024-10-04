
              import { useMutation, useQueryClient } from "@tanstack/react-query";
              import { useSession } from 'next-auth/react';
              import {UseCases} from "../usecases";
              import {
                  MutationBookDeleteArgs
              } from '@anotherdemo/core';


              
                  /** 
             * Type: MutationBookDeleteArgs
            {
 *   data?: InputMaybe<BookDeleteInput>
 *   filter?: InputMaybe<BookKeyFilter>
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 * 
 * 
 * 
 * 
 *  BookDeleteInput = {
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * export type 
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
               * Hook to delete a Book from the server.
               * @returns {UseMutationResult<boolean, Error, MutationBookDeleteArgs>}
               * @example
               * const {mutate, isPending, isError, mutateAsync} = useDeleteBook();
               * @param {MutationBookDeleteArgs} params
              */

              export function useDeleteBook() {
                const {data: session} = useSession();
                const queryClient = useQueryClient();
                

                return useMutation<
                  boolean,
                  Error,
                  MutationBookDeleteArgs
                >(
                {
                  mutationKey: ['BOOK_DELETE_MUTATION'],
                  mutationFn: async (params) => UseCases.Book.deleteBook({
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
            