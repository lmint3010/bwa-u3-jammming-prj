import React from "react";
import "./SearchResults.css";

// Components
import { TrackList } from "../TrackList/TrackList";

export const SearchResults = props => {
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <TrackList
        tracks={props.searchResults}
        onAdd={props.onAdd}
        isRemoval={false}
      />
    </div>
  );
};
