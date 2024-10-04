
        import {IEventUseCase} from './interfaces';
        import {EventEntity} from '../../domain';
        import {
            QueryEventArgs,
            QueryEventsListArgs,
            MutationEventCreateArgs, MutationEventDeleteArgs, MutationEventUpdateArgs,
            
        } from '../../definitions/schema';
        import {IEventRepository, EventRepository, IRepositoryParams} from '../../infrastructure';

        export class EventUseCase implements IEventUseCase {
              private readonly repository: IEventRepository;
              private readonly errorCatcher: (error: unknown, methodName: string) => never;

              constructor() {
                    this.repository = new EventRepository();
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

            async getEvent(params: IRepositoryParams<QueryEventArgs>): Promise<EventEntity | null> {
                        try {
                            return this.repository.getEvent(params)
                            .then((result) => new EventEntity(result))
                            .catch((err) => this.errorCatcher(err, 'getEvent'));
                        } catch (error) {
                            this.errorCatcher(error, 'getEvent');
                        }
            }

            async getEventList(params: IRepositoryParams<QueryEventsListArgs>): Promise<{
                count: number;
                items: Array<EventEntity>;
                }> {
                try {
                    return this.repository.getEventsList(params)
                    .then((result) => {
                        return {
                            count: result?.count || 0,
                            items: result?.items?.map((item) => new EventEntity(item)) || [],
                        };
                    })
                    .catch((err) => this.errorCatcher(err, 'getEventsList'));
                } catch (error) {
                    this.errorCatcher(error, 'getEventsList');
                }
            }

            async createEvent(params: IRepositoryParams<MutationEventCreateArgs>): Promise<boolean> {
                        try {
                            return this.repository.createEvent(params)
                            .then((result) => !!result?.id)
                            .catch((err) => this.errorCatcher(err, 'createEvent'));
                        } catch (error) {
                            this.errorCatcher(error, 'createEvent');
                        }
                    }

                    async deleteEvent(params: IRepositoryParams<MutationEventDeleteArgs>): Promise<boolean> {
                        try {
                            return this.repository.deleteEvent(params)
                            .then((result) => !!result?.success)
                            .catch((err) => this.errorCatcher(err, 'deleteEvent'));
                        } catch (error) {
                            this.errorCatcher(error, 'deleteEvent');
                        }
                    }
                  
async updateEvent(params: IRepositoryParams<MutationEventUpdateArgs>): Promise<boolean> {
                        try {
                            return this.repository.updateEvent(params)
                            .then((result) => !!result?.id)
                            .catch((err) => this.errorCatcher(err, 'updateEvent'));
                        } catch (error) {
                            this.errorCatcher(error, 'updateEvent');
                        }
                    }

              
            }
    