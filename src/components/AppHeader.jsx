import React from "react";

const AppHeader = () => {
  return (
    <div className="flex justify-between items-end">
      <h1 className="text-2xl font-bold">Todo List</h1>
      <h2 className="text-xs font-thin">2 more to do, 3 done</h2>
    </div>
  );
};

export default AppHeader;
