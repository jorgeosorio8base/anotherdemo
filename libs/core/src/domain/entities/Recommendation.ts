
          import { IRecommendationEntity,  } from './interfaces';
          import {
            
            Recommendation as GQLRecommendation } from '../../definitions/schema';
          

          export class RecommendationEntity implements IRecommendationEntity {
                private readonly _id?: string;
private readonly _createdAt?: string;
private readonly _updatedAt?: string;


private readonly _reason?: string;

                  constructor(data: GQLRecommendation | null) {
                      this._id = data?.id || undefined;
this._createdAt = data?.createdAt || undefined;
this._updatedAt = data?.updatedAt || undefined;


this._reason = data?.reason || undefined;
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
                      



                          get Reason(): string | undefined {
                              return this._reason;
                    }
                      
          }
      