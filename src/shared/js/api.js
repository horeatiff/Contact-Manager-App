import axios from "axios";
import { SITE_URL } from "./constants";
import { handleRequest } from "./helpers";

const baseApi = axios.create({ timeout: 60000 });

export const fetchData = ({ endpoint = "", baseURL, params = {} }) => {
  return baseApi
    .request({
      url: endpoint,
      baseURL: baseURL || SITE_URL,
      method: "GET",
      params,
    })
    .then((res) => handleRequest(res));
};
