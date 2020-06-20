import * as Koa from 'koa';

export const getMain = async (ctx: Koa.Context, next: () => Promise<any>) => {
  ctx.response.status = 200;
  ctx.body = {
    message: 'dogApi',
  };
  await next();
};
