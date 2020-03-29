import {Container} from 'inversify';
import { interfaces, TYPE } from 'inversify-express-utils';
import { VendorService } from './application/services/vendorService';
import { Vendor } from './domain/vendor/vendor';
import { TYPES } from './infrastructure/types';

const container = new Container();

container.bind<VendorService>(TYPES.VENDOR_SERVICE).to(VendorService);

export { container };