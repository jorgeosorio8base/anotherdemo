
        import {IRepositoryParams, IBookRepository} from './interfaces';
        import {Http, IHttp} from '../http';
        import { gql } from 'graphql-request';
        import {Environment} from '../../environment';
        import {
            Book,
            QueryBookArgs,
            QueryBooksListArgs,
            BookListResponse,
            MutationBookCreateArgs, MutationBookDeleteArgs, MutationBookUpdateArgs,
            SuccessResponse,
            
        } from '../../definitions/schema';

        export class BookRepository implements IBookRepository {
            private readonly http: IHttp;

            constructor() {
                this.http = new Http();
            }

            async getBook(params: IRepositoryParams<QueryBookArgs>): Promise<Book | null> {
                return this.http.requestGraphQL<{
                    book: Book
                }>({
                    url: Environment.BACKEND_API_URL,
                    requestDocument:
                        gql`
                            query GET_BOOK(
                            $id: ID,$isbn: String
                        ) {
                            book(
                              id: $id,isbn: $isbn
                            ) {
                                id
createdAt
updatedAt
title
author
isbn
publication_date
genre
availability_status



    
                            }
                        }
                        `
                      ,
                      token: params.token,
                    variables: params.variables,
                })?.then((response) => response.book)?.catch(() => null);
            }

            async getBooksList(params: IRepositoryParams<QueryBooksListArgs>): Promise<BookListResponse> {
                return this.http.requestGraphQL<{
                    booksList: BookListResponse
                }>({
                    url: Environment.BACKEND_API_URL,
                    requestDocument:
                        gql`
                            query GET_BOOKS (
                                  $first: Int
                                  $skip: Int
                                  $filter: BookFilter
                                  $sort: [BookSort!]
                            ) {
                                booksList (
                                  first: $first
                                  skip: $skip
                                  filter: $filter
                                  sort: $sort
                                ) {
                                    items {
                                        id
createdAt
updatedAt
title
author
isbn
publication_date
genre
availability_status




                                    }
                                    count
                            }
                        }
                      `,
                      token: params.token,
                    variables: params.variables,
                })
                ?.then((response) => response.booksList);
            }

            
                    async createBook(params: IRepositoryParams<MutationBookCreateArgs>): Promise<Book | null> {
                        return this.http.requestGraphQL<{
                          bookCreate: Book
                        }>({
                            url: Environment.BACKEND_API_URL,
                            requestDocument:
                                gql`
                                    mutation CREATE_BOOK (
                                      $data: BookCreateInput!
                                    ) {
                                         bookCreate (
                                          data: $data
                                        ) {
                                            id
                                        }
                                    }
                                `,
                            token: params.token,
                            variables: params.variables,
                        })?.then((response) => response.bookCreate)?.catch(() => null);
                  }
                

                    async deleteBook(params: IRepositoryParams<MutationBookDeleteArgs>): Promise<SuccessResponse | null> {
                        return this.http.requestGraphQL<SuccessResponse>({
                            url: Environment.BACKEND_API_URL,
                            requestDocument:
                                gql`
                                    mutation DELETE_BOOK (
                                      $data: BookDeleteInput!
                                      $filter: BookKeyFilter
                                      $force: Boolean
                                    ) {
                                        bookDelete (
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
                  

                    async updateBook(params: IRepositoryParams<MutationBookUpdateArgs>): Promise<Book | null> {
                        return this.http.requestGraphQL<{
                          bookUpdate: Book
                        }>({
                            url: Environment.BACKEND_API_URL,
                            requestDocument:
                                gql`
                                    mutation UPDATE_BOOK (
                                      $data: BookUpdateInput!
                                    ) {
                                         bookUpdate (
                                          data: $data
                                        ) {
                                            id
                                        }
                                    }
                                `,
                            token: params.token,
                            variables: params.variables,
                        })?.then((response) => response.bookUpdate)?.catch(() => null);
                  }
                

            
        }
      