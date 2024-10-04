
              import { useMutation, useQueryClient } from "@tanstack/react-query";
              import { useSession } from 'next-auth/react';
              import {UseCases} from "../usecases";
              import {
                  MutationHoldCreateArgs
              } from '@anotherdemo/core';


              
                  /** 
             * Type: MutationHoldCreateArgs
            {
 *   data: HoldCreateInput
 * }
 * 
 *  HoldCreateInput = {
 *   book_id?: InputMaybe<HoldsBook_IdRelationInput>
 *   patron_id?: InputMaybe<HoldsPatron_IdRelationInput>
 *   position_in_queue?: InputMaybe<Scalars['Int']['input']>
 * }
 * 
 * 
 * 
 * export type HoldsBook_IdRelationInput = {
 *   connect?: InputMaybe<BookKeyFilter>
 *   create?: InputMaybe<Holds_BookCreateInput>
 * }
 * 
 * export type HoldsPatron_IdRelationInput = {
 *   connect?: InputMaybe<PatronKeyFilter>
 *   create?: InputMaybe<Holds_PatronCreateInput>
 * }
 * 
             */
                
             

              /**
               * Hook to create a Hold from the server.
               * @returns {UseMutationResult<boolean, Error, MutationHoldCreateArgs>}
               * @example
               * const {mutate, isPending, isError, mutateAsync} = useCreateHold();
               * @param {MutationHoldCreateArgs} params
              */

              export function useCreateHold() {
                const {data: session} = useSession();
                const queryClient = useQueryClient();
                

                return useMutation<
                  boolean,
                  Error,
                  MutationHoldCreateArgs
                >(
                {
                  mutationKey: ['HOLD_CREATE_MUTATION'],
                  mutationFn: async (params) => UseCases.Hold.createHold({
                    variables: params,
                    token: session?.token?.idToken,
                  }),
                  onSuccess: () => {
                    queryClient.invalidateQueries({
                      queryKey: ['HOLD_LIST_QUERY'],
                    });
                  },
                }
                );
              }
            