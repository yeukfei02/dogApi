import Koa from 'koa';
import jwt from 'jsonwebtoken';

export const isUserLoggedIn = async (ctx: Koa.Context, next: () => Promise<any>): Promise<void> => {
  let token = '';
  if (ctx.request.headers.authorization) {
    token = ctx.request.headers.authorization.substring(7);
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded) {
      await next();
    }
  } catch (e) {
    ctx.response.status = 400;
    ctx.response.body = {
      message: `isUserLoggedIn error, error = ${e.message}`,
    };
  }
};
