
        import {
            QueryEventArgs,
            QueryEventsListArgs,
            MutationEventCreateArgs, MutationEventDeleteArgs, MutationEventUpdateArgs,
            
        } from '../../../definitions/schema';
        import {EventEntity } from '../../../domain';
        import {IRepositoryParams} from '../../../infrastructure';

        export interface IEventUseCase {
            getEvent(params: IRepositoryParams<QueryEventArgs>): Promise<EventEntity | null>;
            getEventList(params: IRepositoryParams<QueryEventsListArgs>): Promise<{
                count: number;
                items: Array<EventEntity>;
            }>;
            createEvent(params: IRepositoryParams<MutationEventCreateArgs>): Promise<boolean>;
deleteEvent(params: IRepositoryParams<MutationEventDeleteArgs>): Promise<boolean>;
updateEvent(params: IRepositoryParams<MutationEventUpdateArgs>): Promise<boolean>;
              
        }
    