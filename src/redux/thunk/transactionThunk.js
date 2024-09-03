import { showAllert } from "@/helper";
import { doGet, doPost } from "../api/apiInterceptor";
import { baseUrl } from "@/data/api";
import { hideLoader, showLoader } from "../slices/globalSlice";
import { getTransaction, postTransaction } from "../slices/transactionSlice";

export const doGetTransaction = async (limit, page, dispatch) => {
  try {
    dispatch(showLoader());
    resp = await doGet({
      url: `${baseUrl}/logsheet/header/?limit=${limit}&page=${page}`,
    });
    if (resp) {
      dispatch(getTransaction(resp));
      dispatch(hideLoader());
    } else {
      showAllert("Error getting list transaction data", "error");
      dispatch(hideLoader());
    }
  } catch (error) {
    dispatch(hideLoader());
    showAllert(error, "error");
  }
};

export const doPostTransaction = async ({ payload, dispatch }) => {
  try {
    dispatch(showLoader());
    const nullData = [];
    for (key in payload) {
      if (payload[key] === "" || payload[key] === null) {
        nullData.push(payload[key]);
      }
    }
    if (nullData.length === 0) {
      const resp = doPost({
        url: `${baseUrl}/logsheet/header/`,
        payload: payload,
      });
      if (resp) {
        // dispatch(postTransaction);
        showAllert("Success post transaction data", "success");
        dispatch(hideLoader());
      }
    } else {
      showAllert("Transaction data is not complete", "error");
      dispatch(hideLoader());
    }
  } catch (error) {
    dispatch(hideLoader());
    showAllert(error, "error");
  }
};
