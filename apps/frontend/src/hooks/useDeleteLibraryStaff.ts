
              import { useMutation, useQueryClient } from "@tanstack/react-query";
              import { useSession } from 'next-auth/react';
              import {UseCases} from "../usecases";
              import {
                  MutationLibraryStaffDeleteArgs
              } from '@anotherdemo/core';


              
                  /** 
             * Type: MutationLibraryStaffDeleteArgs
            {
 *   data?: InputMaybe<LibraryStaffDeleteInput>
 *   filter?: InputMaybe<LibraryStaffKeyFilter>
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 * 
 * 
 * 
 * 
 *  LibraryStaffDeleteInput = {
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * export type 
 * 
 * export type LibraryStaffKeyFilter = {
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * 
 * 
             */
                
             

              /**
               * Hook to delete a LibraryStaff from the server.
               * @returns {UseMutationResult<boolean, Error, MutationLibraryStaffDeleteArgs>}
               * @example
               * const {mutate, isPending, isError, mutateAsync} = useDeleteLibraryStaff();
               * @param {MutationLibraryStaffDeleteArgs} params
              */

              export function useDeleteLibraryStaff() {
                const {data: session} = useSession();
                const queryClient = useQueryClient();
                

                return useMutation<
                  boolean,
                  Error,
                  MutationLibraryStaffDeleteArgs
                >(
                {
                  mutationKey: ['LIBRARYSTAFF_DELETE_MUTATION'],
                  mutationFn: async (params) => UseCases.LibraryStaff.deleteLibraryStaff({
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
            