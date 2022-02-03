import { getDetails as details } from "../services/getDetails";

export const getDetails = () => {
  const payload = details();

  return (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: "GETDETAILS",
        payload,
      });
    }, 1500);
  };
};
