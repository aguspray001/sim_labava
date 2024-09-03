import { baseUrl } from "@/data/api";
import { showAllert } from "@/helper";
import { doGet } from "../api/apiInterceptor";
import { hideLoader, showLoader } from "../slices/globalSlice";

export const doGetAllBinLevel = async () => {
  try {
    dispatch(showLoader());
    resp = await doGet({
      url: `${baseUrl}/binpacking/bin-levels/`,
    });
    if (resp) {
      dispatch(hideLoader());
    } else {
      showAllert("Error getting bin levels data", "error");
      dispatch(hideLoader());
    }
  } catch (error) {
    showAllert("Error getting bin levels data", "error");
    dispatch(hideLoader());
  }
};

export const doGetMaterialBinPacking = async () => {
  try {
    dispatch(showLoader());
    resp = await doGet({
      url: `${baseUrl}/binpacking/materials/`,
    });
    if (resp) {
      dispatch(hideLoader());
    } else {
      showAllert("Error getting bin levels data", "error");
      dispatch(hideLoader());
    }
  } catch (error) {
    showAllert("Error getting bin levels data", "error");
    dispatch(hideLoader());
  }
};

export const doGetAllSlidegateStatus = async () => {
  try {
    dispatch(showLoader());
    resp = await doGet({
      url: `${baseUrl}/binpacking/all-sg-status/`,
    });
    if (resp) {
      dispatch(hideLoader());
    } else {
      showAllert("Error getting bin levels data", "error");
      dispatch(hideLoader());
    }
  } catch (error) {
    showAllert("Error getting bin levels data", "error");
    dispatch(hideLoader());
  }
};
