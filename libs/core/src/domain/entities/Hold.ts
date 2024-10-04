
          import { IHoldEntity,  } from './interfaces';
          import {
            
            Hold as GQLHold } from '../../definitions/schema';
          

          export class HoldEntity implements IHoldEntity {
                private readonly _id?: string;
private readonly _createdAt?: string;
private readonly _updatedAt?: string;


private readonly _position_in_queue?: number;

                  constructor(data: GQLHold | null) {
                      this._id = data?.id || undefined;
this._createdAt = data?.createdAt || undefined;
this._updatedAt = data?.updatedAt || undefined;


this._position_in_queue = data?.position_in_queue || undefined;
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
                      



                          get PositionInQueue(): number | undefined {
                              return this._position_in_queue;
                    }
                      
          }
      