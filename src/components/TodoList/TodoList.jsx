import React from "react";
import TodoListItem from "../TodoListItem";

const TodoList = ({ todos, onDeleted }) => {
  return (
    <div className="mt-2">
      <ul>
        {todos.map((item) => {
          const { id, ...itemProps } = item;
          return (
            <li key={item.id}>
              <TodoListItem {...itemProps} onDeleted={() => onDeleted(id)} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
