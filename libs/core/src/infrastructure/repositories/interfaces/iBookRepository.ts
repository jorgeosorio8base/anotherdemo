
        import {
            Book,
            QueryBookArgs,
            QueryBooksListArgs,
            BookListResponse,
            MutationBookCreateArgs, MutationBookDeleteArgs, MutationBookUpdateArgs,
            SuccessResponse,
            
        } from '../../../definitions/schema';
        import {IRepositoryParams} from './iRepositoryParams';

        export interface IBookRepository {
            getBook(params: IRepositoryParams<QueryBookArgs>): Promise<Book | null>;
            getBooksList(params: IRepositoryParams<QueryBooksListArgs>): Promise<BookListResponse>;
            createBook(params: IRepositoryParams<MutationBookCreateArgs>): Promise<Book | null>;
deleteBook(params: IRepositoryParams<MutationBookDeleteArgs>): Promise<SuccessResponse | null>;
updateBook(params: IRepositoryParams<MutationBookUpdateArgs>): Promise<Book | null>;
            
          }
    