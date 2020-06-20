import * as Koa from 'koa';
import axios from 'axios';

import * as dogModel from '../model/dog';

import { checkUserLogin } from '../common/common';

const ROOT_URL = `https://api.thedogapi.com/v1/`;

async function getAllBreedsRequest(limit: number, page: number) {
  let data: any = {
    headers: {
      'x-api-key': process.env.DOG_API_API_KEY,
    },
  };

  if (limit && page) {
    data = {
      params: {
        limit: limit,
        page: page,
      },
      headers: {
        'x-api-key': process.env.DOG_API_API_KEY,
      },
    };
  }

  const response = await axios.get(`${ROOT_URL}/breeds`, data);
  return response.data;
}

async function getAllDogImagesRequest(limit: number, page: number) {
  let data: any = {
    headers: {
      'x-api-key': process.env.DOG_API_API_KEY,
    },
  };

  if (limit && page) {
    data = {
      params: {
        limit: limit,
        page: page,
      },
      headers: {
        'x-api-key': process.env.DOG_API_API_KEY,
      },
    };
  }

  const response = await axios.get(`${ROOT_URL}/images/search`, data);
  return response.data;
}

export const getAllBreeds = async (ctx: Koa.Context, next: () => Promise<any>) => {
  const userLoginStatus = await checkUserLogin(ctx);

  if (userLoginStatus) {
    const limit = ctx.request.query.limit;
    const page = ctx.request.query.page;

    const result = await getAllBreedsRequest(limit, page);
    if (result) {
      result.forEach(async (item: any, i: number) => {
        const existingBreeds = await dogModel.getBreedsByName(item.name);
        if (existingBreeds.length === 0) {
          await dogModel.createDog(item);
        }
      });

      ctx.response.status = 200;
      ctx.response.body = {
        message: `get dog breeds`,
        result: result,
      };
    }
  } else {
    ctx.response.status = 400;
    ctx.response.body = {
      message: `bearer token wrong or missing`,
    };
  }
};

export const getAllDogImages = async (ctx: Koa.Context, next: () => Promise<any>) => {
  const userLoginStatus = await checkUserLogin(ctx);

  if (userLoginStatus) {
    const limit = ctx.request.query.limit;
    const page = ctx.request.query.page;

    const result = await getAllDogImagesRequest(limit, page);
    if (result) {
      result.forEach(async (item: any, i: number) => {
        await dogModel.createDogImages(item);
      });

      const formattedResult = result.map((item: any, i: number) => {
        const obj = {
          width: item.width,
          height: item.height,
          url: item.url,
        };
        return obj;
      });

      ctx.response.status = 200;
      ctx.response.body = {
        message: `get dog images`,
        result: formattedResult,
      };
    }
  } else {
    ctx.response.status = 400;
    ctx.response.body = {
      message: `bearer token wrong or missing`,
    };
  }
};
