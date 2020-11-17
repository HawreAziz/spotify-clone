import React from "react";
import "./SongRow.css";

function SongRow({ item }) {
  return (
    <div className="songrow">
      <img src={item.track.album.images[0].url} alt="Album" />
      <div className="songrow__info">
        <h2>{item.track.album.name}</h2>
        <div className="songrow__artists">
          <p>
            {item.track.artists
              .map((artist) => {
                return artist.name;
              })
              .join(" - ")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SongRow;
