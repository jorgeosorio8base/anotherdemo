
          import { useQuery } from "@tanstack/react-query";
          import { useSession } from 'next-auth/react';
          import {UseCases} from "../usecases";
          import {       
              QueryNotificationsListArgs,          
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

           /** 
             * Type: QueryNotificationsListArgs
            {
 *   after?: InputMaybe<Scalars['String']['input']>
 *   before?: InputMaybe<Scalars['String']['input']>
 *   filter?: InputMaybe<NotificationFilter>
 *   first?: InputMaybe<Scalars['Int']['input']>
 *   groupBy?: InputMaybe<NotificationGroupBy>
 *   last?: InputMaybe<Scalars['Int']['input']>
 *   orderBy?: InputMaybe<Array<InputMaybe<NotificationOrderBy>>>
 *   skip?: InputMaybe<Scalars['Int']['input']>
 *   sort?: InputMaybe<Array<NotificationSort>>
 *   withDeleted?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 * 
 * 
 * 
 * 
 *  NotificationFilter = {
 *   AND?: InputMaybe<Array<NotificationFilter>>
 *   OR?: InputMaybe<Array<NotificationFilter>>
 *   _fullText?: InputMaybe<Scalars['String']['input']>
 *   createdAt?: InputMaybe<DateTimePredicate>
 *   deletedAt?: InputMaybe<IntPredicate>
 *   id?: InputMaybe<IdPredicate>
 *   is_read?: InputMaybe<BoolPredicate>
 *   message?: InputMaybe<StringPredicate>
 *   recipient_id?: InputMaybe<UserFilter>
 *   updatedAt?: InputMaybe<DateTimePredicate>
 * }
 * 
 * export type 
 * 
 * export type NotificationFilter = {
 *   AND?: InputMaybe<Array<NotificationFilter>>
 *   OR?: InputMaybe<Array<NotificationFilter>>
 *   _fullText?: InputMaybe<Scalars['String']['input']>
 *   createdAt?: InputMaybe<DateTimePredicate>
 *   deletedAt?: InputMaybe<IntPredicate>
 *   id?: InputMaybe<IdPredicate>
 *   is_read?: InputMaybe<BoolPredicate>
 *   message?: InputMaybe<StringPredicate>
 *   recipient_id?: InputMaybe<UserFilter>
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
 * export type BoolPredicate = {
 *   equals?: InputMaybe<Scalars['Boolean']['input']>
 *   is_empty?: InputMaybe<Scalars['Boolean']['input']>
 *   is_not_empty?: InputMaybe<Scalars['Boolean']['input']>
 *   not_equals?: InputMaybe<Scalars['Boolean']['input']>
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
 * export type NotificationGroupBy = {
 *   first?: InputMaybe<Scalars['Int']['input']>
 *   having?: InputMaybe<Having>
 *   last?: InputMaybe<Scalars['Int']['input']>
 *   query: NotificationGroupByQuery
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
 * export type NotificationGroupByQuery = {
 *   _group?: InputMaybe<Array<GroupIdentifiersGroupByField>>
 *   createdAt?: InputMaybe<Array<GroupByField>>
 *   id?: InputMaybe<Array<GroupByField>>
 *   is_read?: InputMaybe<Array<GroupByField>>
 *   message?: InputMaybe<Array<GroupByField>>
 *   recipient_id?: InputMaybe<UserGroupByQuery>
 *   updatedAt?: InputMaybe<Array<GroupByField>>
 * }
 * 
 * export type GroupBySort = {
 *   alias: Scalars['String']['input']
 *   direction: SortOrder
 * }
 * 
 * export type NotificationSort = {
 *   createdAt?: InputMaybe<SortOrder>
 *   deletedAt?: InputMaybe<SortOrder>
 *   id?: InputMaybe<SortOrder>
 *   is_read?: InputMaybe<SortOrder>
 *   message?: InputMaybe<SortOrder>
 *   recipient_id?: InputMaybe<UserSort>
 *   updatedAt?: InputMaybe<SortOrder>
 * }
 * 
 * export type InputMaybe<T> = Maybe<T>
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
           * Hook to fetch list of Notification from the server.
           * 
           * @returns {UseQueryResult<{items: NotificationEntity[], count: number} | null>}
           * 
           * @example
           * const {data, isError, isLoading, isFetching, refetch} = useNotificationList({first: 10});
           * 
           * @param {QueryNotificationsListArgs} variables - The query variables.
          */

          export function useNotificationList(
              variables?: QueryNotificationsListArgs,
        ) {
              const {data: session} = useSession();
          return useQuery<{
              items: NotificationEntity[];
              count: number;
          } | null>(
          {
              queryKey: ['NOTIFICATION_LIST_QUERY'],
              queryFn: async () => UseCases.Notification.getNotificationList({
                variables: variables || {},
                token: session?.token?.idToken,
              }),
              enabled: !!session?.token?.idToken,
          });
        }
    