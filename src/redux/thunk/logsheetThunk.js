import { baseUrl } from "@/data/api";
import { showAllert } from "@/helper";
import { doGet } from "../api/interceptor";
import { hideLoader, showLoader } from "../slices/globalSlice";

const doGetTransaction = async (limit, page, dispatch) => {
  try {
    dispatch(showLoader());
    resp = await doGet({
      url: `${baseUrl}/logsheet/header/?limit=${limit}&page=${page}`,
    });
    dispatch(hideLoader());
  } catch (error) {
    dispatch(hideLoader());
    showAllert("Error getting list transaction data", "error");
  }
};

const doGetPoNumbers = async (feed_no) => {
  try {
    dispatch(showLoader());
    resp = await doGet({
      url: `${baseUrl}/logsheet/po-by-feedcode/?feed_code=${feed_no}`,
    });
    dispatch(hideLoader());
  } catch (error) {
    dispatch(hideLoader());
    showAllert("Error getting list transaction data", "error");
  }
};

const doGetFeedCode = async () => {
  try {
    dispatch(showLoader());
    resp = await doGet({
      url: `${baseUrl}/logsheet/feedcode/`,
    });
    dispatch(hideLoader());
  } catch (error) {
    dispatch(hideLoader());
    showAllert("Error getting list transaction data", "error");
  }
};

const doPostLogsheet = async (data) => {
  setIsLoading(true);
  axios
    .post(`${API_URI}:${API_PORT}/logsheet/packing/`, data)
    .then((res) => {
      setLogsheet(res?.data?.data);
      toast.success("Success uploading data to database", {
        position: "top-right",
      });

      setLogsheetData([
        ...logsheetData,
        {
          counter_result: valueResult?.toString(),
        },
      ]);
      setLogsheetData([...logsheetData, res?.data?.data]);
      setIsLoading(false);
    })
    .catch((err) => {
      toast.error(err, {
        position: "top-right",
      });
      setIsLoading(false);
    });
};

const doGetListPackingLine = async () => {
  try {
    dispatch(showLoader());
    resp = await doGet({
      url: `${baseUrl}/logsheet/devices/`,
    });
    dispatch(hideLoader());
  } catch (error) {
    dispatch(hideLoader());
    showAllert("Error getting packing lines", "error");
  }
};

const doGetListLogsheet = async (idDPM, limit, page) => {
  try {
    dispatch(showLoader());
    resp = await doGet({
      url: `${baseUrl}/logsheet/packings/?id_dpm=${idDPM}&limit=${limit}&page=${page}`,
    });
    dispatch(hideLoader());
  } catch (error) {
    dispatch(hideLoader());
    showAllert("Error getting list logsheet", "error");
  }
};
