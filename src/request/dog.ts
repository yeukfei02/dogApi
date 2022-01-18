import axios from 'axios';

const rootUrl = `https://api.thedogapi.com/v1`;

export const getAllBreedsRequest = async (limit: number, page: number): Promise<any> => {
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

  const response = await axios.get(`${rootUrl}/breeds`, data);
  return response.data;
};

export const getAllDogImagesRequest = async (limit: number, page: number): Promise<any> => {
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

  const response = await axios.get(`${rootUrl}/images/search`, data);
  return response.data;
};
