import Koa, { Next } from 'koa';
import axios from 'axios';

import { getBreedsByName, createDog, createDogImages } from '../service/dog';

const ROOT_URL = `https://api.thedogapi.com/v1`;

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

export const getAllBreeds = async (ctx: Koa.Context, next: Next): Promise<void> => {
  const dogUserId = parseInt(ctx.params.dogUserId, 10);

  const limit = ctx.request.query.limit;
  const page = ctx.request.query.page;

  const result = await getAllBreedsRequest(limit, page);
  if (result) {
    result.forEach(async (item: any, i: number) => {
      const existingBreeds = await getBreedsByName(item.name);
      if (!existingBreeds) {
        await createDog(item, dogUserId);
      }
    });

    ctx.response.status = 200;
    ctx.response.body = {
      message: `get dog breeds`,
      result: result,
    };
  }
};

export const getAllDogImages = async (ctx: Koa.Context, next: Next): Promise<void> => {
  const dogUserId = parseInt(ctx.params.dogUserId, 10);

  const limit = ctx.request.query.limit;
  const page = ctx.request.query.page;

  const result = await getAllDogImagesRequest(limit, page);
  if (result) {
    result.forEach(async (item: any, i: number) => {
      await createDogImages(item, dogUserId);
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
};
