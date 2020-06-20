import * as Koa from 'koa';

export const signup = async (ctx: Koa.Context, next: () => Promise<any>) => {
  const email = ctx.request.body.email;
  const password = ctx.request.body.password;

  if (email && password) {
    ctx.response.status = 200;
    ctx.body = {
      message: 'signup',
    };
  }

  await next();
};

export const login = async (ctx: Koa.Context, next: () => Promise<any>) => {
  const email = ctx.request.body.email;
  const password = ctx.request.body.password;

  if (email && password) {
    ctx.response.status = 200;
    ctx.body = {
      message: 'login',
    };
  }
};
