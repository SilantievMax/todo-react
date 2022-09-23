import React, { Component } from "react";

export default class ItemStatusFilter extends Component {
  render() {
    return (
      <div className="mt-2 h-10 w-80">
        <button
          className="w-1/3 border-y border-cyan-600 bg-cyan-600 py-0.5 hover:bg-cyan-600 h-full"
          type="button"
        >
          All
        </button>
        <button
          className="w-1/3 border border-cyan-600 py-0.5 hover:bg-cyan-600 h-full"
          type="button"
        >
          Active
        </button>
        <button
          className="w-1/3 border-y border-r border-cyan-600 py-0.5 hover:bg-cyan-600 h-full rounded-r"
          type="button"
        >
          Dones
        </button>
      </div>
    );
  }
}
