import { injectable, inject } from 'inversify';
import { TYPES } from '../../types';
import { Vendor } from '../model/vendor';
import { Repository as TypeOrmRepository } from "typeorm";
import { getManager } from "typeorm";
import { Entity } from '../../../domain/tatical-patterns/entity';
import {Vendor as VendorEntity} from '../model/vendor';

export interface IVendorRespository {
    findVendor(): Promise<VendorEntity[]>;
    insert(): void;
}

@injectable()
export class VendorRespository implements IVendorRespository {
    // eslint-disable-next-line no-useless-constructor
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
   

    findVendor(): Promise<VendorEntity[]> {
        return getManager().getRepository(VendorEntity).find();
    }
    
    insert(): void {

        console.log('Inserting a value to Vendor Table');
        try {
            let v: VendorEntity =  new VendorEntity()
            v.vendorName='krishna';
            v.nationallyManaged = 'y';
            v.auditCreatedDateTime =  new Date();
            v.auditCreatedBy = 'kumaran';

        let emp = getManager().save(v);
        console.log(emp)
        }catch(ex) { 
            console.log("Excpetion is => ", ex);
        }
        
    }
}


