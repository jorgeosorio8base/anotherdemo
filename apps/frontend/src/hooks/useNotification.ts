
            import { useQuery, useQueryClient } from "@tanstack/react-query";
            import { useSession } from 'next-auth/react';
            import {UseCases} from "../usecases";
            import {
            QueryNotificationArgs,
            NotificationEntity,
        } from '@anotherdemo/core';

            /*
              Type: INotificationEntity

              
          

           INotificationEntity {
              Id?: string;
CreatedAt?: string;
UpdatedAt?: string;

Message?: string;
IsRead?: any;
          }
      
            */

          
              /*
            Type: QueryNotificationArgs
            {
  id?: InputMaybe<Scalars['ID']['input']>
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>
}




          */
            

        /**
         * Hook to fetch Notification from the server.
         *
         * @returns {UseQueryResult<NotificationEntity | null>}
         * 
         * @example
         * const {data, isError, isLoading, isFetching, refetch} = useNotification({id: '1'});
         * 
         * @param {QueryNotificationArgs} variables - The query variables.
        */

        export function useNotification(
              variables: QueryNotificationArgs,
        ) {
          const {data: session} = useSession();
          return useQuery<NotificationEntity | null>(
          {
              queryKey: ['NOTIFICATION_QUERY'],
              queryFn: async () => UseCases.Notification.getNotification({
                variables,
                token: session?.token?.idToken,
              }),
              enabled: !!session?.token?.idToken,
          });
        }
    