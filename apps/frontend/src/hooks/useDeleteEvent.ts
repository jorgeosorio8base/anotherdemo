
              import { useMutation, useQueryClient } from "@tanstack/react-query";
              import { useSession } from 'next-auth/react';
              import {UseCases} from "../usecases";
              import {
                  MutationEventDeleteArgs
              } from '@anotherdemo/core';


              
                  /** 
             * Type: MutationEventDeleteArgs
            {
 *   data?: InputMaybe<EventDeleteInput>
 *   filter?: InputMaybe<EventKeyFilter>
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 * 
 * 
 * 
 * 
 *  EventDeleteInput = {
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * export type 
 * 
 * export type EventKeyFilter = {
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * 
 * 
             */
                
             

              /**
               * Hook to delete a Event from the server.
               * @returns {UseMutationResult<boolean, Error, MutationEventDeleteArgs>}
               * @example
               * const {mutate, isPending, isError, mutateAsync} = useDeleteEvent();
               * @param {MutationEventDeleteArgs} params
              */

              export function useDeleteEvent() {
                const {data: session} = useSession();
                const queryClient = useQueryClient();
                

                return useMutation<
                  boolean,
                  Error,
                  MutationEventDeleteArgs
                >(
                {
                  mutationKey: ['EVENT_DELETE_MUTATION'],
                  mutationFn: async (params) => UseCases.Event.deleteEvent({
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
            