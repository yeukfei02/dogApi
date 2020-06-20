import * as Koa from 'koa';

import * as userModel from '../model/user';

export const signup = async (ctx: Koa.Context, next: () => Promise<any>) => {
  const email = ctx.request.body.email;
  const password = ctx.request.body.password;

  if (email && password) {
    await userModel.createUser(email, password);

    ctx.response.status = 201;
    ctx.body = {
      message: 'signup',
    };
  }
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

export const getAllUser = async (ctx: Koa.Context, next: () => Promise<any>) => {
  const userList = await userModel.getAllUser();

  let result: any[] = [];
  if (userList) {
    result = userList;
  }

  ctx.response.status = 200;
  ctx.body = {
    message: 'get all user',
    users: result
  };
};

export const getUserById = async (ctx: Koa.Context, next: () => Promise<any>) => {
  const id = ctx.params.id;
  const user = await userModel.getUserById(id);

  let result = {};
  if (user) {
    result = user;
  }

  ctx.response.status = 200;
  ctx.body = {
    message: 'get user',
    user: result
  };
};