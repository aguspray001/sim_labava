import { baseUrl } from "@/data/api";
import { showAllert } from "@/helper";
import { doGet } from "../api/interceptor";
import { hideLoader, showLoader } from "../slices/globalSlice";
import { getKerani, getOperator, getSupervisor } from "../slices/userSlice";

const doGetUsersbyGroup = async (groupName) => {
  try {
    dispatch(showLoader());
    resp = await doGet({
      url: `${baseUrl}/auth/users/?group_user=${groupName}`,
    });
    switch (groupName) {
      case "operator":
        dispatch(getOperator(resp));
        break;
      case "kerani":
        dispatch(getKerani(resp));
        break;
      case "supervisor":
        dispatch(getSupervisor(resp));
        break;
      default:
        break;
    }
    dispatch(hideLoader());
  } catch (error) {
    dispatch(hideLoader());
    showAllert("Error getting list transaction data", "error");
  }
};
