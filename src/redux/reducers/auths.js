import { ActionType } from "redux-promise-middleware";
import { ACTION_STRING } from "../actions/actionStrings";

const initialState = {
  isError: false,
  isLoading: false,
  isFulfilled: false,
  error: null,
  userInfo: {
    id: null,
    token: null,
    role: null,
    email: null,
  },
};

const authReducer = (prevState = initialState, { type, payload }) => {
  const { Pending, Rejected, Fulfilled } = ActionType;
  const { authLogin, authLogout } = ACTION_STRING;

  switch (type) {
    case authLogin.concat("_", Pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case authLogin.concat("_", Rejected):
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        isFulfilled: false,
        error: payload.error.message,
      };
    case authLogin.concat("_", Fulfilled):
      return {
        ...prevState,
        isError: false,
        isFulfilled: true,
        isLoading: false,
        userInfo: {
          id: payload.data.data.user_id,
          token: payload.data.data.token,
          email: payload.data.data.email,
          roles: payload.data.data.roles_id,
        },
      };
    case authLogout.concat("_", Pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
      };
    case authLogout.concat("_", Rejected):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        error: payload.error,
      };
    case authLogout.concat("_", Fulfilled):
      return initialState;
    default:
      return prevState;
  }
};

export default authReducer;