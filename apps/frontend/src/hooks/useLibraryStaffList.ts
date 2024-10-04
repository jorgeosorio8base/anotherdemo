
          import { useQuery } from "@tanstack/react-query";
          import { useSession } from 'next-auth/react';
          import {UseCases} from "../usecases";
          import {       
              QueryLibraryStaffListArgs,          
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

           /** 
             * Type: QueryLibraryStaffListArgs
            undefined
             */
            

          /**
           * Hook to fetch list of LibraryStaff from the server.
           * 
           * @returns {UseQueryResult<{items: LibraryStaffEntity[], count: number} | null>}
           * 
           * @example
           * const {data, isError, isLoading, isFetching, refetch} = useLibraryStaffList({first: 10});
           * 
           * @param {QueryLibraryStaffListArgs} variables - The query variables.
          */

          export function useLibraryStaffList(
              variables?: QueryLibraryStaffListArgs,
        ) {
              const {data: session} = useSession();
          return useQuery<{
              items: LibraryStaffEntity[];
              count: number;
          } | null>(
          {
              queryKey: ['LIBRARYSTAFF_LIST_QUERY'],
              queryFn: async () => UseCases.LibraryStaff.getLibraryStaffList({
                variables: variables || {},
                token: session?.token?.idToken,
              }),
              enabled: !!session?.token?.idToken,
          });
        }
    