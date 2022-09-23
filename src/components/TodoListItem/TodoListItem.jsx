import React, { Component } from "react";

export default class TodoListItem extends Component {
  state = {
    done: false,
    important: false,
  };

  //1вариант
  onLabelClick = () => {
    this.setState((state) => {
      return {
        done: !state.done,
      };
    });
  };

  //2вариант
  onMarkImportant = () => {
    this.setState(({ important }) => {
      return {
        important: !important,
      };
    });
  };

  render() {
    const { label } = this.props;
    const { done, important } = this.state;

    let className = "text-slate-200 cursor-pointer";

    if (done) {
      className += " line-through";
    }

    if (important) {
      className += " text-cyan-400 font-bold";
    }

    return (
      <span className="px-3 flex justify-between content-center border border-cyan-600 my-2 rounded w-full block py-2 px-1">
        <span className={className} onClick={this.onLabelClick}>
          {label}
        </span>
        <div>
          <button
            className="border-2 border-rose-600 rounded p-1 text-rose-600 hover:text-rose-500 hover:border-rose-500"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </button>
          <button
            className="border-2 border-lime-600 rounded p-1 text-lime-600 ml-2 hover:text-lime-500 hover:border-lime-500"
            onClick={this.onMarkImportant}
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
              />
            </svg>
          </button>
        </div>
      </span>
    );
  }
}
