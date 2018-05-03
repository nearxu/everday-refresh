import http from "../utils/http";

export const FETCH_MESSAGE = "FETCH_MESSAGE";
export const FAIL_MESSAGE = "FAIL_MESSAGE";

export const successMessage = json => ({
  type: "FETCH_MESSAGE",
  json
});

export const fail = () => ({
  type: "FAIL_MESSAGE"
});

export const fetchMessage = () => (dispatch, getState) => {
  return http
    .get("/api/v1/messages", {
      accesstoken: getState().user.accesstoken
    })
    .then(res => {
      if (res.data.success) {
        dispatch(successMessage(res.data));
      } else {
        dispatch(fail());
      }
    });
};
