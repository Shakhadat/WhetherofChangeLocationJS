import apisauce from 'apisauce';

export const baseURL = `https://api.coingecko.com/api/v3`;
//headerlarga ketadigan so'rovlar; base url api dan oladi; / dan keyingi urllar beriladi
export const api = apisauce.create({
  baseURL,
  headers: {
    Accept: 'application/json',
  },
});