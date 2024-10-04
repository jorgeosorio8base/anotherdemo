
              import { useMutation, useQueryClient } from "@tanstack/react-query";
              import { useSession } from 'next-auth/react';
              import {UseCases} from "../usecases";
              import {
                  MutationUserCreateArgs
              } from '@anotherdemo/core';


              
                  /** 
             * Type: MutationUserCreateArgs
            {
 *   data: UserCreateInput
 * }
 * 
 *  UserCreateInput = {
 *   LibraryStaff?: InputMaybe<UsersLibraryStaffRelationInput>
 *   Notifications?: InputMaybe<UsersNotificationsRelationInput>
 *   Patrons?: InputMaybe<UsersPatronsRelationInput>
 *   avatar?: InputMaybe<UsersAvatarRelationInput>
 *   email: Scalars['String']['input']
 *   firstName?: InputMaybe<Scalars['String']['input']>
 *   lastName?: InputMaybe<Scalars['String']['input']>
 *   roles?: InputMaybe<UsersRolesRelationInput>
 *   status?: InputMaybe<Scalars['String']['input']>
 *   timezone?: InputMaybe<Scalars['String']['input']>
 * }
 * 
 * 
 * 
 * export type UsersLibraryStaffRelationInput = {
 *   connect?: InputMaybe<LibraryStaffKeyFilter>
 *   create?: InputMaybe<User_Id_LibraryStaffCreateInput>
 * }
 * 
 * export type UsersNotificationsRelationInput = {
 *   connect?: InputMaybe<NotificationKeyFilter>
 *   create?: InputMaybe<Recipient_Id_NotificationCreateInput>
 * }
 * 
 * export type UsersPatronsRelationInput = {
 *   connect?: InputMaybe<PatronKeyFilter>
 *   create?: InputMaybe<User_Id_PatronCreateInput>
 * }
 * 
 * export type UsersAvatarRelationInput = {
 *   connect?: InputMaybe<FileKeyFilter>
 *   create?: InputMaybe<Users_Avatar_FileCreateInput>
 * }
 * 
 * export type UsersRolesRelationInput = {
 *   connect?: InputMaybe<Array<RoleKeyFilter>>
 *   create?: InputMaybe<Array<InputMaybe<Users_RoleCreateInput>>>
 * }
 * 
             */
                
             

              /**
               * Hook to create a User from the server.
               * @returns {UseMutationResult<boolean, Error, MutationUserCreateArgs>}
               * @example
               * const {mutate, isPending, isError, mutateAsync} = useCreateUser();
               * @param {MutationUserCreateArgs} params
              */

              export function useCreateUser() {
                const {data: session} = useSession();
                const queryClient = useQueryClient();
                

                return useMutation<
                  boolean,
                  Error,
                  MutationUserCreateArgs
                >(
                {
                  mutationKey: ['USER_CREATE_MUTATION'],
                  mutationFn: async (params) => UseCases.User.createUser({
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
            