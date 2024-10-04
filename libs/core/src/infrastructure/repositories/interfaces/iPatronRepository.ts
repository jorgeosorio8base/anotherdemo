
        import {
            Patron,
            QueryPatronArgs,
            QueryPatronsListArgs,
            PatronListResponse,
            MutationPatronCreateArgs, MutationPatronDeleteArgs, MutationPatronUpdateArgs,
            SuccessResponse,
            
        } from '../../../definitions/schema';
        import {IRepositoryParams} from './iRepositoryParams';

        export interface IPatronRepository {
            getPatron(params: IRepositoryParams<QueryPatronArgs>): Promise<Patron | null>;
            getPatronsList(params: IRepositoryParams<QueryPatronsListArgs>): Promise<PatronListResponse>;
            createPatron(params: IRepositoryParams<MutationPatronCreateArgs>): Promise<Patron | null>;
deletePatron(params: IRepositoryParams<MutationPatronDeleteArgs>): Promise<SuccessResponse | null>;
updatePatron(params: IRepositoryParams<MutationPatronUpdateArgs>): Promise<Patron | null>;
            
          }
    