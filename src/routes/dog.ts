import Router from 'koa-router';

const router = new Router();

import { getAllBreeds, getAllDogImages } from '../controller/dog';

import { isUserLoggedIn } from '../middleware/middleware';

router.get('/api/dog/breeds/:dogUserId', isUserLoggedIn, getAllBreeds);
router.get('/api/dog/images/:dogUserId', isUserLoggedIn, getAllDogImages);

export default router;
