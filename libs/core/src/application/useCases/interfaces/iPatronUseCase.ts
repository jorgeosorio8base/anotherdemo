
        import {
            QueryPatronArgs,
            QueryPatronsListArgs,
            MutationPatronCreateArgs, MutationPatronDeleteArgs, MutationPatronUpdateArgs,
            
        } from '../../../definitions/schema';
        import {PatronEntity } from '../../../domain';
        import {IRepositoryParams} from '../../../infrastructure';

        export interface IPatronUseCase {
            getPatron(params: IRepositoryParams<QueryPatronArgs>): Promise<PatronEntity | null>;
            getPatronList(params: IRepositoryParams<QueryPatronsListArgs>): Promise<{
                count: number;
                items: Array<PatronEntity>;
            }>;
            createPatron(params: IRepositoryParams<MutationPatronCreateArgs>): Promise<boolean>;
deletePatron(params: IRepositoryParams<MutationPatronDeleteArgs>): Promise<boolean>;
updatePatron(params: IRepositoryParams<MutationPatronUpdateArgs>): Promise<boolean>;
              
        }
    