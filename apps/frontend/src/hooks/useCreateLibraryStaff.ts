
              import { useMutation, useQueryClient } from "@tanstack/react-query";
              import { useSession } from 'next-auth/react';
              import {UseCases} from "../usecases";
              import {
                  MutationLibraryStaffCreateArgs
              } from '@anotherdemo/core';


              
                  /** 
             * Type: MutationLibraryStaffCreateArgs
            {
 *   data: LibraryStaffCreateInput
 * }
 * 
 *  LibraryStaffCreateInput = {
 *   position?: InputMaybe<Scalars['String']['input']>
 *   user_id?: InputMaybe<LibraryStaffUser_IdRelationInput>
 * }
 * 
 * 
 * 
 * export type LibraryStaffUser_IdRelationInput = {
 *   connect?: InputMaybe<UserKeyFilter>
 *   create?: InputMaybe<LibraryStaff_UserCreateInput>
 * }
 * 
             */
                
             

              /**
               * Hook to create a LibraryStaff from the server.
               * @returns {UseMutationResult<boolean, Error, MutationLibraryStaffCreateArgs>}
               * @example
               * const {mutate, isPending, isError, mutateAsync} = useCreateLibraryStaff();
               * @param {MutationLibraryStaffCreateArgs} params
              */

              export function useCreateLibraryStaff() {
                const {data: session} = useSession();
                const queryClient = useQueryClient();
                

                return useMutation<
                  boolean,
                  Error,
                  MutationLibraryStaffCreateArgs
                >(
                {
                  mutationKey: ['LIBRARYSTAFF_CREATE_MUTATION'],
                  mutationFn: async (params) => UseCases.LibraryStaff.createLibraryStaff({
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
            