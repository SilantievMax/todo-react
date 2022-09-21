import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos.map((item, i) => {
        return (
          <li key={i}>
            <TodoListItem {...item} />
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
