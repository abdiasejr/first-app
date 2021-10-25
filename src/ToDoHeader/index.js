import React from "react";
import "./ToDoHeader.css"

function ToDoHeader({children}){
    return (
        <div className="toDoHeaderContainer">
            {children}
        </div>
    )
};

export { ToDoHeader };