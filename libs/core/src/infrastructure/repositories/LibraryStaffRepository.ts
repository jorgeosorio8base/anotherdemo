
        import {IRepositoryParams, ILibraryStaffRepository} from './interfaces';
        import {Http, IHttp} from '../http';
        import { gql } from 'graphql-request';
        import {Environment} from '../../environment';
        import {
            LibraryStaff,
            QueryLibraryStaffArgs,
            QueryLibraryStaffListArgs,
            LibraryStaffListResponse,
            MutationLibraryStaffCreateArgs, MutationLibraryStaffDeleteArgs, MutationLibraryStaffUpdateArgs,
            SuccessResponse,
            
        } from '../../definitions/schema';

        export class LibraryStaffRepository implements ILibraryStaffRepository {
            private readonly http: IHttp;

            constructor() {
                this.http = new Http();
            }

            async getLibraryStaff(params: IRepositoryParams<QueryLibraryStaffArgs>): Promise<LibraryStaff | null> {
                return this.http.requestGraphQL<{
                    libraryStaff: LibraryStaff
                }>({
                    url: Environment.BACKEND_API_URL,
                    requestDocument:
                        gql`
                            query GET_LIBRARYSTAFF(
                            $id: ID,$user_id: String
                        ) {
                            libraryStaff(
                              id: $id,user_id: $user_id
                            ) {
                                id
createdAt
updatedAt

position    
                            }
                        }
                        `
                      ,
                      token: params.token,
                    variables: params.variables,
                })?.then((response) => response.libraryStaff)?.catch(() => null);
            }

            async getLibraryStaffList(params: IRepositoryParams<QueryLibraryStaffListArgs>): Promise<LibraryStaffListResponse> {
                return this.http.requestGraphQL<{
                    libraryStaffsList: LibraryStaffListResponse
                }>({
                    url: Environment.BACKEND_API_URL,
                    requestDocument:
                        gql`
                            query GET_LIBRARYSTAFF (
                                  $first: Int
                                  $skip: Int
                                  $filter: LibraryStaffFilter
                                  $sort: [LibraryStaffSort!]
                            ) {
                                libraryStaffsList (
                                  first: $first
                                  skip: $skip
                                  filter: $filter
                                  sort: $sort
                                ) {
                                    items {
                                        id
createdAt
updatedAt

position
                                    }
                                    count
                            }
                        }
                      `,
                      token: params.token,
                    variables: params.variables,
                })
                ?.then((response) => response.libraryStaffsList);
            }

            
                    async createLibraryStaff(params: IRepositoryParams<MutationLibraryStaffCreateArgs>): Promise<LibraryStaff | null> {
                        return this.http.requestGraphQL<{
                          libraryStaffCreate: LibraryStaff
                        }>({
                            url: Environment.BACKEND_API_URL,
                            requestDocument:
                                gql`
                                    mutation CREATE_LIBRARYSTAFF (
                                      $data: LibraryStaffCreateInput!
                                    ) {
                                         libraryStaffCreate (
                                          data: $data
                                        ) {
                                            id
                                        }
                                    }
                                `,
                            token: params.token,
                            variables: params.variables,
                        })?.then((response) => response.libraryStaffCreate)?.catch(() => null);
                  }
                

                    async deleteLibraryStaff(params: IRepositoryParams<MutationLibraryStaffDeleteArgs>): Promise<SuccessResponse | null> {
                        return this.http.requestGraphQL<SuccessResponse>({
                            url: Environment.BACKEND_API_URL,
                            requestDocument:
                                gql`
                                    mutation DELETE_LIBRARYSTAFF (
                                      $data: LibraryStaffDeleteInput!
                                      $filter: LibraryStaffKeyFilter
                                      $force: Boolean
                                    ) {
                                        libraryStaffDelete (
                                          data: $data
                                          filter: $filter
                                          force: $force
                                        ) {
                                            success
                                        }
                                    }
                                `,
                            token: params.token,
                            variables: params.variables,
                        })?.catch(() => null);
                }
                  

                    async updateLibraryStaff(params: IRepositoryParams<MutationLibraryStaffUpdateArgs>): Promise<LibraryStaff | null> {
                        return this.http.requestGraphQL<{
                          libraryStaffUpdate: LibraryStaff
                        }>({
                            url: Environment.BACKEND_API_URL,
                            requestDocument:
                                gql`
                                    mutation UPDATE_LIBRARYSTAFF (
                                      $data: LibraryStaffUpdateInput!
                                    ) {
                                         libraryStaffUpdate (
                                          data: $data
                                        ) {
                                            id
                                        }
                                    }
                                `,
                            token: params.token,
                            variables: params.variables,
                        })?.then((response) => response.libraryStaffUpdate)?.catch(() => null);
                  }
                

            
        }
      