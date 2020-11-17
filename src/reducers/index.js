import { combineReducers } from "redux";
import userCredentialsReducer from "./userCredentials";
import spotifyReducer from "./spotifyReducer";

export default combineReducers({
  userCredentials: userCredentialsReducer,
  spotify: spotifyReducer,
});
