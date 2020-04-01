import { injectable, inject } from 'inversify';
import { TYPES } from '../../types';
import { Vendor } from '../model/vendor';
import { Repository as TypeOrmRepository } from "typeorm";


@injectable()
export class VendorSqlRepository {
    // eslint-disable-next-line no-useless-constructor
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(
        @inject(TYPES.VendorReposiotry) repository: TypeOrmRepository<Vendor>,
    ) {
    }
}
