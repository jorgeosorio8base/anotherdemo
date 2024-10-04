
        import {IBookUseCase} from './interfaces';
        import {BookEntity} from '../../domain';
        import {
            QueryBookArgs,
            QueryBooksListArgs,
            MutationBookCreateArgs, MutationBookDeleteArgs, MutationBookUpdateArgs,
            
        } from '../../definitions/schema';
        import {IBookRepository, BookRepository, IRepositoryParams} from '../../infrastructure';

        export class BookUseCase implements IBookUseCase {
              private readonly repository: IBookRepository;
              private readonly errorCatcher: (error: unknown, methodName: string) => never;

              constructor() {
                    this.repository = new BookRepository();
                    this.errorCatcher = (
                      error: unknown,
                      methodName: string,
                    ) => {
                        if (error instanceof Error) {
                            throw new Error(error.message);
                        }
                        
                        if (typeof error === 'string') {
                            throw new Error(error);
                        }

                        throw new Error(`An error occurred trying to ${methodName}`);
                    };
              }

            async getBook(params: IRepositoryParams<QueryBookArgs>): Promise<BookEntity | null> {
                        try {
                            return this.repository.getBook(params)
                            .then((result) => new BookEntity(result))
                            .catch((err) => this.errorCatcher(err, 'getBook'));
                        } catch (error) {
                            this.errorCatcher(error, 'getBook');
                        }
            }

            async getBookList(params: IRepositoryParams<QueryBooksListArgs>): Promise<{
                count: number;
                items: Array<BookEntity>;
                }> {
                try {
                    return this.repository.getBooksList(params)
                    .then((result) => {
                        return {
                            count: result?.count || 0,
                            items: result?.items?.map((item) => new BookEntity(item)) || [],
                        };
                    })
                    .catch((err) => this.errorCatcher(err, 'getBooksList'));
                } catch (error) {
                    this.errorCatcher(error, 'getBooksList');
                }
            }

            async createBook(params: IRepositoryParams<MutationBookCreateArgs>): Promise<boolean> {
                        try {
                            return this.repository.createBook(params)
                            .then((result) => !!result?.id)
                            .catch((err) => this.errorCatcher(err, 'createBook'));
                        } catch (error) {
                            this.errorCatcher(error, 'createBook');
                        }
                    }

                    async deleteBook(params: IRepositoryParams<MutationBookDeleteArgs>): Promise<boolean> {
                        try {
                            return this.repository.deleteBook(params)
                            .then((result) => !!result?.success)
                            .catch((err) => this.errorCatcher(err, 'deleteBook'));
                        } catch (error) {
                            this.errorCatcher(error, 'deleteBook');
                        }
                    }
                  
async updateBook(params: IRepositoryParams<MutationBookUpdateArgs>): Promise<boolean> {
                        try {
                            return this.repository.updateBook(params)
                            .then((result) => !!result?.id)
                            .catch((err) => this.errorCatcher(err, 'updateBook'));
                        } catch (error) {
                            this.errorCatcher(error, 'updateBook');
                        }
                    }

              
            }
    