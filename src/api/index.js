import { api, baseURL } from "./config";
import { apiKeys } from "./apikey";

export const fetchCoinsMarket = () =>
  api
    .get(
      `/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false`
    )
    .then((res) => res?.data);

export const fetchCoinsById = (id) =>
  api.get(`/coins/${id}`).then((res) => res?.data);

export { apiKeys, baseURL };
