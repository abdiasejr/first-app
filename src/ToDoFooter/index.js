import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import "./ToDoFooter.css"

function ToDoFooter(){
    return (
        <footer className="toDoFooter">
            Boostrapped with 
            <a 
                href="https://reactjs.org/" 
                target="_blank"
                rel="noreferrer"
            > 
                React 
            </a> 
            by 
            <a 
                href="https://github.com/abdiasejr" 
                target="_blank"
                rel="noreferrer"
            > 
                <FaGithubSquare /> 
            </a>
        </footer>
    )
}

export { ToDoFooter };