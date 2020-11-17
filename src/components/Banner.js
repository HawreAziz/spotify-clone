import React from "react";
import "./Banner.css";
import { connect } from "react-redux";

function Banner(props) {
  const { weeklyDiscover } = props;

  return (
    <div className="banner">
      <img
        src={weeklyDiscover.images ? weeklyDiscover?.images[0]?.url : ""}
        alt="Weekly discover"
      />
      <div className="banner__info">
        <h4>PLAYLIST</h4>
        <h2>{weeklyDiscover.name}</h2>
        <p>{weeklyDiscover.description}</p>
      </div>
    </div>
  );
}

const mapStateToProps = ({ spotify }) => {
  return { weeklyDiscover: spotify.weeklyDiscover, user: spotify.user };
};

export default connect(mapStateToProps)(Banner);
