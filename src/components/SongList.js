import React from "react";
import "./SongList.css";
import SongRow from "./SongRow";
import { connect } from "react-redux";

function SongList(props) {
  const { weeklyDiscover } = props;
  return (
    <div className="songlist">
      <hr />
      {weeklyDiscover.tracks
        ? weeklyDiscover.tracks.items.map((item) => {
            return <SongRow key={item.track.id} item={item} />;
          })
        : null}
    </div>
  );
}

const mapStateToProps = ({ spotify }) => {
  return { weeklyDiscover: spotify.weeklyDiscover };
};

export default connect(mapStateToProps)(SongList);
