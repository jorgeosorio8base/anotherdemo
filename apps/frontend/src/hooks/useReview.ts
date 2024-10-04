
            import { useQuery, useQueryClient } from "@tanstack/react-query";
            import { useSession } from 'next-auth/react';
            import {UseCases} from "../usecases";
            import {
            QueryReviewArgs,
            ReviewEntity,
        } from '@anotherdemo/core';

            /*
              Type: IReviewEntity

              
          

           IReviewEntity {
              Id?: string;
CreatedAt?: string;
UpdatedAt?: string;


Rating?: number;
Comment?: string;
          }
      
            */

          
              /*
            Type: QueryReviewArgs
            {
  id?: InputMaybe<Scalars['ID']['input']>
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>
}




          */
            

        /**
         * Hook to fetch Review from the server.
         *
         * @returns {UseQueryResult<ReviewEntity | null>}
         * 
         * @example
         * const {data, isError, isLoading, isFetching, refetch} = useReview({id: '1'});
         * 
         * @param {QueryReviewArgs} variables - The query variables.
        */

        export function useReview(
              variables: QueryReviewArgs,
        ) {
          const {data: session} = useSession();
          return useQuery<ReviewEntity | null>(
          {
              queryKey: ['REVIEW_QUERY'],
              queryFn: async () => UseCases.Review.getReview({
                variables,
                token: session?.token?.idToken,
              }),
              enabled: !!session?.token?.idToken,
          });
        }
    