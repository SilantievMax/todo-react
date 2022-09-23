import React, { Component } from "react";

export default class ItemAddForm extends Component {
  state = {
    label: "",
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onItemAdded(this.state.label);
    this.setState({
      label: "",
    });
  };

  render() {
    return (
      <form className="flex" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="bg-slate-700 block max-w-full w-full border border-cyan-600 rounded-l outline-none py-1 pl-2 mt-2 h-10"
          onChange={this.onLabelChange}
          placeholder="What needs to be done"
          value={this.state.label}
        />
        <button className="bg-slate-700 px-2 border-y border-r border-cyan-600 w-52 py-1 rounded-r h-10 mt-2 hover:bg-cyan-600">
          Add Item
        </button>
      </form>
    );
  }
}
