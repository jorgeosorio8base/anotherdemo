
        import {
            QueryHoldArgs,
            QueryHoldsListArgs,
            MutationHoldCreateArgs, MutationHoldDeleteArgs, MutationHoldUpdateArgs,
            
        } from '../../../definitions/schema';
        import {HoldEntity } from '../../../domain';
        import {IRepositoryParams} from '../../../infrastructure';

        export interface IHoldUseCase {
            getHold(params: IRepositoryParams<QueryHoldArgs>): Promise<HoldEntity | null>;
            getHoldList(params: IRepositoryParams<QueryHoldsListArgs>): Promise<{
                count: number;
                items: Array<HoldEntity>;
            }>;
            createHold(params: IRepositoryParams<MutationHoldCreateArgs>): Promise<boolean>;
deleteHold(params: IRepositoryParams<MutationHoldDeleteArgs>): Promise<boolean>;
updateHold(params: IRepositoryParams<MutationHoldUpdateArgs>): Promise<boolean>;
              
        }
    