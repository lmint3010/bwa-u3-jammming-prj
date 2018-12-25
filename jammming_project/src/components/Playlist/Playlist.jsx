import React from "react";
import "./Playlist.css";

// Components
import { TrackList } from "../TrackList/TrackList";

export const Playlist = props => {
  return (
    <div className="Playlist">
      <input value={props.playlistName} onChange={props.handleChange} />
      <TrackList
        tracks={props.playlistTracks}
        onRemove={props.onRemove}
        isRemoval={true}
      />
      <a className="Playlist-save" onClick={props.onSave}>
        SAVE TO SPOTIFY
      </a>
    </div>
  );
};
