
              import { useMutation, useQueryClient } from "@tanstack/react-query";
              import { useSession } from 'next-auth/react';
              import {UseCases} from "../usecases";
              import {
                  MutationEventCreateArgs
              } from '@anotherdemo/core';


              
                  /** 
             * Type: MutationEventCreateArgs
            {
 *   data: EventCreateInput
 * }
 * 
 *  EventCreateInput = {
 *   description: Scalars['String']['input']
 *   event_date?: InputMaybe<Scalars['DateTime']['input']>
 *   location: Scalars['String']['input']
 *   title?: InputMaybe<Scalars['String']['input']>
 * }
 * 
 * 
 * 
             */
                
             

              /**
               * Hook to create a Event from the server.
               * @returns {UseMutationResult<boolean, Error, MutationEventCreateArgs>}
               * @example
               * const {mutate, isPending, isError, mutateAsync} = useCreateEvent();
               * @param {MutationEventCreateArgs} params
              */

              export function useCreateEvent() {
                const {data: session} = useSession();
                const queryClient = useQueryClient();
                

                return useMutation<
                  boolean,
                  Error,
                  MutationEventCreateArgs
                >(
                {
                  mutationKey: ['EVENT_CREATE_MUTATION'],
                  mutationFn: async (params) => UseCases.Event.createEvent({
                    variables: params,
                    token: session?.token?.idToken,
                  }),
                  onSuccess: () => {
                    queryClient.invalidateQueries({
                      queryKey: ['EVENT_LIST_QUERY'],
                    });
                  },
                }
                );
              }
            