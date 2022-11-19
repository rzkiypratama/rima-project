import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auths";
import registerReducer from "./register";
import Profiles from "./profile";

export default combineReducers({
   auth: authReducer,
   register: registerReducer,
   profile: Profiles.getProfile,
});
