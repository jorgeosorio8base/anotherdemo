
            import { useQuery, useQueryClient } from "@tanstack/react-query";
            import { useSession } from 'next-auth/react';
            import {UseCases} from "../usecases";
            import {
            QueryPatronArgs,
            PatronEntity,
        } from '@anotherdemo/core';

            /*
              Type: IPatronEntity

              
          

           IPatronEntity {
              Id?: string;
CreatedAt?: string;
UpdatedAt?: string;

MembershipStatus?: string;
BorrowingHistory?: Record<string, any>;




          }
      
            */

          
              /*
            Type: QueryPatronArgs
            {
  id?: InputMaybe<Scalars['ID']['input']>
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>
}




          */
            

        /**
         * Hook to fetch Patron from the server.
         *
         * @returns {UseQueryResult<PatronEntity | null>}
         * 
         * @example
         * const {data, isError, isLoading, isFetching, refetch} = usePatron({id: '1'});
         * 
         * @param {QueryPatronArgs} variables - The query variables.
        */

        export function usePatron(
              variables: QueryPatronArgs,
        ) {
          const {data: session} = useSession();
          return useQuery<PatronEntity | null>(
          {
              queryKey: ['PATRON_QUERY'],
              queryFn: async () => UseCases.Patron.getPatron({
                variables,
                token: session?.token?.idToken,
              }),
              enabled: !!session?.token?.idToken,
          });
        }
    