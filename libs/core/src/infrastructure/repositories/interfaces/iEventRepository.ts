
        import {
            Event,
            QueryEventArgs,
            QueryEventsListArgs,
            EventListResponse,
            MutationEventCreateArgs, MutationEventDeleteArgs, MutationEventUpdateArgs,
            SuccessResponse,
            
        } from '../../../definitions/schema';
        import {IRepositoryParams} from './iRepositoryParams';

        export interface IEventRepository {
            getEvent(params: IRepositoryParams<QueryEventArgs>): Promise<Event | null>;
            getEventsList(params: IRepositoryParams<QueryEventsListArgs>): Promise<EventListResponse>;
            createEvent(params: IRepositoryParams<MutationEventCreateArgs>): Promise<Event | null>;
deleteEvent(params: IRepositoryParams<MutationEventDeleteArgs>): Promise<SuccessResponse | null>;
updateEvent(params: IRepositoryParams<MutationEventUpdateArgs>): Promise<Event | null>;
            
          }
    