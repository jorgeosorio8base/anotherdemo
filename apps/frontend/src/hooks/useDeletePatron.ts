
              import { useMutation, useQueryClient } from "@tanstack/react-query";
              import { useSession } from 'next-auth/react';
              import {UseCases} from "../usecases";
              import {
                  MutationPatronDeleteArgs
              } from '@anotherdemo/core';


              
                  /** 
             * Type: MutationPatronDeleteArgs
            {
 *   data?: InputMaybe<PatronDeleteInput>
 *   filter?: InputMaybe<PatronKeyFilter>
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 * 
 * 
 * 
 * 
 *  PatronDeleteInput = {
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * export type 
 * 
 * export type PatronKeyFilter = {
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * 
 * 
             */
                
             

              /**
               * Hook to delete a Patron from the server.
               * @returns {UseMutationResult<boolean, Error, MutationPatronDeleteArgs>}
               * @example
               * const {mutate, isPending, isError, mutateAsync} = useDeletePatron();
               * @param {MutationPatronDeleteArgs} params
              */

              export function useDeletePatron() {
                const {data: session} = useSession();
                const queryClient = useQueryClient();
                

                return useMutation<
                  boolean,
                  Error,
                  MutationPatronDeleteArgs
                >(
                {
                  mutationKey: ['PATRON_DELETE_MUTATION'],
                  mutationFn: async (params) => UseCases.Patron.deletePatron({
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
            