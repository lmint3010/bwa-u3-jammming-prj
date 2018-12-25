import React from "react";
import { Playlist } from "../components/Playlist/Playlist";

export class PlaylistContainer extends React.Component {
  handleChange = e => {
    let newPlaylistName = e.target.value;
    this.props.onNameChange(newPlaylistName);
  };

  render() {
    return (
      <Playlist
        onSave={this.props.onSave}
        playlistName={this.props.playlistName}
        playlistTracks={this.props.playlistTracks}
        onRemove={this.props.onRemove}
        handleChange={this.handleChange}
      />
    );
  }
}
