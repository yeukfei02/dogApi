import Koa, { Next } from 'koa';

export const getMain = async (ctx: Koa.Context, next: Next): Promise<void> => {
  ctx.response.status = 200;
  ctx.body = {
    message: 'dogApi',
  };
};
