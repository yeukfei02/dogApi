import * as Koa from 'koa';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';

import * as userModel from '../model/dogUser';

export const signup = async (ctx: Koa.Context, next: () => Promise<any>) => {
  const email = ctx.request.body.email;
  const password = bcrypt.hashSync(ctx.request.body.password, 10);

  if (email && password) {
    const record = await userModel.getUserByEmail(email);
    console.log('record = ', record);
    if (record.length === 0) {
      await userModel.createUser(email, password);

      ctx.response.status = 201;
      ctx.body = {
        message: 'signup',
      };
    } else {
      ctx.response.status = 400;
      ctx.body = {
        message: 'signup error, email already exists',
      };
    }
  }
};

export const login = async (ctx: Koa.Context, next: () => Promise<any>) => {
  const email = ctx.request.body.email;
  const password = ctx.request.body.password;

  if (email && password) {
    const user = await userModel.getUserByEmail(email);
    const userPasswordFromDB = user[0].password;

    if (bcrypt.compareSync(password, userPasswordFromDB)) {
      const token = jwt.sign(
        {
          id: uuidv4(),
        },
        process.env.JWT_SECRET,
        { expiresIn: '1d' },
      );

      ctx.response.status = 200;
      ctx.body = {
        message: 'login',
        token: token,
      };
    } else {
      ctx.response.status = 400;
      ctx.body = {
        message: 'login error, wrong password',
      };
    }
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
    users: result,
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
    user: result,
  };
};
