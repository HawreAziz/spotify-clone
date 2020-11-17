import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import "./Header.css";
import { connect } from "react-redux";

function Header(props) {
  const { user } = props;

  return (
    <div className="header">
      <div className="header__search">
        <SearchIcon />
        <input placeholder="Search" />
      </div>
      <div className="header__profile">
        <Avatar
          src={user.images ? user.images[0].url : ""}
          style={{ height: 50, width: 50 }}
        />
        <p>{user.display_name}</p>
      </div>
    </div>
  );
}

const mapStateToProps = ({ spotify }) => {
  return {
    user: spotify.user,
  };
};

export default connect(mapStateToProps)(Header);
