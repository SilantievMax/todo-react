import React from "react";
import AppHeader from "./components/AppHeader";
import SearchPanel from "./components/SearchPanel";
import TodoList from "./components/TodoList";

const App = () => {
  const todoData = [
    { id: 1, label: "Drink Coffee", important: false },
    { id: 2, label: "Make Awesome App", important: true },
    { id: 3, label: "Have a lunch", important: false },
  ];

  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList todos={todoData} />
    </div>
  );
};

export default App;
