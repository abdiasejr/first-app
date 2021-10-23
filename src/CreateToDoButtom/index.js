import React, { useContext } from "react";
import { ToDoContext } from "../ToDoContext";
import './CreateToDoButtom.css';

function CreateToDoButtom() {
    const { openModal, setOpenModal } = useContext(ToDoContext);
    return (
        <button 
            className="createToDo"
            onClick={() => setOpenModal(!openModal)}
        >
        +
        </button>
    )
}

export { CreateToDoButtom };