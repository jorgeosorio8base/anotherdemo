
              import { useMutation, useQueryClient } from "@tanstack/react-query";
              import { useSession } from 'next-auth/react';
              import {UseCases} from "../usecases";
              import {
                  MutationLibraryStaffUpdateArgs
              } from '@anotherdemo/core';


              
                  /** 
             * Type: MutationLibraryStaffUpdateArgs
            {
 *   data: LibraryStaffUpdateInput
 *   destroyDetached?: InputMaybe<Scalars['Boolean']['input']>
 *   filter?: InputMaybe<LibraryStaffKeyFilter>
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 *  LibraryStaffUpdateInput = {
 *   id?: InputMaybe<Scalars['ID']['input']>
 *   position?: InputMaybe<Scalars['String']['input']>
 *   user_id?: InputMaybe<LibraryStaffUser_IdUpdateRelationInput>
 * }
 * 
 * 
 * 
 * export type LibraryStaffUser_IdUpdateRelationInput = {
 *   connect?: InputMaybe<UserKeyFilter>
 *   create?: InputMaybe<LibraryStaff_UserCreateInput>
 *   disconnect?: InputMaybe<UserKeyFilter>
 *   reconnect?: InputMaybe<UserKeyFilter>
 *   update?: InputMaybe<LibraryStaff_UserUpdateInput>
 * }
 * 
 * export type 
 * 
 * 
 * 
 * export type LibraryStaffKeyFilter = {
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * 
 * 
             */
                
             

              /**
               * Hook to update a LibraryStaff from the server.
               * @returns {UseMutationResult<boolean, Error, MutationLibraryStaffUpdateArgs>}
               * @example
               * const {mutate, isPending, isError, mutateAsync} = useUpdateLibraryStaff();
               * @param {MutationLibraryStaffUpdateArgs} params
              */

              export function useUpdateLibraryStaff() {
                const {data: session} = useSession();
                const queryClient = useQueryClient();
                

                return useMutation<
                  boolean,
                  Error,
                  MutationLibraryStaffUpdateArgs
                >(
                {
                  mutationKey: ['LIBRARYSTAFF_UPDATE_MUTATION'],
                  mutationFn: async (params) => UseCases.LibraryStaff.updateLibraryStaff({
                    variables: params,
                    token: session?.token?.idToken,
                  }),
                  onSuccess: () => {
                    queryClient.invalidateQueries({
                      queryKey: ['LIBRARYSTAFF_LIST_QUERY'],
                    });
                  },
                }
                );
              }
            