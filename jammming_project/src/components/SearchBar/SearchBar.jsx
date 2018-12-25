import React from "react";
import "./SearchBar.css";

export const SearchBar = props => {
  return (
    <div className="SearchBar">
      <input
        placeholder="Enter A Song, Album, or Artist"
        onChange={props.handleTermChange}
      />
      <a onClick={props.onSearch}>SEARCH</a>
    </div>
  );
};
