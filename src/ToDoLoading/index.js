import React from "react";
import "./ToDoLoading.css"

function ToDoLoading() {
    return (
        <div className="toDoLoadingContainer">
            <div className="toDoItemLoading"></div>
            <div className="toDoItemLoading"></div>
            <div className="toDoItemLoading"></div>
            <div className="toDoItemLoading"></div>
        </div>
    )
}

export { ToDoLoading };