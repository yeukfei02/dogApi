import Router from 'koa-router';

const router = new Router();

import * as userController from '../controller/user';

import { isUserLoggedIn } from '../middleware/middleware';

router.post('/api/user/signup', userController.signup);
router.post('/api/user/login', userController.login);
router.get('/api/user', isUserLoggedIn, userController.getAllUser);
router.get('/api/user/:id', isUserLoggedIn, userController.getUserById);

export default router;
