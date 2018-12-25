import React from "react";
import { Track } from "../components/Track/Track";

export class TrackContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  addTrack = () => {
    const { track } = this.props;
    this.props.onAdd(track);
  };

  removeTrack = () => {
    const { track } = this.props;
    this.props.onRemove(track);
  };

  handleClick = () => {
    const { isRemoval } = this.props;
    if (isRemoval) {
      this.removeTrack();
      return;
    }
    this.addTrack();
  };

  render() {
    return (
      <Track
        track={this.props.track}
        onClick={this.handleClick}
        isRemoval={this.props.isRemoval}
      />
    );
  }
}
