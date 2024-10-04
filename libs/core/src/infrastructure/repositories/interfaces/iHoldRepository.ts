
        import {
            Hold,
            QueryHoldArgs,
            QueryHoldsListArgs,
            HoldListResponse,
            MutationHoldCreateArgs, MutationHoldDeleteArgs, MutationHoldUpdateArgs,
            SuccessResponse,
            
        } from '../../../definitions/schema';
        import {IRepositoryParams} from './iRepositoryParams';

        export interface IHoldRepository {
            getHold(params: IRepositoryParams<QueryHoldArgs>): Promise<Hold | null>;
            getHoldsList(params: IRepositoryParams<QueryHoldsListArgs>): Promise<HoldListResponse>;
            createHold(params: IRepositoryParams<MutationHoldCreateArgs>): Promise<Hold | null>;
deleteHold(params: IRepositoryParams<MutationHoldDeleteArgs>): Promise<SuccessResponse | null>;
updateHold(params: IRepositoryParams<MutationHoldUpdateArgs>): Promise<Hold | null>;
            
          }
    