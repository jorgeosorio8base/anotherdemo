
            import { useQuery, useQueryClient } from "@tanstack/react-query";
            import { useSession } from 'next-auth/react';
            import {UseCases} from "../usecases";
            import {
            QueryDigitalResourceArgs,
            DigitalResourceEntity,
        } from '@anotherdemo/core';

            /*
              Type: IDigitalResourceEntity

              
          

           IDigitalResourceEntity {
              Id?: string;
CreatedAt?: string;
UpdatedAt?: string;
Title?: string;
Author?: string;
Format?: string;
PublicationDate?: string;
AvailabilityStatus?: string;
          }
      
            */

          
              /*
            Type: QueryDigitalResourceArgs
            {
  id?: InputMaybe<Scalars['ID']['input']>
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>
}




          */
            

        /**
         * Hook to fetch DigitalResource from the server.
         *
         * @returns {UseQueryResult<DigitalResourceEntity | null>}
         * 
         * @example
         * const {data, isError, isLoading, isFetching, refetch} = useDigitalResource({id: '1'});
         * 
         * @param {QueryDigitalResourceArgs} variables - The query variables.
        */

        export function useDigitalResource(
              variables: QueryDigitalResourceArgs,
        ) {
          const {data: session} = useSession();
          return useQuery<DigitalResourceEntity | null>(
          {
              queryKey: ['DIGITALRESOURCE_QUERY'],
              queryFn: async () => UseCases.DigitalResource.getDigitalResource({
                variables,
                token: session?.token?.idToken,
              }),
              enabled: !!session?.token?.idToken,
          });
        }
    