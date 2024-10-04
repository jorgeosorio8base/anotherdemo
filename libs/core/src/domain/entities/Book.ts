
          import { IBookEntity,  } from './interfaces';
          import {
            
            Book as GQLBook } from '../../definitions/schema';
          

          export class BookEntity implements IBookEntity {
                private readonly _id?: string;
private readonly _createdAt?: string;
private readonly _updatedAt?: string;
private readonly _title?: string;
private readonly _author?: string;
private readonly _isbn?: string;
private readonly _publication_date?: string;
private readonly _genre?: string;
private readonly _availability_status?: string;





                  constructor(data: GQLBook | null) {
                      this._id = data?.id || undefined;
this._createdAt = data?.createdAt || undefined;
this._updatedAt = data?.updatedAt || undefined;
this._title = data?.title || undefined;
this._author = data?.author || undefined;
this._isbn = data?.isbn || undefined;
this._publication_date = data?.publication_date || undefined;
this._genre = data?.genre || undefined;
this._availability_status = data?.availability_status || undefined;




                  }

                  
                          get Id(): string | undefined {
                              return this._id;
                    }
                      

                          get CreatedAt(): string | undefined {
                              return this._createdAt;
                    }
                      

                          get UpdatedAt(): string | undefined {
                              return this._updatedAt;
                    }
                      

                          get Title(): string | undefined {
                              return this._title;
                    }
                      

                          get Author(): string | undefined {
                              return this._author;
                    }
                      

                          get Isbn(): string | undefined {
                              return this._isbn;
                    }
                      

                          get PublicationDate(): string | undefined {
                              return this._publication_date;
                    }
                      

                          get Genre(): string | undefined {
                              return this._genre;
                    }
                      

                          get AvailabilityStatus(): string | undefined {
                              return this._availability_status;
                    }
                      




          }
      