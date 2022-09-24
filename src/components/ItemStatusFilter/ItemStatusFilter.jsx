import React, { Component } from "react";

export default class ItemStatusFilter extends Component {
  buttons = [
    { name: "all", label: "All" },
    { name: "active", label: "Active" },
    { name: "done", label: "Done" },
  ];

  render() {
    const { filter, onFilterChange } = this.props;

    const buttons = this.buttons.map(({ name, label }) => {
      const isActive = filter === name;
      const clazz = isActive ? " bg-cyan-600" : "";

      return (
        <button
          type="button"
          key={name}
          className={`w-1/3 border-r border-cyan-600 py-0.5 hover:bg-cyan-600 h-full ${clazz}`} //bg-cyan-600
          onClick={() => onFilterChange(name)}
        >
          {label}
        </button>
      );
    });

    return (
      <div className="mt-2 h-10 w-80 border-y border-cyan-600 rounded-r">
        {buttons}
      </div>
    );
  }
}
