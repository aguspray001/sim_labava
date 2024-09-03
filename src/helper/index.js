import { Bounce, toast } from "react-toastify";

export const dateFormarter = (date) => {
  let day = new Date(date).getDate();
  let month = new Date(date).getMonth() + 1;
  let year = new Date(date).getFullYear();
  return `${day}-${month}-${year}`;
};

export const showAllert = (message, type = "success") => {
  if (type === "success") {
    toast.success(message, {
      position: "top-right",
      autoClose: 5000,
      theme: "light",
      transition: Bounce,
    });
  } else {
    toast.error(message, {
      position: "top-right",
      autoClose: 5000,
      theme: "light",
      transition: Bounce,
    });
  }
};
