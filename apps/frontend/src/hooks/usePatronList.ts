
          import { useQuery } from "@tanstack/react-query";
          import { useSession } from 'next-auth/react';
          import {UseCases} from "../usecases";
          import {       
              QueryPatronsListArgs,          
              PatronEntity,
          } from '@anotherdemo/core';

          
              /*
              Type: IPatronEntity

              
          

           IPatronEntity {
              Id?: string;
CreatedAt?: string;
UpdatedAt?: string;

MembershipStatus?: string;
BorrowingHistory?: Record<string, any>;




          }
      
            */

           /** 
             * Type: QueryPatronsListArgs
            {
 *   after?: InputMaybe<Scalars['String']['input']>
 *   before?: InputMaybe<Scalars['String']['input']>
 *   filter?: InputMaybe<PatronFilter>
 *   first?: InputMaybe<Scalars['Int']['input']>
 *   groupBy?: InputMaybe<PatronGroupBy>
 *   last?: InputMaybe<Scalars['Int']['input']>
 *   orderBy?: InputMaybe<Array<InputMaybe<PatronOrderBy>>>
 *   skip?: InputMaybe<Scalars['Int']['input']>
 *   sort?: InputMaybe<Array<PatronSort>>
 *   withDeleted?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 * 
 * 
 * 
 * 
 *  PatronFilter = {
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
 * export type 
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
 * export type UserFilter = {
 *   AND?: InputMaybe<Array<UserFilter>>
 *   LibraryStaff?: InputMaybe<LibraryStaffFilter>
 *   Notifications?: InputMaybe<NotificationFilter>
 *   OR?: InputMaybe<Array<UserFilter>>
 *   Patrons?: InputMaybe<PatronFilter>
 *   _fullText?: InputMaybe<Scalars['String']['input']>
 *   avatar?: InputMaybe<FileFilter>
 *   createdAt?: InputMaybe<DateTimePredicate>
 *   createdBy?: InputMaybe<UserFilter>
 *   deletedAt?: InputMaybe<IntPredicate>
 *   email?: InputMaybe<StringPredicate>
 *   firstName?: InputMaybe<StringPredicate>
 *   id?: InputMaybe<IdPredicate>
 *   is8base?: InputMaybe<BoolPredicate>
 *   is_self?: InputMaybe<Scalars['Boolean']['input']>
 *   lastName?: InputMaybe<StringPredicate>
 *   not_self?: InputMaybe<Scalars['Boolean']['input']>
 *   origin?: InputMaybe<StringPredicate>
 *   roles?: InputMaybe<RoleRelationFilter>
 *   status?: InputMaybe<StringPredicate>
 *   timezone?: InputMaybe<StringPredicate>
 *   updatedAt?: InputMaybe<DateTimePredicate>
 * }
 * 
 * export type PatronGroupBy = {
 *   first?: InputMaybe<Scalars['Int']['input']>
 *   having?: InputMaybe<Having>
 *   last?: InputMaybe<Scalars['Int']['input']>
 *   query: PatronGroupByQuery
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
 * export type PatronGroupByQuery = {
 *   Holds?: InputMaybe<HoldGroupByQuery>
 *   Loans?: InputMaybe<LoanGroupByQuery>
 *   Recommendations?: InputMaybe<RecommendationGroupByQuery>
 *   Reviews?: InputMaybe<ReviewGroupByQuery>
 *   _group?: InputMaybe<Array<GroupIdentifiersGroupByField>>
 *   borrowing_history?: InputMaybe<Array<GroupByField>>
 *   createdAt?: InputMaybe<Array<GroupByField>>
 *   id?: InputMaybe<Array<GroupByField>>
 *   membership_status?: InputMaybe<Array<GroupByField>>
 *   updatedAt?: InputMaybe<Array<GroupByField>>
 *   user_id?: InputMaybe<UserGroupByQuery>
 * }
 * 
 * export type GroupBySort = {
 *   alias: Scalars['String']['input']
 *   direction: SortOrder
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
 * export type UserSort = {
 *   LibraryStaff?: InputMaybe<LibraryStaffSort>
 *   Notifications?: InputMaybe<NotificationSort>
 *   Patrons?: InputMaybe<PatronSort>
 *   avatar?: InputMaybe<FileSort>
 *   createdAt?: InputMaybe<SortOrder>
 *   createdBy?: InputMaybe<UserSort>
 *   deletedAt?: InputMaybe<SortOrder>
 *   email?: InputMaybe<SortOrder>
 *   firstName?: InputMaybe<SortOrder>
 *   id?: InputMaybe<SortOrder>
 *   is8base?: InputMaybe<SortOrder>
 *   lastName?: InputMaybe<SortOrder>
 *   origin?: InputMaybe<SortOrder>
 *   status?: InputMaybe<SortOrder>
 *   timezone?: InputMaybe<SortOrder>
 *   updatedAt?: InputMaybe<SortOrder>
 * }
 * 
             */
            

          /**
           * Hook to fetch list of Patron from the server.
           * 
           * @returns {UseQueryResult<{items: PatronEntity[], count: number} | null>}
           * 
           * @example
           * const {data, isError, isLoading, isFetching, refetch} = usePatronList({first: 10});
           * 
           * @param {QueryPatronsListArgs} variables - The query variables.
          */

          export function usePatronList(
              variables?: QueryPatronsListArgs,
        ) {
              const {data: session} = useSession();
          return useQuery<{
              items: PatronEntity[];
              count: number;
          } | null>(
          {
              queryKey: ['PATRON_LIST_QUERY'],
              queryFn: async () => UseCases.Patron.getPatronList({
                variables: variables || {},
                token: session?.token?.idToken,
              }),
              enabled: !!session?.token?.idToken,
          });
        }
    