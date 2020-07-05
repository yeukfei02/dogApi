import * as Koa from 'koa';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';

import * as userService from '../service/user';

export const signup = async (ctx: Koa.Context, next: () => Promise<any>) => {
  const email = ctx.request.body.email;
  const password = bcrypt.hashSync(ctx.request.body.password, 10);

  if (email && password) {
    const record = await userService.getUserByEmail(email);
    if (!record) {
      await userService.createUser(email, password);

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
    const user = await userService.getUserByEmail(email);
    if (user) {
      const userPasswordFromDB = user.password;

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
    } else {
      ctx.response.status = 400;
      ctx.body = {
        message: 'login error, no user found',
      };
    }
  }
};

export const getAllUser = async (ctx: Koa.Context, next: () => Promise<any>) => {
  const userList = await userService.getAllUser();

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
  const id = parseInt(ctx.params.id, 10);
  const user = await userService.getUserById(id);

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
