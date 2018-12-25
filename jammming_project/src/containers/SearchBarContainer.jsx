import React from "react";
import { SearchBar } from "../components/SearchBar/SearchBar";

export class SearchBarContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };
  }
  search = () => {
    this.props.onSearch(this.state.term);
  };

  handleTermChange = e => {
    this.setState({
      term: e.target.value
    });
  };

  render() {
    return (
      <SearchBar
        onSearch={this.search}
        handleTermChange={this.handleTermChange}
      />
    );
  }
}
