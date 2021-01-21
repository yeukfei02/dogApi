import combineRouters from 'koa-combine-routers';

import mainRoutes from '../routes/main';
import userRoutes from '../routes/user';
import dogRoutes from '../routes/dog';

const router = combineRouters(mainRoutes, userRoutes, dogRoutes);

export default router;
