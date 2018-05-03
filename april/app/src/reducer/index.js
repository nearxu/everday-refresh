import { localItem, removeLocalItem } from "../utils/tool";
import { combineReducers } from "redux";

const uerInitState = {
  isLogined: false /* 是否已登陆 */,
  onLogining: false,
  accesstoken: "",
  avatar_url: "",
  id: "",
  loginname: "",
  success: false
};
const initState = localItem("user")
  ? JSON.parse(localItem("user"))
  : uerInitState;
const user = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      localItem("user", JSON.stringify(action.json));
      return action.json;
    case "LOGIN_FAIL":
      // localItem("user", JSON.stringify(action.target));
      // return action.target;
      return { ...state, onLogining: false };
    // case "LOGOUT":
    //   removeLocalItem("user");
    //   return null;
    default:
      return state;
  }
};

const userview = (state = {}, action) => {
  switch (action.type) {
    case "DONE_USERVIEW":
      console.log(action, "action user");
      return action.json.data;
    default:
      return state;
  }
};

const initMessage = {
  count: 0,
  data: {}
};

const message = (state = initMessage, action) => {
  switch (action.type) {
    case "FETCH_MESSAGE":
      return {
        count: state.count,
        data: action.data
      };
    case "FAIL_MESSAGE":
      return {
        ...state
      };
    default:
      return state;
  }
};

const Index = combineReducers({ user, userview, message });

export default Index;
