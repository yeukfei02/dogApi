import Router from 'koa-router';

const router = new Router();

import * as dogController from '../controller/dog';

import { isUserLoggedIn } from '../middleware/middleware';

router.get('/api/dog/breeds/:dogUserId', isUserLoggedIn, dogController.getAllBreeds);
router.get('/api/dog/images/:dogUserId', isUserLoggedIn, dogController.getAllDogImages);

export default router;
