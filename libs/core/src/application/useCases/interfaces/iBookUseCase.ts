
        import {
            QueryBookArgs,
            QueryBooksListArgs,
            MutationBookCreateArgs, MutationBookDeleteArgs, MutationBookUpdateArgs,
            
        } from '../../../definitions/schema';
        import {BookEntity } from '../../../domain';
        import {IRepositoryParams} from '../../../infrastructure';

        export interface IBookUseCase {
            getBook(params: IRepositoryParams<QueryBookArgs>): Promise<BookEntity | null>;
            getBookList(params: IRepositoryParams<QueryBooksListArgs>): Promise<{
                count: number;
                items: Array<BookEntity>;
            }>;
            createBook(params: IRepositoryParams<MutationBookCreateArgs>): Promise<boolean>;
deleteBook(params: IRepositoryParams<MutationBookDeleteArgs>): Promise<boolean>;
updateBook(params: IRepositoryParams<MutationBookUpdateArgs>): Promise<boolean>;
              
        }
    