import {
  SET_ACCESS_TOKEN,
  SET_USER,
  SET_USER_PLAYLIST,
  SET_WEEKLY_DISCOVER,
  PLAY,
  STOP,
} from "../types";
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();

export const setAccessToken = (accessToken) => {
  return async (dispatch) => {
    await spotify.setAccessToken(accessToken);
    dispatch({
      type: SET_ACCESS_TOKEN,
      payload: accessToken,
    });
  };
};

export const getUser = () => {
  return async (dispatch) => {
    try {
      const response = await spotify.getMe();
      dispatch({ type: SET_USER, payload: response });
    } catch (error) {
      /* Inform user what went wrong, not relevant for now */
      console.log(error);
    }
  };
};

export const getUserPlaylists = () => {
  return async (dispatch) => {
    try {
      const response = await spotify.getUserPlaylists();
      dispatch({
        type: SET_USER_PLAYLIST,
        payload: response.items,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getWeeklyDiscover = () => {
  return async (dispatch) => {
    try {
      const response = await spotify.getPlaylist("37i9dQZEVXcIloQy8E193C");
      dispatch({
        type: SET_WEEKLY_DISCOVER,
        payload: response,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getCurrentPlaybackState = () => {
  return async (dispatch) => {
    try {
      const response = await spotify.getMyCurrentPlaybackState();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
};

export const play = () => {
  return async (dispatch) => {
    try {
      await spotify.play();
      dispatch({ type: PLAY, payload: true });
    } catch (error) {
      console.log(error);
    }
  };
};

export const stop = () => {
  return async (dispatch) => {
    try {
      await spotify.stop();
      dispatch({ type: STOP, payload: false });
    } catch (error) {
      console.log(error);
    }
  };
};
