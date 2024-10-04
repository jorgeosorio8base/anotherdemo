
              import { useMutation, useQueryClient } from "@tanstack/react-query";
              import { useSession } from 'next-auth/react';
              import {UseCases} from "../usecases";
              import {
                  MutationUserUpdateArgs
              } from '@anotherdemo/core';


              
                  /** 
             * Type: MutationUserUpdateArgs
            {
 *   data: UserUpdateInput
 *   destroyDetached?: InputMaybe<Scalars['Boolean']['input']>
 *   filter?: InputMaybe<UserKeyFilter>
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 *  UserUpdateInput = {
 *   LibraryStaff?: InputMaybe<UsersLibraryStaffUpdateRelationInput>
 *   Notifications?: InputMaybe<UsersNotificationsUpdateRelationInput>
 *   Patrons?: InputMaybe<UsersPatronsUpdateRelationInput>
 *   avatar?: InputMaybe<UsersAvatarUpdateRelationInput>
 *   email?: InputMaybe<Scalars['String']['input']>
 *   firstName?: InputMaybe<Scalars['String']['input']>
 *   id?: InputMaybe<Scalars['ID']['input']>
 *   lastName?: InputMaybe<Scalars['String']['input']>
 *   roles?: InputMaybe<UsersRolesUpdateRelationInput>
 *   status?: InputMaybe<Scalars['String']['input']>
 *   timezone?: InputMaybe<Scalars['String']['input']>
 * }
 * 
 * 
 * 
 * export type UsersLibraryStaffUpdateRelationInput = {
 *   connect?: InputMaybe<LibraryStaffKeyFilter>
 *   create?: InputMaybe<User_Id_LibraryStaffCreateInput>
 *   disconnect?: InputMaybe<LibraryStaffKeyFilter>
 *   reconnect?: InputMaybe<LibraryStaffKeyFilter>
 *   update?: InputMaybe<User_Id_LibraryStaffUpdateInput>
 * }
 * 
 * export type UsersNotificationsUpdateRelationInput = {
 *   connect?: InputMaybe<NotificationKeyFilter>
 *   create?: InputMaybe<Recipient_Id_NotificationCreateInput>
 *   disconnect?: InputMaybe<NotificationKeyFilter>
 *   reconnect?: InputMaybe<NotificationKeyFilter>
 *   update?: InputMaybe<Recipient_Id_NotificationUpdateInput>
 * }
 * 
 * export type UsersPatronsUpdateRelationInput = {
 *   connect?: InputMaybe<PatronKeyFilter>
 *   create?: InputMaybe<User_Id_PatronCreateInput>
 *   disconnect?: InputMaybe<PatronKeyFilter>
 *   reconnect?: InputMaybe<PatronKeyFilter>
 *   update?: InputMaybe<User_Id_PatronUpdateInput>
 * }
 * 
 * export type UsersAvatarUpdateRelationInput = {
 *   connect?: InputMaybe<FileKeyFilter>
 *   create?: InputMaybe<Users_Avatar_FileCreateInput>
 *   disconnect?: InputMaybe<FileKeyFilter>
 *   reconnect?: InputMaybe<FileKeyFilter>
 *   update?: InputMaybe<Users_Avatar_FileUpdateInput>
 * }
 * 
 * export type UsersRolesUpdateRelationInput = {
 *   connect?: InputMaybe<Array<RoleKeyFilter>>
 *   create?: InputMaybe<Array<InputMaybe<Users_RoleCreateInput>>>
 *   disconnect?: InputMaybe<Array<RoleKeyFilter>>
 *   reconnect?: InputMaybe<Array<RoleKeyFilter>>
 *   update?: InputMaybe<Array<InputMaybe<Users_RoleUpdateInput>>>
 * }
 * 
 * export type 
 * 
 * 
 * 
 * export type UserKeyFilter = {
 *   email?: InputMaybe<Scalars['String']['input']>
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * 
 * 
             */
                
             

              /**
               * Hook to update a User from the server.
               * @returns {UseMutationResult<boolean, Error, MutationUserUpdateArgs>}
               * @example
               * const {mutate, isPending, isError, mutateAsync} = useUpdateUser();
               * @param {MutationUserUpdateArgs} params
              */

              export function useUpdateUser() {
                const {data: session} = useSession();
                const queryClient = useQueryClient();
                

                return useMutation<
                  boolean,
                  Error,
                  MutationUserUpdateArgs
                >(
                {
                  mutationKey: ['USER_UPDATE_MUTATION'],
                  mutationFn: async (params) => UseCases.User.updateUser({
                    variables: params,
                    token: session?.token?.idToken,
                  }),
                  onSuccess: () => {
                    queryClient.invalidateQueries({
                      queryKey: ['USER_LIST_QUERY'],
                    });
                  },
                }
                );
              }
            