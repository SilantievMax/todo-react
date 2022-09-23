import React from "react";

const ItemAddForm = ({ onItemAdded }) => {
  return (
    <div>
      <button
        className="bg-slate-800 px-2 border border-slate-800 py-1 rounded hover:bg-slate-700 "
        onClick={() => onItemAdded('hello world')}
      >
        Add Item
      </button>
    </div>
  );
};

export default ItemAddForm;
