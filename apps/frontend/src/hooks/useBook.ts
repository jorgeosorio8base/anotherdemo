
            import { useQuery, useQueryClient } from "@tanstack/react-query";
            import { useSession } from 'next-auth/react';
            import {UseCases} from "../usecases";
            import {
            QueryBookArgs,
            BookEntity,
        } from '@anotherdemo/core';

            /*
              Type: IBookEntity

              
          

           IBookEntity {
              Id?: string;
CreatedAt?: string;
UpdatedAt?: string;
Title?: string;
Author?: string;
Isbn?: string;
PublicationDate?: string;
Genre?: string;
AvailabilityStatus?: string;




          }
      
            */

          
              /*
            Type: QueryBookArgs
            {
  id?: InputMaybe<Scalars['ID']['input']>
  isbn?: InputMaybe<Scalars['String']['input']>
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>
}




          */
            

        /**
         * Hook to fetch Book from the server.
         *
         * @returns {UseQueryResult<BookEntity | null>}
         * 
         * @example
         * const {data, isError, isLoading, isFetching, refetch} = useBook({id: '1'});
         * 
         * @param {QueryBookArgs} variables - The query variables.
        */

        export function useBook(
              variables: QueryBookArgs,
        ) {
          const {data: session} = useSession();
          return useQuery<BookEntity | null>(
          {
              queryKey: ['BOOK_QUERY'],
              queryFn: async () => UseCases.Book.getBook({
                variables,
                token: session?.token?.idToken,
              }),
              enabled: !!session?.token?.idToken,
          });
        }
    