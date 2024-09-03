import axios from "axios";
import qs from "query-string";
import { API_PORT, API_URI } from "@/data/api";

const Call = async (
  method,
  url,
  data = {},
  token = "",
  headers = {},
  options = {},
  baseUrl = `${API_URI}:${API_PORT}`,
  timeout = 60000,
  resp = "json"
) => {
  const config = {
    ...options,
    method,
    url,
    baseURL: baseUrl,
    data,
    timeout,
    responseType: resp,
    headers: { ...headers, "bb-token": token },
  };
  return await axios.request(config);
};

export const appPost = async (body) => {
  const { url, data, token, headers, baseUrl, timeout, resp } = body;
  return await Call("POST", url, data, token, headers, baseUrl, timeout, resp);
};

export const appGet = async (body) => {
  const { url, data, token, headers, options, baseUrl, timeout, resp } = body;
  // console.log({resp});

  const params = qs.stringify(data);
  return await Call(
    "GET",
    url,
    params,
    token,
    headers,
    options,
    baseUrl,
    timeout,
    resp
  );
};

export const appDelete = async (body) => {
  const { url, data, token, headers, baseUrl, timeout, resp } = body;
  return await Call(
    "DELETE",
    url,
    data,
    token,
    headers,
    baseUrl,
    timeout,
    resp
  );
};

export const appPatch = async (body) => {
  const { url, data, token, headers, baseUrl, timeout, resp } = body;
  return await Call("PATCH", url, data, token, headers, baseUrl, timeout, resp);
};
