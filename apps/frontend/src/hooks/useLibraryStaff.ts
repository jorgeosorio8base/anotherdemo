
            import { useQuery, useQueryClient } from "@tanstack/react-query";
            import { useSession } from 'next-auth/react';
            import {UseCases} from "../usecases";
            import {
            QueryLibraryStaffArgs,
            LibraryStaffEntity,
        } from '@anotherdemo/core';

            /*
              Type: ILibraryStaffEntity

              
          

           ILibraryStaffEntity {
              Id?: string;
CreatedAt?: string;
UpdatedAt?: string;

Position?: string;
          }
      
            */

          
              /*
            Type: QueryLibraryStaffArgs
            {
  id?: InputMaybe<Scalars['ID']['input']>
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>
}




          */
            

        /**
         * Hook to fetch LibraryStaff from the server.
         *
         * @returns {UseQueryResult<LibraryStaffEntity | null>}
         * 
         * @example
         * const {data, isError, isLoading, isFetching, refetch} = useLibraryStaff({id: '1'});
         * 
         * @param {QueryLibraryStaffArgs} variables - The query variables.
        */

        export function useLibraryStaff(
              variables: QueryLibraryStaffArgs,
        ) {
          const {data: session} = useSession();
          return useQuery<LibraryStaffEntity | null>(
          {
              queryKey: ['LIBRARYSTAFF_QUERY'],
              queryFn: async () => UseCases.LibraryStaff.getLibraryStaff({
                variables,
                token: session?.token?.idToken,
              }),
              enabled: !!session?.token?.idToken,
          });
        }
    