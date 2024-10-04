
            import { useQuery, useQueryClient } from "@tanstack/react-query";
            import { useSession } from 'next-auth/react';
            import {UseCases} from "../usecases";
            import {
            QueryRecommendationArgs,
            RecommendationEntity,
        } from '@anotherdemo/core';

            /*
              Type: IRecommendationEntity

              
          

           IRecommendationEntity {
              Id?: string;
CreatedAt?: string;
UpdatedAt?: string;


Reason?: string;
          }
      
            */

          
              /*
            Type: QueryRecommendationArgs
            {
  id?: InputMaybe<Scalars['ID']['input']>
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>
}




          */
            

        /**
         * Hook to fetch Recommendation from the server.
         *
         * @returns {UseQueryResult<RecommendationEntity | null>}
         * 
         * @example
         * const {data, isError, isLoading, isFetching, refetch} = useRecommendation({id: '1'});
         * 
         * @param {QueryRecommendationArgs} variables - The query variables.
        */

        export function useRecommendation(
              variables: QueryRecommendationArgs,
        ) {
          const {data: session} = useSession();
          return useQuery<RecommendationEntity | null>(
          {
              queryKey: ['RECOMMENDATION_QUERY'],
              queryFn: async () => UseCases.Recommendation.getRecommendation({
                variables,
                token: session?.token?.idToken,
              }),
              enabled: !!session?.token?.idToken,
          });
        }
    