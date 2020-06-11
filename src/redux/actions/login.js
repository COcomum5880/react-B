import { reqLogin, reqLogout } from "@api/acl/login";
import { LOGIN_SUCCESS, REMOVE_TOKEN } from "../constants/login";

/**
 * 登陆
 */
const loginSuccessSync = user => ({
  type: LOGIN_SUCCESS,
  data: user
});

export const login = (username, password) => {
  return dispatch => {
    return reqLogin(username, password).then(response => {
      dispatch(loginSuccessSync(response));
      return response.token;
    });
  };
};

export const removeToken = () => ({
  type: REMOVE_TOKEN
});

export const logout = () => {
  return dispatch => {
    return reqLogout().then(() => {
      dispatch(removeToken());
    });
  };
};
