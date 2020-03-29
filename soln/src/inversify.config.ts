import {Container} from 'inversify';
import { interfaces, TYPE } from 'inversify-express-utils';

const container = new Container();

// container.bind<PostRepositoryImpl>(TYPES.PostRepositoryImpl ).to(PostRepositoryImpl).inSingletonScope();

export default container;