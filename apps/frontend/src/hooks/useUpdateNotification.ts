
              import { useMutation, useQueryClient } from "@tanstack/react-query";
              import { useSession } from 'next-auth/react';
              import {UseCases} from "../usecases";
              import {
                  MutationNotificationUpdateArgs
              } from '@anotherdemo/core';


              
                  /** 
             * Type: MutationNotificationUpdateArgs
            {
 *   data: NotificationUpdateInput
 *   destroyDetached?: InputMaybe<Scalars['Boolean']['input']>
 *   filter?: InputMaybe<NotificationKeyFilter>
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 *  NotificationUpdateInput = {
 *   id?: InputMaybe<Scalars['ID']['input']>
 *   is_read?: InputMaybe<Scalars['Boolean']['input']>
 *   message?: InputMaybe<Scalars['String']['input']>
 *   recipient_id?: InputMaybe<NotificationsRecipient_IdUpdateRelationInput>
 * }
 * 
 * 
 * 
 * export type NotificationsRecipient_IdUpdateRelationInput = {
 *   connect?: InputMaybe<UserKeyFilter>
 *   create?: InputMaybe<Notifications_UserCreateInput>
 *   disconnect?: InputMaybe<UserKeyFilter>
 *   reconnect?: InputMaybe<UserKeyFilter>
 *   update?: InputMaybe<Notifications_UserUpdateInput>
 * }
 * 
 * export type 
 * 
 * 
 * 
 * export type NotificationKeyFilter = {
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * 
 * 
             */
                
             

              /**
               * Hook to update a Notification from the server.
               * @returns {UseMutationResult<boolean, Error, MutationNotificationUpdateArgs>}
               * @example
               * const {mutate, isPending, isError, mutateAsync} = useUpdateNotification();
               * @param {MutationNotificationUpdateArgs} params
              */

              export function useUpdateNotification() {
                const {data: session} = useSession();
                const queryClient = useQueryClient();
                

                return useMutation<
                  boolean,
                  Error,
                  MutationNotificationUpdateArgs
                >(
                {
                  mutationKey: ['NOTIFICATION_UPDATE_MUTATION'],
                  mutationFn: async (params) => UseCases.Notification.updateNotification({
                    variables: params,
                    token: session?.token?.idToken,
                  }),
                  onSuccess: () => {
                    queryClient.invalidateQueries({
                      queryKey: ['NOTIFICATION_LIST_QUERY'],
                    });
                  },
                }
                );
              }
            