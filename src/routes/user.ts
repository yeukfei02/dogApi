import * as Router from 'koa-router';

const router = new Router();

import * as userController from '../controller/user';

router.post('/api/user/signup', userController.signup);
router.post('/api/user/login', userController.login);

export default router;
