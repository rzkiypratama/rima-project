import { ActionType } from "redux-promise-middleware";
import { getProfile, patchProfile } from "../../utils/fetchers";
// import { patchProfile } from "../../utils/fetchers";
import { ACTION_STRING } from "./actionStrings";

const { Pending, Rejected, Fulfilled } = ActionType;

const profilePending = () => ({
   type: ACTION_STRING.getProfile.concat("_", Pending),
});
const profileRejected = (error) => ({
   type: ACTION_STRING.getProfile.concat("_", Rejected),
   payload: { error },
});
const profileFulfilled = (data) => ({
   type: ACTION_STRING.getProfile.concat("_", Fulfilled),
   payload: { data },
});
const updateProfilePending = () => ({
   type: ACTION_STRING.updateProfile.concat("_", Pending),
});

const updateProfileRejected = (error) => ({
   type: ACTION_STRING.updateProfile.concat("_", Rejected),
   payload: { error },
});
const updateProfileFulfilled = (data) => ({
   type: ACTION_STRING.updateProfile.concat("_", Fulfilled),
   payload: { data },
});

const profileThunk = (data) => {
   return async (dispacth) => {
      try {
         dispacth(profilePending());
         const result = await getProfile(data);
         //  console.log(result.data);
         dispacth(profileFulfilled(result.data));
      } catch (error) {
         dispacth(profileRejected(error));
      }
   };
};

const updateProfileThunk = (data) => {
   return async (dispacth) => {
      try {
         dispacth(updateProfilePending());
         const result = await patchProfile(data);
         //  console.log(result.data);
         dispacth(updateProfileFulfilled(result.data));
      } catch (error) {
         dispacth(updateProfileRejected(error));
      }
   };
};

const profileActions = { profileThunk, updateProfileThunk };

export default profileActions;
