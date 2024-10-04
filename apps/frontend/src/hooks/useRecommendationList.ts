
          import { useQuery } from "@tanstack/react-query";
          import { useSession } from 'next-auth/react';
          import {UseCases} from "../usecases";
          import {       
              QueryRecommendationsListArgs,          
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

           /** 
             * Type: QueryRecommendationsListArgs
            {
 *   after?: InputMaybe<Scalars['String']['input']>
 *   before?: InputMaybe<Scalars['String']['input']>
 *   filter?: InputMaybe<RecommendationFilter>
 *   first?: InputMaybe<Scalars['Int']['input']>
 *   groupBy?: InputMaybe<RecommendationGroupBy>
 *   last?: InputMaybe<Scalars['Int']['input']>
 *   orderBy?: InputMaybe<Array<InputMaybe<RecommendationOrderBy>>>
 *   skip?: InputMaybe<Scalars['Int']['input']>
 *   sort?: InputMaybe<Array<RecommendationSort>>
 *   withDeleted?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 * 
 * 
 * 
 * 
 *  RecommendationFilter = {
 *   AND?: InputMaybe<Array<RecommendationFilter>>
 *   OR?: InputMaybe<Array<RecommendationFilter>>
 *   _fullText?: InputMaybe<Scalars['String']['input']>
 *   book_id?: InputMaybe<BookFilter>
 *   createdAt?: InputMaybe<DateTimePredicate>
 *   deletedAt?: InputMaybe<IntPredicate>
 *   id?: InputMaybe<IdPredicate>
 *   patron_id?: InputMaybe<PatronFilter>
 *   reason?: InputMaybe<StringPredicate>
 *   updatedAt?: InputMaybe<DateTimePredicate>
 * }
 * 
 * export type 
 * 
 * export type RecommendationFilter = {
 *   AND?: InputMaybe<Array<RecommendationFilter>>
 *   OR?: InputMaybe<Array<RecommendationFilter>>
 *   _fullText?: InputMaybe<Scalars['String']['input']>
 *   book_id?: InputMaybe<BookFilter>
 *   createdAt?: InputMaybe<DateTimePredicate>
 *   deletedAt?: InputMaybe<IntPredicate>
 *   id?: InputMaybe<IdPredicate>
 *   patron_id?: InputMaybe<PatronFilter>
 *   reason?: InputMaybe<StringPredicate>
 *   updatedAt?: InputMaybe<DateTimePredicate>
 * }
 * 
 * export type BookFilter = {
 *   AND?: InputMaybe<Array<BookFilter>>
 *   Holds?: InputMaybe<HoldFilter>
 *   Loans?: InputMaybe<LoanFilter>
 *   OR?: InputMaybe<Array<BookFilter>>
 *   Recommendations?: InputMaybe<RecommendationFilter>
 *   Reviews?: InputMaybe<ReviewFilter>
 *   _fullText?: InputMaybe<Scalars['String']['input']>
 *   author?: InputMaybe<StringPredicate>
 *   availability_status?: InputMaybe<StringPredicate>
 *   createdAt?: InputMaybe<DateTimePredicate>
 *   deletedAt?: InputMaybe<IntPredicate>
 *   genre?: InputMaybe<StringPredicate>
 *   id?: InputMaybe<IdPredicate>
 *   isbn?: InputMaybe<StringPredicate>
 *   publication_date?: InputMaybe<DateTimePredicate>
 *   title?: InputMaybe<StringPredicate>
 *   updatedAt?: InputMaybe<DateTimePredicate>
 * }
 * 
 * export type DateTimePredicate = {
 *   equals?: InputMaybe<Scalars['DateTime']['input']>
 *   gt?: InputMaybe<Scalars['DateTime']['input']>
 *   gte?: InputMaybe<Scalars['DateTime']['input']>
 *   in?: InputMaybe<Array<Scalars['DateTime']['input']>>
 *   is_empty?: InputMaybe<Scalars['Boolean']['input']>
 *   is_not_empty?: InputMaybe<Scalars['Boolean']['input']>
 *   lt?: InputMaybe<Scalars['DateTime']['input']>
 *   lte?: InputMaybe<Scalars['DateTime']['input']>
 *   not_equals?: InputMaybe<Scalars['DateTime']['input']>
 *   not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>
 *   relative?: InputMaybe<DateRelativePredicates>
 * }
 * 
 * export type IntPredicate = {
 *   equals?: InputMaybe<Scalars['Int']['input']>
 *   gt?: InputMaybe<Scalars['Int']['input']>
 *   gte?: InputMaybe<Scalars['Int']['input']>
 *   in?: InputMaybe<Array<Scalars['Int']['input']>>
 *   is_empty?: InputMaybe<Scalars['Boolean']['input']>
 *   is_not_empty?: InputMaybe<Scalars['Boolean']['input']>
 *   lt?: InputMaybe<Scalars['Int']['input']>
 *   lte?: InputMaybe<Scalars['Int']['input']>
 *   not_equals?: InputMaybe<Scalars['Int']['input']>
 *   not_in?: InputMaybe<Array<Scalars['Int']['input']>>
 * }
 * 
 * export type IdPredicate = {
 *   contains?: InputMaybe<Scalars['ID']['input']>
 *   ends_with?: InputMaybe<Scalars['ID']['input']>
 *   equals?: InputMaybe<Scalars['ID']['input']>
 *   gt?: InputMaybe<Scalars['ID']['input']>
 *   gte?: InputMaybe<Scalars['ID']['input']>
 *   in?: InputMaybe<Array<Scalars['ID']['input']>>
 *   is_empty?: InputMaybe<Scalars['Boolean']['input']>
 *   is_not_empty?: InputMaybe<Scalars['Boolean']['input']>
 *   lt?: InputMaybe<Scalars['ID']['input']>
 *   lte?: InputMaybe<Scalars['ID']['input']>
 *   not_contains?: InputMaybe<Scalars['ID']['input']>
 *   not_ends_with?: InputMaybe<Scalars['ID']['input']>
 *   not_equals?: InputMaybe<Scalars['ID']['input']>
 *   not_in?: InputMaybe<Array<Scalars['ID']['input']>>
 *   not_starts_with?: InputMaybe<Scalars['ID']['input']>
 *   starts_with?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * export type PatronFilter = {
 *   AND?: InputMaybe<Array<PatronFilter>>
 *   Holds?: InputMaybe<HoldFilter>
 *   Loans?: InputMaybe<LoanFilter>
 *   OR?: InputMaybe<Array<PatronFilter>>
 *   Recommendations?: InputMaybe<RecommendationFilter>
 *   Reviews?: InputMaybe<ReviewFilter>
 *   _fullText?: InputMaybe<Scalars['String']['input']>
 *   createdAt?: InputMaybe<DateTimePredicate>
 *   deletedAt?: InputMaybe<IntPredicate>
 *   id?: InputMaybe<IdPredicate>
 *   membership_status?: InputMaybe<StringPredicate>
 *   updatedAt?: InputMaybe<DateTimePredicate>
 *   user_id?: InputMaybe<UserFilter>
 * }
 * 
 * export type StringPredicate = {
 *   contains?: InputMaybe<Scalars['String']['input']>
 *   ends_with?: InputMaybe<Scalars['String']['input']>
 *   equals?: InputMaybe<Scalars['String']['input']>
 *   in?: InputMaybe<Array<Scalars['String']['input']>>
 *   is_empty?: InputMaybe<Scalars['Boolean']['input']>
 *   is_not_empty?: InputMaybe<Scalars['Boolean']['input']>
 *   not_contains?: InputMaybe<Scalars['String']['input']>
 *   not_ends_with?: InputMaybe<Scalars['String']['input']>
 *   not_equals?: InputMaybe<Scalars['String']['input']>
 *   not_in?: InputMaybe<Array<Scalars['String']['input']>>
 *   not_starts_with?: InputMaybe<Scalars['String']['input']>
 *   starts_with?: InputMaybe<Scalars['String']['input']>
 * }
 * 
 * export type RecommendationGroupBy = {
 *   first?: InputMaybe<Scalars['Int']['input']>
 *   having?: InputMaybe<Having>
 *   last?: InputMaybe<Scalars['Int']['input']>
 *   query: RecommendationGroupByQuery
 *   skip?: InputMaybe<Scalars['Int']['input']>
 *   sort?: InputMaybe<Array<GroupBySort>>
 * }
 * 
 * 
 * 
 * export type Having = {
 *   AND?: InputMaybe<Array<Having>>
 *   OR?: InputMaybe<Array<Having>>
 *   alias?: InputMaybe<Scalars['String']['input']>
 *   bigint?: InputMaybe<BigIntPredicateHaving>
 *   bool?: InputMaybe<BoolPredicateHaving>
 *   date?: InputMaybe<DatePredicateHaving>
 *   datetime?: InputMaybe<DateTimePredicateHaving>
 *   float?: InputMaybe<FloatPredicateHaving>
 *   id?: InputMaybe<IdPredicateHaving>
 *   int?: InputMaybe<IntPredicateHaving>
 *   string?: InputMaybe<StringPredicateHaving>
 * }
 * 
 * export type RecommendationGroupByQuery = {
 *   _group?: InputMaybe<Array<GroupIdentifiersGroupByField>>
 *   book_id?: InputMaybe<BookGroupByQuery>
 *   createdAt?: InputMaybe<Array<GroupByField>>
 *   id?: InputMaybe<Array<GroupByField>>
 *   patron_id?: InputMaybe<PatronGroupByQuery>
 *   reason?: InputMaybe<Array<GroupByField>>
 *   updatedAt?: InputMaybe<Array<GroupByField>>
 * }
 * 
 * export type GroupBySort = {
 *   alias: Scalars['String']['input']
 *   direction: SortOrder
 * }
 * 
 * export type RecommendationSort = {
 *   book_id?: InputMaybe<BookSort>
 *   createdAt?: InputMaybe<SortOrder>
 *   deletedAt?: InputMaybe<SortOrder>
 *   id?: InputMaybe<SortOrder>
 *   patron_id?: InputMaybe<PatronSort>
 *   reason?: InputMaybe<SortOrder>
 *   updatedAt?: InputMaybe<SortOrder>
 * }
 * 
 * export type InputMaybe<T> = Maybe<T>
 * 
 * export type BookSort = {
 *   Holds?: InputMaybe<HoldSort>
 *   Loans?: InputMaybe<LoanSort>
 *   Recommendations?: InputMaybe<RecommendationSort>
 *   Reviews?: InputMaybe<ReviewSort>
 *   author?: InputMaybe<SortOrder>
 *   availability_status?: InputMaybe<SortOrder>
 *   createdAt?: InputMaybe<SortOrder>
 *   deletedAt?: InputMaybe<SortOrder>
 *   genre?: InputMaybe<SortOrder>
 *   id?: InputMaybe<SortOrder>
 *   isbn?: InputMaybe<SortOrder>
 *   publication_date?: InputMaybe<SortOrder>
 *   title?: InputMaybe<SortOrder>
 *   updatedAt?: InputMaybe<SortOrder>
 * }
 * 
 * export type PatronSort = {
 *   Holds?: InputMaybe<HoldSort>
 *   Loans?: InputMaybe<LoanSort>
 *   Recommendations?: InputMaybe<RecommendationSort>
 *   Reviews?: InputMaybe<ReviewSort>
 *   createdAt?: InputMaybe<SortOrder>
 *   deletedAt?: InputMaybe<SortOrder>
 *   id?: InputMaybe<SortOrder>
 *   membership_status?: InputMaybe<SortOrder>
 *   updatedAt?: InputMaybe<SortOrder>
 *   user_id?: InputMaybe<UserSort>
 * }
 * 
             */
            

          /**
           * Hook to fetch list of Recommendation from the server.
           * 
           * @returns {UseQueryResult<{items: RecommendationEntity[], count: number} | null>}
           * 
           * @example
           * const {data, isError, isLoading, isFetching, refetch} = useRecommendationList({first: 10});
           * 
           * @param {QueryRecommendationsListArgs} variables - The query variables.
          */

          export function useRecommendationList(
              variables?: QueryRecommendationsListArgs,
        ) {
              const {data: session} = useSession();
          return useQuery<{
              items: RecommendationEntity[];
              count: number;
          } | null>(
          {
              queryKey: ['RECOMMENDATION_LIST_QUERY'],
              queryFn: async () => UseCases.Recommendation.getRecommendationList({
                variables: variables || {},
                token: session?.token?.idToken,
              }),
              enabled: !!session?.token?.idToken,
          });
        }
    