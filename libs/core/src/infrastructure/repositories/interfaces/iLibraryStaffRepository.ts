
        import {
            LibraryStaff,
            QueryLibraryStaffArgs,
            QueryLibraryStaffListArgs,
            LibraryStaffListResponse,
            MutationLibraryStaffCreateArgs, MutationLibraryStaffDeleteArgs, MutationLibraryStaffUpdateArgs,
            SuccessResponse,
            
        } from '../../../definitions/schema';
        import {IRepositoryParams} from './iRepositoryParams';

        export interface ILibraryStaffRepository {
            getLibraryStaff(params: IRepositoryParams<QueryLibraryStaffArgs>): Promise<LibraryStaff | null>;
            getLibraryStaffList(params: IRepositoryParams<QueryLibraryStaffListArgs>): Promise<LibraryStaffListResponse>;
            createLibraryStaff(params: IRepositoryParams<MutationLibraryStaffCreateArgs>): Promise<LibraryStaff | null>;
deleteLibraryStaff(params: IRepositoryParams<MutationLibraryStaffDeleteArgs>): Promise<SuccessResponse | null>;
updateLibraryStaff(params: IRepositoryParams<MutationLibraryStaffUpdateArgs>): Promise<LibraryStaff | null>;
            
          }
    