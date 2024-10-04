
              import { useMutation, useQueryClient } from "@tanstack/react-query";
              import { useSession } from 'next-auth/react';
              import {UseCases} from "../usecases";
              import {
                  MutationEventUpdateArgs
              } from '@anotherdemo/core';


              
                  /** 
             * Type: MutationEventUpdateArgs
            {
 *   data: EventUpdateInput
 *   destroyDetached?: InputMaybe<Scalars['Boolean']['input']>
 *   filter?: InputMaybe<EventKeyFilter>
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 *  EventUpdateInput = {
 *   description?: InputMaybe<Scalars['String']['input']>
 *   event_date?: InputMaybe<Scalars['DateTime']['input']>
 *   id?: InputMaybe<Scalars['ID']['input']>
 *   location?: InputMaybe<Scalars['String']['input']>
 *   title?: InputMaybe<Scalars['String']['input']>
 * }
 * 
 * 
 * 
 * export type 
 * 
 * 
 * 
 * export type EventKeyFilter = {
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * 
 * 
             */
                
             

              /**
               * Hook to update a Event from the server.
               * @returns {UseMutationResult<boolean, Error, MutationEventUpdateArgs>}
               * @example
               * const {mutate, isPending, isError, mutateAsync} = useUpdateEvent();
               * @param {MutationEventUpdateArgs} params
              */

              export function useUpdateEvent() {
                const {data: session} = useSession();
                const queryClient = useQueryClient();
                

                return useMutation<
                  boolean,
                  Error,
                  MutationEventUpdateArgs
                >(
                {
                  mutationKey: ['EVENT_UPDATE_MUTATION'],
                  mutationFn: async (params) => UseCases.Event.updateEvent({
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
            