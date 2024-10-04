
          import { IPatronEntity,  } from './interfaces';
          import {
            
            Patron as GQLPatron } from '../../definitions/schema';
          

          export class PatronEntity implements IPatronEntity {
                private readonly _id?: string;
private readonly _createdAt?: string;
private readonly _updatedAt?: string;

private readonly _membership_status?: string;
private readonly _borrowing_history?: Record<string, any>;





                  constructor(data: GQLPatron | null) {
                      this._id = data?.id || undefined;
this._createdAt = data?.createdAt || undefined;
this._updatedAt = data?.updatedAt || undefined;

this._membership_status = data?.membership_status || undefined;
this._borrowing_history = data?.borrowing_history || undefined;




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
                      


                          get MembershipStatus(): string | undefined {
                              return this._membership_status;
                    }
                      

                          get BorrowingHistory(): Record<string, any> | undefined {
                              return this._borrowing_history;
                    }
                      




          }
      