import React from "react";
import { SiTodoist } from "react-icons/si"
import "./ToDoHeader.css"

function ToDoHeader(){
    return (
        <header className="toDoHeader">
            <a href="index.html"> <SiTodoist /> ToDo Machine </a>
        </header>
    )
};

export { ToDoHeader };