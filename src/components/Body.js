import React from "react";
import Banner from "./Banner";
import Header from "./Header";
import SongList from "./SongList";
import "./Body.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";

function Body(props) {
  return (
    <div className="body">
      <Header />
      <Banner />
      <div className="body__icon">
        <PlayCircleFilledIcon className="body__shuffle" />
        <FavoriteIcon className="body__favorite" fontSize="large" />
        <MoreHorizIcon className="body__more" />
      </div>
      <SongList />
    </div>
  );
}

export default Body;
