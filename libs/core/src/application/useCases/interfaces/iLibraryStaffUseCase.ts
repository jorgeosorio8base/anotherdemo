
        import {
            QueryLibraryStaffArgs,
            QueryLibraryStaffListArgs,
            MutationLibraryStaffCreateArgs, MutationLibraryStaffDeleteArgs, MutationLibraryStaffUpdateArgs,
            
        } from '../../../definitions/schema';
        import {LibraryStaffEntity } from '../../../domain';
        import {IRepositoryParams} from '../../../infrastructure';

        export interface ILibraryStaffUseCase {
            getLibraryStaff(params: IRepositoryParams<QueryLibraryStaffArgs>): Promise<LibraryStaffEntity | null>;
            getLibraryStaffList(params: IRepositoryParams<QueryLibraryStaffListArgs>): Promise<{
                count: number;
                items: Array<LibraryStaffEntity>;
            }>;
            createLibraryStaff(params: IRepositoryParams<MutationLibraryStaffCreateArgs>): Promise<boolean>;
deleteLibraryStaff(params: IRepositoryParams<MutationLibraryStaffDeleteArgs>): Promise<boolean>;
updateLibraryStaff(params: IRepositoryParams<MutationLibraryStaffUpdateArgs>): Promise<boolean>;
              
        }
    