import React from "react";
import "./TrackList.css";

// Components
import { TrackContainer } from "../../containers/TrackContainer";

export const TrackList = props => {
  return (
    <div className="TrackList">
      {props.tracks.map(track => (
        <TrackContainer
          key={track.id}
          track={track}
          onAdd={props.onAdd}
          onRemove={props.onRemove}
          isRemoval={props.isRemoval}
        />
      ))}
    </div>
  );
};
