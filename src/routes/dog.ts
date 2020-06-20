import * as Router from 'koa-router';

const router = new Router();

import * as dogController from '../controller/dog';

router.get('/api/dog/breeds/:dogUserId', dogController.getAllBreeds);
router.get('/api/dog/images/:dogUserId', dogController.getAllDogImages);

export default router;
