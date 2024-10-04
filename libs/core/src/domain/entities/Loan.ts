
          import { ILoanEntity,  } from './interfaces';
          import {
            
            Loan as GQLLoan } from '../../definitions/schema';
          

          export class LoanEntity implements ILoanEntity {
                private readonly _id?: string;
private readonly _createdAt?: string;
private readonly _updatedAt?: string;


private readonly _due_date?: string;
private readonly _status?: string;

                  constructor(data: GQLLoan | null) {
                      this._id = data?.id || undefined;
this._createdAt = data?.createdAt || undefined;
this._updatedAt = data?.updatedAt || undefined;


this._due_date = data?.due_date || undefined;
this._status = data?.status || undefined;
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
                      



                          get DueDate(): string | undefined {
                              return this._due_date;
                    }
                      

                          get Status(): string | undefined {
                              return this._status;
                    }
                      
          }
      