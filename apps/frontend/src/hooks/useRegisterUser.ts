
              import { useMutation, useQueryClient } from "@tanstack/react-query";
              import { useSession } from 'next-auth/react';
              import {UseCases} from "../usecases";
              import {
                UserEntity,
                MutationUserSignUpWithPasswordArgs,
            } from '@anotherdemo/core';

            
                /** 
             * Type: MutationUserSignUpWithPasswordArgs
            {
 *   authProfileId?: InputMaybe<Scalars['ID']['input']>
 *   password: Scalars['String']['input']
 *   user: UserCreateInput
 * }
 * 
 * 
 * 
 * 
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
 * export type 
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
               * Hook to register a new user into the system.
               * 
               * @returns {UseMutationResult<UserEntity, Error, MutationUserSignUpWithPasswordArgs>}
               * 
               * @example
               * const {mutate, isPending, isError, mutateAsync} = useRegisterUser();
               * 
               * @param {MutationUserSignUpWithPasswordArgs} params - The user registration parameters.
              */

              export function useRegisterUser() {
                return useMutation<UserEntity | null, Error, MutationUserSignUpWithPasswordArgs>({
                  mutationKey: ['USER_REGISTER_MUTATION'],
                  mutationFn: async (params) =>
                    UseCases.User.registerUser({
                      variables: params,
                      token: undefined,
                    }),
                });
              }
            