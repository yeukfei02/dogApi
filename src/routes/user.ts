import Router from 'koa-router';

const router = new Router();

import { signup, login, getAllUser, getUserById } from '../controller/user';

import { isUserLoggedIn } from '../middleware/middleware';

router.post('/api/user/signup', signup);
router.post('/api/user/login', login);
router.get('/api/user', isUserLoggedIn, getAllUser);
router.get('/api/user/:id', isUserLoggedIn, getUserById);

export default router;
