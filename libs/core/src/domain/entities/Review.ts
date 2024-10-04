
          import { IReviewEntity,  } from './interfaces';
          import {
            
            Review as GQLReview } from '../../definitions/schema';
          

          export class ReviewEntity implements IReviewEntity {
                private readonly _id?: string;
private readonly _createdAt?: string;
private readonly _updatedAt?: string;


private readonly _rating?: number;
private readonly _comment?: string;

                  constructor(data: GQLReview | null) {
                      this._id = data?.id || undefined;
this._createdAt = data?.createdAt || undefined;
this._updatedAt = data?.updatedAt || undefined;


this._rating = data?.rating || undefined;
this._comment = data?.comment || undefined;
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
                      



                          get Rating(): number | undefined {
                              return this._rating;
                    }
                      

                          get Comment(): string | undefined {
                              return this._comment;
                    }
                      
          }
      