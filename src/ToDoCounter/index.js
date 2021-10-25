import React from "react";
import "./ToDoCounter.css";

function ToDoCounter({completedToDos, totalToDos}) {
  return (
    <div>
      <h1 className="toDoTitle"> TODOs </h1>
      <h2 className="toDoCount">
        You has completed {completedToDos} of {totalToDos} tasks
      </h2>
    </div>
  );
}

export { ToDoCounter };
