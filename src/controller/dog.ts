import Koa, { Next } from 'koa';

import { getBreedsByName, createDog, createDogImages } from '../service/dog';
import { getAllBreedsRequest, getAllDogImagesRequest } from '../request/dog';

export const getAllBreeds = async (ctx: Koa.Context, next: Next): Promise<void> => {
  const dogUserId = parseInt(ctx.params.dogUserId, 10);

  const limit = ctx.request.query.limit;
  const page = ctx.request.query.page;

  const result = await getAllBreedsRequest(limit, page);
  if (result) {
    try {
      for (let index = 0; index < result.length; index++) {
        const item = result[index];

        const existingBreeds = await getBreedsByName(item.name);
        if (!existingBreeds) {
          await createDog(item, dogUserId);
        }
      }

      ctx.response.status = 200;
      ctx.response.body = {
        message: `get dog breeds`,
        result: result,
      };
    } catch (e) {
      console.log('error = ', e);

      ctx.response.status = 400;
      ctx.response.body = {
        message: `get dog breeds error`,
        error: e.message,
      };
    }
  }
};

export const getAllDogImages = async (ctx: Koa.Context, next: Next): Promise<void> => {
  const dogUserId = parseInt(ctx.params.dogUserId, 10);

  const limit = ctx.request.query.limit;
  const page = ctx.request.query.page;

  const result = await getAllDogImagesRequest(limit, page);
  if (result) {
    try {
      for (let index = 0; index < result.length; index++) {
        const item = result[index];
        await createDogImages(item, dogUserId);
      }

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
    } catch (e) {
      ctx.response.status = 200;
      ctx.response.body = {
        message: `get dog images error`,
        error: e.message,
      };
    }
  }
};
