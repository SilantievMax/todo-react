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
      this.createTodoItem("Drink Coffee"),
      this.createTodoItem("Make Awesome App"),
      this.createTodoItem("Have a lunch"),
    ],
  };

  createTodoItem(label) {
    return {
      id: this.maxId++,
      label,
      important: false,
      done: false,
    };
  }

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
    const newitem = this.createTodoItem(text);

    this.setState(({ todoData }) => {
      const newArr = [...todoData, newitem];
      return {
        todoData: newArr,
      };
    });
  };

  toggleProperty(arr, id, propName) {
    const inx = arr.findIndex((el) => el.id === id);

    const oldItem = arr[inx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };

    return [...arr.slice(0, inx), newItem, ...arr.slice(inx + 1)];
  }

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "done"),
      };
    });
  };

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "important"),
      };
    });
  };

  render() {
    const { todoData } = this.state;
    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className="w-1/2 m-auto mt-5 bg-slate-700 p-3 rounded font-sans text-slate-200">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="flex justify-between">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList
          todos={todoData}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <ItemAddForm onItemAdded={this.addItem} />
      </div>
    );
  }
}
