import { get, post } from "./service";

const interceptorData = (resp) => {
  const { data, status } = resp;
  if (parseInt(status) === 401) {
    showMessage("Terjadi kesalahan pada API interceptor", "error");
    return false;
  } else if (parseInt(status) === 200) {
    // showMessage('Success fetch data', 'success');
    return data.data.data;
  }
};

export async function doPost(payload) {
  try {
    let resp = await post(payload);
    console.log("resp dopost:", resp);
    return await interceptorData(resp);
  } catch (e) {
    throw e;
  }
}

export async function doGet(payload) {
  try {
    let resp = await get(payload);
    console.log("resp doGet:", resp);
    return await interceptorData(resp);
  } catch (e) {
    throw e;
  }
}
