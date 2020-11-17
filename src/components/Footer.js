import React, { useEffect } from "react";
import "./Footer.css";
import { connect } from "react-redux";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import { Slider, Grid } from "@material-ui/core";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import { play, stop, getCurrentPlaybackState } from "../actions";

function Footer(props) {
  const {
    weeklyDiscover,
    isPlaying,
    play,
    stop,
    getCurrentPlaybackState,
  } = props;

  useEffect(() => {
    getCurrentPlaybackState();
  }, [getCurrentPlaybackState]);

  console.log(isPlaying);
  return (
    <div className="footer">
      <div className="footer__left">
        <img
          src={weeklyDiscover?.tracks?.items[0]?.track?.album?.images[0]?.url}
          alt="album-name"
        />
        <p>{weeklyDiscover?.tracks?.items[0]?.track?.album?.name}</p>
      </div>
      <div className="footer__center">
        <ShuffleIcon className="footer__green" />
        <SkipPreviousIcon className="footer__icon" />
        {isPlaying ? (
          <PauseCircleOutlineIcon
            className="footer__icon"
            style={{ fontSize: 50 }}
            onClick={stop}
          />
        ) : (
          <PlayCircleOutlineIcon
            className="footer__icon"
            style={{ fontSize: 50 }}
            onClick={play}
          />
        )}
        <SkipNextIcon className="footer__icon" />
        <RepeatIcon className="footer__green" />
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

const mapStateToProps = ({ spotify }) => {
  return {
    weeklyDiscover: spotify.weeklyDiscover,
    isPlaying: spotify.isPlaying,
  };
};

export default connect(mapStateToProps, {
  play,
  stop,
  getCurrentPlaybackState,
})(Footer);
