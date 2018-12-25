import React from "react";
import "./Track.css";

export const Track = props => {
  const { track } = props;
  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{track.name}</h3>
        <p>
          {track.artist} | {track.album}
        </p>
      </div>
      <a className="Track-action" onClick={props.onClick}>
        {props.isRemoval ? "-" : "+"}
      </a>
    </div>
  );
};
