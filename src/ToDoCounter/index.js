import React, { useContext} from "react";
import { ToDoContext } from "../ToDoContext/index";
import "./ToDoCounter.css";

function ToDoCounter() {
  const { totalToDos, completedToDos} = useContext(ToDoContext); 
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
