import React, { Component } from "react";

export default class SearchPanel extends Component {
  state = {
    term: "",
  };

  onSearchChangs = (e) => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onSearchChangs(term);
  };

  render() {
    return (
      <input
        className="bg-slate-700 block max-w-full w-full border border-cyan-600 rounded-l outline-none py-0.5 pl-2 mt-2 h-10"
        type="text"
        placeholder="type to search"
        value={this.state.term}
        onChange={this.onSearchChangs}
      />
    );
  }
}
