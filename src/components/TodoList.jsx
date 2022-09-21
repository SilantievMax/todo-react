import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todos }) => {
  return (
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
  );
};

export default TodoList;
