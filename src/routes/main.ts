import Router from 'koa-router';

const router = new Router();

import { getMain } from '../controller/main';

router.get('/', getMain);

export default router;
