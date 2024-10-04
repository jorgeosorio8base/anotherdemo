
          import { ILibraryStaffEntity,  } from './interfaces';
          import {
            
            LibraryStaff as GQLLibraryStaff } from '../../definitions/schema';
          

          export class LibraryStaffEntity implements ILibraryStaffEntity {
                private readonly _id?: string;
private readonly _createdAt?: string;
private readonly _updatedAt?: string;

private readonly _position?: string;

                  constructor(data: GQLLibraryStaff | null) {
                      this._id = data?.id || undefined;
this._createdAt = data?.createdAt || undefined;
this._updatedAt = data?.updatedAt || undefined;

this._position = data?.position || undefined;
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
                      


                          get Position(): string | undefined {
                              return this._position;
                    }
                      
          }
      