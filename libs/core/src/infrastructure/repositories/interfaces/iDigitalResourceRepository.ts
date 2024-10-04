
        import {
            DigitalResource,
            QueryDigitalResourceArgs,
            QueryDigitalResourcesListArgs,
            DigitalResourceListResponse,
            MutationDigitalResourceCreateArgs, MutationDigitalResourceDeleteArgs, MutationDigitalResourceUpdateArgs,
            SuccessResponse,
            
        } from '../../../definitions/schema';
        import {IRepositoryParams} from './iRepositoryParams';

        export interface IDigitalResourceRepository {
            getDigitalResource(params: IRepositoryParams<QueryDigitalResourceArgs>): Promise<DigitalResource | null>;
            getDigitalResourcesList(params: IRepositoryParams<QueryDigitalResourcesListArgs>): Promise<DigitalResourceListResponse>;
            createDigitalResource(params: IRepositoryParams<MutationDigitalResourceCreateArgs>): Promise<DigitalResource | null>;
deleteDigitalResource(params: IRepositoryParams<MutationDigitalResourceDeleteArgs>): Promise<SuccessResponse | null>;
updateDigitalResource(params: IRepositoryParams<MutationDigitalResourceUpdateArgs>): Promise<DigitalResource | null>;
            
          }
    