import http from "../utils/http";
import { hashHistory } from "react-router";

export const doneUserView = json => ({
  type: "DONE_USERVIEW",
  json
});
export const getUserView = loginname => dispatch => {
  return http.get(`/api/v1/user/${loginname}`).then(res => {
    if (res.data.success) {
      dispatch(doneUserView(res.data));
    } else {
      alert("用户不存在");
      hashHistory.push({ pathname: "/" });
    }
  });
};
