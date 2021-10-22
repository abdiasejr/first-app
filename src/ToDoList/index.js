import React from "react";
import "./ToDoList.css";

function ToDoList(props){
    return (
        <section className='toDoSection'>
            <ul className="toDoList">
                {props.children}
            </ul>
        </section>
    )
}

export { ToDoList};