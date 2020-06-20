import * as Router from 'koa-router';

const router = new Router();

import * as dogController from '../controller/dog';

router.get('/api/dog/breeds', dogController.getAllBreeds);
router.get('/api/dog/images', dogController.getAllDogImages);

export default router;
