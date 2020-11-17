import React, { useEffect } from "react";
import "./App.css";
import Login from "./components/Login";
import { connect } from "react-redux";
import Player from "./components/Player";
import {
  setAccessToken,
  getWeeklyDiscover,
  getUser,
  getUserPlaylists,
} from "./actions";
import { getAccessURL } from "./spotify_api/spotify";

function App(props) {
  const {
    accessToken,
    setAccessToken,
    getWeeklyDiscover,
    getUser,
    getUserPlaylists,
  } = props;

  useEffect(() => {
    const { access_token } = getAccessURL();
    if (access_token) {
      window.location.hash = "";
      setAccessToken(access_token);
    }
    getWeeklyDiscover();
    getUser();
    getUserPlaylists();
  }, [setAccessToken, getWeeklyDiscover, getUser, getUserPlaylists]);

  return <div className="app">{!accessToken ? <Login /> : <Player />}</div>;
}

const mapStateToProps = ({ userCredentials }) => {
  return { accessToken: userCredentials.accessToken };
};

export default connect(mapStateToProps, {
  setAccessToken,
  getUser,
  getWeeklyDiscover,
  getUserPlaylists,
})(App);
