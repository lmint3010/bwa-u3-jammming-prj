import React from "react";
import { App } from "../components/App/App";
import Spotify from "../util/Spotify";

export class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],

      playlistName: "New Playlist",
      playlistTracks: []
    };
  }

  addTrack = track => {
    const { playlistTracks } = this.state;
    let validTrack = playlistTracks.find(
      savedTrack => savedTrack.id === track.id
    );
    if (validTrack) return;
    this.setState({
      playlistTracks: [...playlistTracks, track]
    });
  };

  removeTrack = track => {
    const { playlistTracks } = this.state;
    let newTrackList = playlistTracks.filter(e => e.id !== track.id);
    this.setState({ playlistTracks: newTrackList });
  };

  updatePlaylistName = newName => {
    this.setState({ playlistName: newName });
  };

  savePlaylist = () => {
    const { playlistTracks } = this.state;
    const trackURIs = playlistTracks.map(e => e.uri);
    const { playlistName } = this.state;
    console.log(trackURIs, playlistName);
    Spotify.savePlaylist(playlistName, trackURIs).then(() => {
      this.setState({
        playlistName: "New Playlist",
        playlistTracks: []
      });
    });
  };

  search = term => {
    Spotify.search(term).then(searchResults => {
      this.setState({
        searchResults: searchResults
      });
    });
  };

  render() {
    return (
      <App
        savePlaylist={this.savePlaylist}
        search={this.search}
        removeTrack={this.removeTrack}
        updatePlaylistName={this.updatePlaylistName}
        addTrack={this.addTrack}
        searchResults={this.state.searchResults}
        playlistName={this.state.playlistName}
        playlistTracks={this.state.playlistTracks}
      />
    );
  }
}
