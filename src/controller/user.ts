import Koa, { Next } from 'koa';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';

import {
  getUserByEmail,
  createUser,
  getAllUser as getAllUserService,
  getUserById as getUserByIdService,
} from '../service/user';

export const signup = async (ctx: Koa.Context, next: Next): Promise<void> => {
  const email = ctx.request.body.email;
  const password = bcrypt.hashSync(ctx.request.body.password, 10);

  if (email && password) {
    const record = await getUserByEmail(email);
    if (!record) {
      await createUser(email, password);

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

export const login = async (ctx: Koa.Context, next: Next): Promise<void> => {
  const email = ctx.request.body.email;
  const password = ctx.request.body.password;

  if (email && password) {
    const user = await getUserByEmail(email);
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

export const getAllUser = async (ctx: Koa.Context, next: Next): Promise<void> => {
  const userList = await getAllUserService();

  let result: any[] = [];
  if (userList) {
    result = userList;
  }

  ctx.response.status = 200;
  ctx.body = {
    message: 'get users',
    users: result,
  };
};

export const getUserById = async (ctx: Koa.Context, next: Next): Promise<void> => {
  const id = parseInt(ctx.params.id, 10);
  const user = await getUserByIdService(id);

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
