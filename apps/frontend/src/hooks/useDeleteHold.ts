
              import { useMutation, useQueryClient } from "@tanstack/react-query";
              import { useSession } from 'next-auth/react';
              import {UseCases} from "../usecases";
              import {
                  MutationHoldDeleteArgs
              } from '@anotherdemo/core';


              
                  /** 
             * Type: MutationHoldDeleteArgs
            {
 *   data?: InputMaybe<HoldDeleteInput>
 *   filter?: InputMaybe<HoldKeyFilter>
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 * 
 * 
 * 
 * 
 *  HoldDeleteInput = {
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * export type 
 * 
 * export type HoldKeyFilter = {
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * 
 * 
             */
                
             

              /**
               * Hook to delete a Hold from the server.
               * @returns {UseMutationResult<boolean, Error, MutationHoldDeleteArgs>}
               * @example
               * const {mutate, isPending, isError, mutateAsync} = useDeleteHold();
               * @param {MutationHoldDeleteArgs} params
              */

              export function useDeleteHold() {
                const {data: session} = useSession();
                const queryClient = useQueryClient();
                

                return useMutation<
                  boolean,
                  Error,
                  MutationHoldDeleteArgs
                >(
                {
                  mutationKey: ['HOLD_DELETE_MUTATION'],
                  mutationFn: async (params) => UseCases.Hold.deleteHold({
                    variables: params,
                    token: session?.token?.idToken,
                  }),
                  onSuccess: () => {
                    queryClient.invalidateQueries({
                      queryKey: ['HOLD_LIST_QUERY'],
                    });
                  },
                }
                );
              }
            