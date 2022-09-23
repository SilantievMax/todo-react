import React from "react";

const AppHeader = ({toDo, done}) => {
  return (
    <div className="flex justify-between items-end">
      <h1 className="text-2xl font-bold">Todo List</h1>
      <h2 className="text-sm font-thin">{toDo} more to do, {done} done</h2>
    </div>
  );
};

export default AppHeader;
