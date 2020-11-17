import SideBar from "./SideBar";
import "./Player.css";
import Footer from "./Footer";
import Body from "./Body";

function Player(props) {
  return (
    <div className="player">
      <div className="player__body">
        <SideBar />
        <Body />
      </div>
      <Footer />
    </div>
  );
}

export default Player;
