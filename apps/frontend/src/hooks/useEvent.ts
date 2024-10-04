
            import { useQuery, useQueryClient } from "@tanstack/react-query";
            import { useSession } from 'next-auth/react';
            import {UseCases} from "../usecases";
            import {
            QueryEventArgs,
            EventEntity,
        } from '@anotherdemo/core';

            /*
              Type: IEventEntity

              
          

           IEventEntity {
              Id?: string;
CreatedAt?: string;
UpdatedAt?: string;
Title?: string;
Description?: string;
EventDate?: string;
Location?: string;
          }
      
            */

          
              /*
            Type: QueryEventArgs
            {
  id?: InputMaybe<Scalars['ID']['input']>
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>
}




          */
            

        /**
         * Hook to fetch Event from the server.
         *
         * @returns {UseQueryResult<EventEntity | null>}
         * 
         * @example
         * const {data, isError, isLoading, isFetching, refetch} = useEvent({id: '1'});
         * 
         * @param {QueryEventArgs} variables - The query variables.
        */

        export function useEvent(
              variables: QueryEventArgs,
        ) {
          const {data: session} = useSession();
          return useQuery<EventEntity | null>(
          {
              queryKey: ['EVENT_QUERY'],
              queryFn: async () => UseCases.Event.getEvent({
                variables,
                token: session?.token?.idToken,
              }),
              enabled: !!session?.token?.idToken,
          });
        }
    