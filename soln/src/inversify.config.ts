import {Container} from 'inversify';
import { interfaces, TYPE } from 'inversify-express-utils';
import { VendorService } from './application/services/vendorService';
import { Vendor } from './domain/vendor/vendor';
import { TYPES } from './infrastructure/types';
import { VendorRespository } from './infrastructure/persistance/repositories/vendorRespository';
import {IVendorService} from './application/services/IVendorService'
import {IVendorRespository} from './infrastructure/persistance/repositories/vendorRespository'

const container = new Container();

container.bind<IVendorService>(TYPES.VENDOR_SERVICE).to(VendorService);
container.bind<IVendorRespository>(TYPES.VENDOR_RESPOSITORY).to(VendorRespository);

const venService = container.get<IVendorService>(TYPES.VENDOR_SERVICE);
const venRepository = container.get<IVendorRespository>(TYPES.VENDOR_RESPOSITORY);


export { container };