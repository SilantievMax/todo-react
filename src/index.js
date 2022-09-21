import React from "react";
import ReactDOM from "react-dom";

const el = (
  <div>
    <h1>Mt Todo List</h1>
    <input placeholder="search" />
    <ul>
      <li>Lesrn React</li>
      <li>Build Awesome App</li>
    </ul>
  </div>
);


ReactDOM.render(el, document.getElementById('root'))