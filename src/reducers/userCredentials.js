import { SET_ACCESS_TOKEN } from "../types";

// Remove token after test
const INITIAL_STATE = { accessToken: "" };

const userCredentials = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_ACCESS_TOKEN:
      return { ...state, accessToken: action.payload };
    default:
      return state;
  }
};

export default userCredentials;
