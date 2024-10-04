
          import { IEventEntity,  } from './interfaces';
          import {
            
            Event as GQLEvent } from '../../definitions/schema';
          

          export class EventEntity implements IEventEntity {
                private readonly _id?: string;
private readonly _createdAt?: string;
private readonly _updatedAt?: string;
private readonly _title?: string;
private readonly _description?: string;
private readonly _event_date?: string;
private readonly _location?: string;

                  constructor(data: GQLEvent | null) {
                      this._id = data?.id || undefined;
this._createdAt = data?.createdAt || undefined;
this._updatedAt = data?.updatedAt || undefined;
this._title = data?.title || undefined;
this._description = data?.description || undefined;
this._event_date = data?.event_date || undefined;
this._location = data?.location || undefined;
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
                      

                          get Description(): string | undefined {
                              return this._description;
                    }
                      

                          get EventDate(): string | undefined {
                              return this._event_date;
                    }
                      

                          get Location(): string | undefined {
                              return this._location;
                    }
                      
          }
      