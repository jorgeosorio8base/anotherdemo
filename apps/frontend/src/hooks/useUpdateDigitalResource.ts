
              import { useMutation, useQueryClient } from "@tanstack/react-query";
              import { useSession } from 'next-auth/react';
              import {UseCases} from "../usecases";
              import {
                  MutationDigitalResourceUpdateArgs
              } from '@anotherdemo/core';


              
                  /** 
             * Type: MutationDigitalResourceUpdateArgs
            {
 *   data: DigitalResourceUpdateInput
 *   destroyDetached?: InputMaybe<Scalars['Boolean']['input']>
 *   filter?: InputMaybe<DigitalResourceKeyFilter>
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 *  DigitalResourceUpdateInput = {
 *   author?: InputMaybe<Scalars['String']['input']>
 *   availability_status?: InputMaybe<Scalars['String']['input']>
 *   format?: InputMaybe<Scalars['String']['input']>
 *   id?: InputMaybe<Scalars['ID']['input']>
 *   publication_date?: InputMaybe<Scalars['DateTime']['input']>
 *   title?: InputMaybe<Scalars['String']['input']>
 * }
 * 
 * 
 * 
 * export type 
 * 
 * 
 * 
 * export type DigitalResourceKeyFilter = {
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * 
 * 
             */
                
             

              /**
               * Hook to update a DigitalResource from the server.
               * @returns {UseMutationResult<boolean, Error, MutationDigitalResourceUpdateArgs>}
               * @example
               * const {mutate, isPending, isError, mutateAsync} = useUpdateDigitalResource();
               * @param {MutationDigitalResourceUpdateArgs} params
              */

              export function useUpdateDigitalResource() {
                const {data: session} = useSession();
                const queryClient = useQueryClient();
                

                return useMutation<
                  boolean,
                  Error,
                  MutationDigitalResourceUpdateArgs
                >(
                {
                  mutationKey: ['DIGITALRESOURCE_UPDATE_MUTATION'],
                  mutationFn: async (params) => UseCases.DigitalResource.updateDigitalResource({
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
            