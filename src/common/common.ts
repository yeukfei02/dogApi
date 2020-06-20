import * as Koa from 'koa';
import * as jwt from 'jsonwebtoken';

export const checkUserLogin = async (ctx: Koa.Context) => {
  let result = false;

  const token = ctx.request.headers.authorization.substring(7);
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded) {
      result = true;
    }
  } catch (e) {
    ctx.response.status = 400;
    ctx.response.body = {
      message: `checkUserLogin error, error = ${e.message}`,
    };
  }

  return result;
};
