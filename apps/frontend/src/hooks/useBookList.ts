
          import { useQuery } from "@tanstack/react-query";
          import { useSession } from 'next-auth/react';
          import {UseCases} from "../usecases";
          import {       
              QueryBooksListArgs,          
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

           /** 
             * Type: QueryBooksListArgs
            {
 *   after?: InputMaybe<Scalars['String']['input']>
 *   before?: InputMaybe<Scalars['String']['input']>
 *   filter?: InputMaybe<BookFilter>
 *   first?: InputMaybe<Scalars['Int']['input']>
 *   groupBy?: InputMaybe<BookGroupBy>
 *   last?: InputMaybe<Scalars['Int']['input']>
 *   orderBy?: InputMaybe<Array<InputMaybe<BookOrderBy>>>
 *   skip?: InputMaybe<Scalars['Int']['input']>
 *   sort?: InputMaybe<Array<BookSort>>
 *   withDeleted?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 * 
 * 
 * 
 * 
 *  BookFilter = {
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
 * export type 
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
 * export type HoldFilter = {
 *   AND?: InputMaybe<Array<HoldFilter>>
 *   OR?: InputMaybe<Array<HoldFilter>>
 *   _fullText?: InputMaybe<Scalars['String']['input']>
 *   book_id?: InputMaybe<BookFilter>
 *   createdAt?: InputMaybe<DateTimePredicate>
 *   deletedAt?: InputMaybe<IntPredicate>
 *   id?: InputMaybe<IdPredicate>
 *   patron_id?: InputMaybe<PatronFilter>
 *   position_in_queue?: InputMaybe<IntPredicate>
 *   updatedAt?: InputMaybe<DateTimePredicate>
 * }
 * 
 * export type LoanFilter = {
 *   AND?: InputMaybe<Array<LoanFilter>>
 *   OR?: InputMaybe<Array<LoanFilter>>
 *   _fullText?: InputMaybe<Scalars['String']['input']>
 *   book_id?: InputMaybe<BookFilter>
 *   createdAt?: InputMaybe<DateTimePredicate>
 *   deletedAt?: InputMaybe<IntPredicate>
 *   due_date?: InputMaybe<DateTimePredicate>
 *   id?: InputMaybe<IdPredicate>
 *   patron_id?: InputMaybe<PatronFilter>
 *   status?: InputMaybe<StringPredicate>
 *   updatedAt?: InputMaybe<DateTimePredicate>
 * }
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
 * export type ReviewFilter = {
 *   AND?: InputMaybe<Array<ReviewFilter>>
 *   OR?: InputMaybe<Array<ReviewFilter>>
 *   _fullText?: InputMaybe<Scalars['String']['input']>
 *   book_id?: InputMaybe<BookFilter>
 *   comment?: InputMaybe<StringPredicate>
 *   createdAt?: InputMaybe<DateTimePredicate>
 *   deletedAt?: InputMaybe<IntPredicate>
 *   id?: InputMaybe<IdPredicate>
 *   patron_id?: InputMaybe<PatronFilter>
 *   rating?: InputMaybe<IntPredicate>
 *   updatedAt?: InputMaybe<DateTimePredicate>
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
 * export type BookGroupBy = {
 *   first?: InputMaybe<Scalars['Int']['input']>
 *   having?: InputMaybe<Having>
 *   last?: InputMaybe<Scalars['Int']['input']>
 *   query: BookGroupByQuery
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
 * export type BookGroupByQuery = {
 *   Holds?: InputMaybe<HoldGroupByQuery>
 *   Loans?: InputMaybe<LoanGroupByQuery>
 *   Recommendations?: InputMaybe<RecommendationGroupByQuery>
 *   Reviews?: InputMaybe<ReviewGroupByQuery>
 *   _group?: InputMaybe<Array<GroupIdentifiersGroupByField>>
 *   author?: InputMaybe<Array<GroupByField>>
 *   availability_status?: InputMaybe<Array<GroupByField>>
 *   createdAt?: InputMaybe<Array<GroupByField>>
 *   genre?: InputMaybe<Array<GroupByField>>
 *   id?: InputMaybe<Array<GroupByField>>
 *   isbn?: InputMaybe<Array<GroupByField>>
 *   publication_date?: InputMaybe<Array<GroupByField>>
 *   title?: InputMaybe<Array<GroupByField>>
 *   updatedAt?: InputMaybe<Array<GroupByField>>
 * }
 * 
 * export type GroupBySort = {
 *   alias: Scalars['String']['input']
 *   direction: SortOrder
 * }
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
 * export type InputMaybe<T> = Maybe<T>
 * 
 * export type HoldSort = {
 *   book_id?: InputMaybe<BookSort>
 *   createdAt?: InputMaybe<SortOrder>
 *   deletedAt?: InputMaybe<SortOrder>
 *   id?: InputMaybe<SortOrder>
 *   patron_id?: InputMaybe<PatronSort>
 *   position_in_queue?: InputMaybe<SortOrder>
 *   updatedAt?: InputMaybe<SortOrder>
 * }
 * 
 * export type LoanSort = {
 *   book_id?: InputMaybe<BookSort>
 *   createdAt?: InputMaybe<SortOrder>
 *   deletedAt?: InputMaybe<SortOrder>
 *   due_date?: InputMaybe<SortOrder>
 *   id?: InputMaybe<SortOrder>
 *   patron_id?: InputMaybe<PatronSort>
 *   status?: InputMaybe<SortOrder>
 *   updatedAt?: InputMaybe<SortOrder>
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
 * export type ReviewSort = {
 *   book_id?: InputMaybe<BookSort>
 *   comment?: InputMaybe<SortOrder>
 *   createdAt?: InputMaybe<SortOrder>
 *   deletedAt?: InputMaybe<SortOrder>
 *   id?: InputMaybe<SortOrder>
 *   patron_id?: InputMaybe<PatronSort>
 *   rating?: InputMaybe<SortOrder>
 *   updatedAt?: InputMaybe<SortOrder>
 * }
 * 
             */
            

          /**
           * Hook to fetch list of Book from the server.
           * 
           * @returns {UseQueryResult<{items: BookEntity[], count: number} | null>}
           * 
           * @example
           * const {data, isError, isLoading, isFetching, refetch} = useBookList({first: 10});
           * 
           * @param {QueryBooksListArgs} variables - The query variables.
          */

          export function useBookList(
              variables?: QueryBooksListArgs,
        ) {
              const {data: session} = useSession();
          return useQuery<{
              items: BookEntity[];
              count: number;
          } | null>(
          {
              queryKey: ['BOOK_LIST_QUERY'],
              queryFn: async () => UseCases.Book.getBookList({
                variables: variables || {},
                token: session?.token?.idToken,
              }),
              enabled: !!session?.token?.idToken,
          });
        }
    