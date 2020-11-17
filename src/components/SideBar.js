import React from "react";
import "./SideBar.css";
import SideBarOption from "./SideBarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { connect } from "react-redux";

function SideBar(props) {
  const { playlists } = props;

  return (
    <div className="sidebar">
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="spotify-log"
        className="sidebar__logo"
      />
      <SideBarOption option="Home" Icon={HomeIcon} />
      <SideBarOption option="Search" Icon={SearchIcon} />
      <SideBarOption option="Your library" Icon={LibraryMusicIcon} />
      <div className="sidebar__playlist">
        <strong className="sidebar__playlist__title">PLAYLISTS</strong>
        <hr />
        {playlists.map((playlist) => {
          return (
            <SideBarOption
              option={playlist.name}
              key={playlist.name}
              keyProp={playlist.id}
            />
          );
        })}
      </div>
    </div>
  );
}

const mapStateToProps = ({ spotify }) => {
  return { playlists: spotify.playLists };
};

export default connect(mapStateToProps)(SideBar);
