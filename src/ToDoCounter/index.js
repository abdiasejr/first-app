import React from "react";
import "./ToDoCounter.css"

function ToDoCounter({completed, total}){
    return (
      <div>
        <h1 className="toDoTitle"> TODOs </h1>
        <h2 className="toDoCount">You has completed {completed} of {total} tasks</h2>
      </div>
    )
};

export { ToDoCounter };