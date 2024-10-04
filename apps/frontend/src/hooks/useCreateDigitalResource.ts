
              import { useMutation, useQueryClient } from "@tanstack/react-query";
              import { useSession } from 'next-auth/react';
              import {UseCases} from "../usecases";
              import {
                  MutationDigitalResourceCreateArgs
              } from '@anotherdemo/core';


              
                  /** 
             * Type: MutationDigitalResourceCreateArgs
            {
 *   data: DigitalResourceCreateInput
 * }
 * 
 *  DigitalResourceCreateInput = {
 *   author?: InputMaybe<Scalars['String']['input']>
 *   availability_status?: InputMaybe<Scalars['String']['input']>
 *   format?: InputMaybe<Scalars['String']['input']>
 *   publication_date?: InputMaybe<Scalars['DateTime']['input']>
 *   title?: InputMaybe<Scalars['String']['input']>
 * }
 * 
 * 
 * 
             */
                
             

              /**
               * Hook to create a DigitalResource from the server.
               * @returns {UseMutationResult<boolean, Error, MutationDigitalResourceCreateArgs>}
               * @example
               * const {mutate, isPending, isError, mutateAsync} = useCreateDigitalResource();
               * @param {MutationDigitalResourceCreateArgs} params
              */

              export function useCreateDigitalResource() {
                const {data: session} = useSession();
                const queryClient = useQueryClient();
                

                return useMutation<
                  boolean,
                  Error,
                  MutationDigitalResourceCreateArgs
                >(
                {
                  mutationKey: ['DIGITALRESOURCE_CREATE_MUTATION'],
                  mutationFn: async (params) => UseCases.DigitalResource.createDigitalResource({
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
            