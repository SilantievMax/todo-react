import React from "react";
import AppHeader from "./components/AppHeader";
import ItemStatusFilter from "./components/ItemStatusFilter";
import SearchPanel from "./components/SearchPanel";
import TodoList from "./components/TodoList";

const App = () => {
  const todoData = [
    { id: 1, label: "Drink Coffee", important: false },
    { id: 2, label: "Make Awesome App", important: true },
    { id: 3, label: "Have a lunch", important: false },
  ];

  return (
    <div className="w-1/2 m-auto mt-5 bg-slate-700 p-3 rounded font-sans text-slate-200">
      <AppHeader />
      <div className="flex justify-between">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <TodoList todos={todoData} onDeleted={(id) => console.log(id)} />
    </div>
  );
};

export default App;
