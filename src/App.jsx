import React, { Component } from "react";
import AppHeader from "./components/AppHeader";
import ItemStatusFilter from "./components/ItemStatusFilter";
import SearchPanel from "./components/SearchPanel";
import TodoList from "./components/TodoList";
import ItemAddForm from "./components/ItemAddForm";

export default class App extends Component {
  maxId = 100;

  state = {
    todoData: [
      { id: 1, label: "Drink Coffee", important: false },
      { id: 2, label: "Make Awesome App", important: true },
      { id: 3, label: "Have a lunch", important: false },
    ],
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const inx = todoData.findIndex((el) => el.id === id);

      const newArray = [...todoData.slice(0, inx), ...todoData.slice(inx + 1)];

      return {
        todoData: newArray,
      };
    });
  };

  addItem = (text) => {
    const newitem = {
      id: this.maxId++,
      label: text,
      important: false,
    };

    this.setState(({ todoData }) => {
      const newArr = [...todoData, newitem];
      return {
        todoData: newArr,
      };
    });
  };

  render() {
    return (
      <div className="w-1/2 m-auto mt-5 bg-slate-700 p-3 rounded font-sans text-slate-200">
        <AppHeader />
        <div className="flex justify-between">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList todos={this.state.todoData} onDeleted={this.deleteItem} />
        <ItemAddForm onItemAdded={this.addItem} />
      </div>
    );
  }
}
