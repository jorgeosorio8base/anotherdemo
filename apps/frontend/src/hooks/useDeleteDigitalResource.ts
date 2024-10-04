
              import { useMutation, useQueryClient } from "@tanstack/react-query";
              import { useSession } from 'next-auth/react';
              import {UseCases} from "../usecases";
              import {
                  MutationDigitalResourceDeleteArgs
              } from '@anotherdemo/core';


              
                  /** 
             * Type: MutationDigitalResourceDeleteArgs
            {
 *   data?: InputMaybe<DigitalResourceDeleteInput>
 *   filter?: InputMaybe<DigitalResourceKeyFilter>
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 * 
 * 
 * 
 * 
 *  DigitalResourceDeleteInput = {
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * export type 
 * 
 * export type DigitalResourceKeyFilter = {
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * 
 * 
             */
                
             

              /**
               * Hook to delete a DigitalResource from the server.
               * @returns {UseMutationResult<boolean, Error, MutationDigitalResourceDeleteArgs>}
               * @example
               * const {mutate, isPending, isError, mutateAsync} = useDeleteDigitalResource();
               * @param {MutationDigitalResourceDeleteArgs} params
              */

              export function useDeleteDigitalResource() {
                const {data: session} = useSession();
                const queryClient = useQueryClient();
                

                return useMutation<
                  boolean,
                  Error,
                  MutationDigitalResourceDeleteArgs
                >(
                {
                  mutationKey: ['DIGITALRESOURCE_DELETE_MUTATION'],
                  mutationFn: async (params) => UseCases.DigitalResource.deleteDigitalResource({
                    variables: params,
                    token: session?.token?.idToken,
                  }),
                  onSuccess: () => {
                    queryClient.invalidateQueries({
                      queryKey: ['DIGITALRESOURCE_LIST_QUERY'],
                    });
                  },
                }
                );
              }
            