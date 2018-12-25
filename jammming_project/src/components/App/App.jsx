import React from "react";
import "./App.css";

// Components
import { SearchResults } from "../SearchResults/SearchResults";
import { PlaylistContainer } from "../../containers/PlaylistContainer";
import { SearchBarContainer } from "../../containers/SearchBarContainer";

export const App = props => {
  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBarContainer onSearch={props.search} />
        <div className="App-playlist">
          <SearchResults
            onAdd={props.addTrack}
            searchResults={props.searchResults}
          />
          <PlaylistContainer
            onSave={props.savePlaylist}
            onNameChange={props.updatePlaylistName}
            onRemove={props.removeTrack}
            playlistName={props.playlistName}
            playlistTracks={props.playlistTracks}
          />
        </div>
      </div>
    </div>
  );
};
