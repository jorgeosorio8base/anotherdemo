
            import { useQuery, useQueryClient } from "@tanstack/react-query";
            import { useSession } from 'next-auth/react';
            import {UseCases} from "../usecases";
            import {
            QueryHoldArgs,
            HoldEntity,
        } from '@anotherdemo/core';

            /*
              Type: IHoldEntity

              
          

           IHoldEntity {
              Id?: string;
CreatedAt?: string;
UpdatedAt?: string;


PositionInQueue?: number;
          }
      
            */

          
              /*
            Type: QueryHoldArgs
            {
  id?: InputMaybe<Scalars['ID']['input']>
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>
}




          */
            

        /**
         * Hook to fetch Hold from the server.
         *
         * @returns {UseQueryResult<HoldEntity | null>}
         * 
         * @example
         * const {data, isError, isLoading, isFetching, refetch} = useHold({id: '1'});
         * 
         * @param {QueryHoldArgs} variables - The query variables.
        */

        export function useHold(
              variables: QueryHoldArgs,
        ) {
          const {data: session} = useSession();
          return useQuery<HoldEntity | null>(
          {
              queryKey: ['HOLD_QUERY'],
              queryFn: async () => UseCases.Hold.getHold({
                variables,
                token: session?.token?.idToken,
              }),
              enabled: !!session?.token?.idToken,
          });
        }
    