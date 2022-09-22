import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todos }) => {
  return (
    <div className="mt-2">
      <ul>
        {todos.map((item) => {
          const { id, ...itemProps } = item;
          return (
            <li key={item.id}>
              <TodoListItem {...itemProps} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
