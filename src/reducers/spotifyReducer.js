import {
  SET_USER_PLAYLIST,
  SET_USER,
  SET_WEEKLY_DISCOVER,
  PLAY,
  STOP,
} from "../types";

const INITIAL_STATE = {
  user: {},
  playLists: [],
  weeklyDiscover: {},
  isPlaying: false,
};

const spotifyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER_PLAYLIST:
      return {
        ...state,
        playLists: action.payload,
      };
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case SET_WEEKLY_DISCOVER:
      return {
        ...state,
        weeklyDiscover: action.payload,
      };
    case PLAY:
      return {
        ...state,
        isPlaying: action.payload,
      };
    case STOP:
      return {
        ...state,
        isPlaying: action.payload,
      };
    default:
      return state;
  }
};

export default spotifyReducer;
