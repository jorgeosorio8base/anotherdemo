
          import { useQuery } from "@tanstack/react-query";
          import { useSession } from 'next-auth/react';
          import {UseCases} from "../usecases";
          import {       
              QueryDigitalResourcesListArgs,          
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

           /** 
             * Type: QueryDigitalResourcesListArgs
            {
 *   after?: InputMaybe<Scalars['String']['input']>
 *   before?: InputMaybe<Scalars['String']['input']>
 *   filter?: InputMaybe<DigitalResourceFilter>
 *   first?: InputMaybe<Scalars['Int']['input']>
 *   groupBy?: InputMaybe<DigitalResourceGroupBy>
 *   last?: InputMaybe<Scalars['Int']['input']>
 *   orderBy?: InputMaybe<Array<InputMaybe<DigitalResourceOrderBy>>>
 *   skip?: InputMaybe<Scalars['Int']['input']>
 *   sort?: InputMaybe<Array<DigitalResourceSort>>
 *   withDeleted?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 * 
 * 
 * 
 * 
 *  DigitalResourceFilter = {
 *   AND?: InputMaybe<Array<DigitalResourceFilter>>
 *   OR?: InputMaybe<Array<DigitalResourceFilter>>
 *   _fullText?: InputMaybe<Scalars['String']['input']>
 *   author?: InputMaybe<StringPredicate>
 *   availability_status?: InputMaybe<StringPredicate>
 *   createdAt?: InputMaybe<DateTimePredicate>
 *   deletedAt?: InputMaybe<IntPredicate>
 *   format?: InputMaybe<StringPredicate>
 *   id?: InputMaybe<IdPredicate>
 *   publication_date?: InputMaybe<DateTimePredicate>
 *   title?: InputMaybe<StringPredicate>
 *   updatedAt?: InputMaybe<DateTimePredicate>
 * }
 * 
 * export type 
 * 
 * export type DigitalResourceFilter = {
 *   AND?: InputMaybe<Array<DigitalResourceFilter>>
 *   OR?: InputMaybe<Array<DigitalResourceFilter>>
 *   _fullText?: InputMaybe<Scalars['String']['input']>
 *   author?: InputMaybe<StringPredicate>
 *   availability_status?: InputMaybe<StringPredicate>
 *   createdAt?: InputMaybe<DateTimePredicate>
 *   deletedAt?: InputMaybe<IntPredicate>
 *   format?: InputMaybe<StringPredicate>
 *   id?: InputMaybe<IdPredicate>
 *   publication_date?: InputMaybe<DateTimePredicate>
 *   title?: InputMaybe<StringPredicate>
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
 * export type DigitalResourceGroupBy = {
 *   first?: InputMaybe<Scalars['Int']['input']>
 *   having?: InputMaybe<Having>
 *   last?: InputMaybe<Scalars['Int']['input']>
 *   query: DigitalResourceGroupByQuery
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
 * export type DigitalResourceGroupByQuery = {
 *   _group?: InputMaybe<Array<GroupIdentifiersGroupByField>>
 *   author?: InputMaybe<Array<GroupByField>>
 *   availability_status?: InputMaybe<Array<GroupByField>>
 *   createdAt?: InputMaybe<Array<GroupByField>>
 *   format?: InputMaybe<Array<GroupByField>>
 *   id?: InputMaybe<Array<GroupByField>>
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
 * export type DigitalResourceSort = {
 *   author?: InputMaybe<SortOrder>
 *   availability_status?: InputMaybe<SortOrder>
 *   createdAt?: InputMaybe<SortOrder>
 *   deletedAt?: InputMaybe<SortOrder>
 *   format?: InputMaybe<SortOrder>
 *   id?: InputMaybe<SortOrder>
 *   publication_date?: InputMaybe<SortOrder>
 *   title?: InputMaybe<SortOrder>
 *   updatedAt?: InputMaybe<SortOrder>
 * }
 * 
 * export type InputMaybe<T> = Maybe<T>
 * 
             */
            

          /**
           * Hook to fetch list of DigitalResource from the server.
           * 
           * @returns {UseQueryResult<{items: DigitalResourceEntity[], count: number} | null>}
           * 
           * @example
           * const {data, isError, isLoading, isFetching, refetch} = useDigitalResourceList({first: 10});
           * 
           * @param {QueryDigitalResourcesListArgs} variables - The query variables.
          */

          export function useDigitalResourceList(
              variables?: QueryDigitalResourcesListArgs,
        ) {
              const {data: session} = useSession();
          return useQuery<{
              items: DigitalResourceEntity[];
              count: number;
          } | null>(
          {
              queryKey: ['DIGITALRESOURCE_LIST_QUERY'],
              queryFn: async () => UseCases.DigitalResource.getDigitalResourceList({
                variables: variables || {},
                token: session?.token?.idToken,
              }),
              enabled: !!session?.token?.idToken,
          });
        }
    