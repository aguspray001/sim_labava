import { appGet, appPost } from "./caller";

export const post = async (data) => {
  return appPost(data)
    .then((r) => r)
    .catch((e) => e);
};

export const get = async (data) => {
  return appGet(data)
    .then((r) => r)
    .catch((e) => e);
};
