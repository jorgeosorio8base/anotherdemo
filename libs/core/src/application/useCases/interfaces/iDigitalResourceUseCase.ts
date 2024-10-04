
        import {
            QueryDigitalResourceArgs,
            QueryDigitalResourcesListArgs,
            MutationDigitalResourceCreateArgs, MutationDigitalResourceDeleteArgs, MutationDigitalResourceUpdateArgs,
            
        } from '../../../definitions/schema';
        import {DigitalResourceEntity } from '../../../domain';
        import {IRepositoryParams} from '../../../infrastructure';

        export interface IDigitalResourceUseCase {
            getDigitalResource(params: IRepositoryParams<QueryDigitalResourceArgs>): Promise<DigitalResourceEntity | null>;
            getDigitalResourceList(params: IRepositoryParams<QueryDigitalResourcesListArgs>): Promise<{
                count: number;
                items: Array<DigitalResourceEntity>;
            }>;
            createDigitalResource(params: IRepositoryParams<MutationDigitalResourceCreateArgs>): Promise<boolean>;
deleteDigitalResource(params: IRepositoryParams<MutationDigitalResourceDeleteArgs>): Promise<boolean>;
updateDigitalResource(params: IRepositoryParams<MutationDigitalResourceUpdateArgs>): Promise<boolean>;
              
        }
    