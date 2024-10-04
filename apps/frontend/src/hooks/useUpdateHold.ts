
              import { useMutation, useQueryClient } from "@tanstack/react-query";
              import { useSession } from 'next-auth/react';
              import {UseCases} from "../usecases";
              import {
                  MutationHoldUpdateArgs
              } from '@anotherdemo/core';


              
                  /** 
             * Type: MutationHoldUpdateArgs
            {
 *   data: HoldUpdateInput
 *   destroyDetached?: InputMaybe<Scalars['Boolean']['input']>
 *   filter?: InputMaybe<HoldKeyFilter>
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 *  HoldUpdateInput = {
 *   book_id?: InputMaybe<HoldsBook_IdUpdateRelationInput>
 *   id?: InputMaybe<Scalars['ID']['input']>
 *   patron_id?: InputMaybe<HoldsPatron_IdUpdateRelationInput>
 *   position_in_queue?: InputMaybe<Scalars['Int']['input']>
 * }
 * 
 * 
 * 
 * export type HoldsBook_IdUpdateRelationInput = {
 *   connect?: InputMaybe<BookKeyFilter>
 *   create?: InputMaybe<Holds_BookCreateInput>
 *   disconnect?: InputMaybe<BookKeyFilter>
 *   reconnect?: InputMaybe<BookKeyFilter>
 *   update?: InputMaybe<Holds_BookUpdateInput>
 * }
 * 
 * export type HoldsPatron_IdUpdateRelationInput = {
 *   connect?: InputMaybe<PatronKeyFilter>
 *   create?: InputMaybe<Holds_PatronCreateInput>
 *   disconnect?: InputMaybe<PatronKeyFilter>
 *   reconnect?: InputMaybe<PatronKeyFilter>
 *   update?: InputMaybe<Holds_PatronUpdateInput>
 * }
 * 
 * export type 
 * 
 * 
 * 
 * export type HoldKeyFilter = {
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * 
 * 
             */
                
             

              /**
               * Hook to update a Hold from the server.
               * @returns {UseMutationResult<boolean, Error, MutationHoldUpdateArgs>}
               * @example
               * const {mutate, isPending, isError, mutateAsync} = useUpdateHold();
               * @param {MutationHoldUpdateArgs} params
              */

              export function useUpdateHold() {
                const {data: session} = useSession();
                const queryClient = useQueryClient();
                

                return useMutation<
                  boolean,
                  Error,
                  MutationHoldUpdateArgs
                >(
                {
                  mutationKey: ['HOLD_UPDATE_MUTATION'],
                  mutationFn: async (params) => UseCases.Hold.updateHold({
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
            