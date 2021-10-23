import React, { useContext, useState } from "react";
import { ToDoContext } from "../ToDoContext";
import "./ToDoForm.css"

function ToDoForm(){

    const [newToDoValue, setNewToDoValue] = useState('')

    const { addToDo, setOpenModal } =  useContext(ToDoContext);

    const onChange = (event) => {
        setNewToDoValue(event.target.value);
    };
    const onCancel = () => {
        setOpenModal(prevState => !prevState)
    };
    const onSubmit = (event) => {
        event.preventDefault();
        let flag = newToDoValue.split(' ').every(word => word.length<25);
        if(newToDoValue && flag) addToDo(newToDoValue);
        setOpenModal(prevState => !prevState)
    };

    return (
        <div className="toDoFormContainer">
        <form className="toDoForm" onSubmit={onSubmit}>
            <label className="toDoLabel"> Create a new ToDo </label>
            <textarea 
                className="toDoTextArea"
                value={newToDoValue}
                onChange={onChange}
                placeholder="Cut onions for lunch.."
            />
            <div className="toDoButtoms">
                <button
                    className="toDoBtn toDoCancel" 
                    type="button" 
                    onClick={onCancel}
                >
                    Cancel
                </button>
                <button
                    className="toDoBtn toDoSubmit" 
                    type="submit" 
                >
                    Add
                </button>
            </div>
        </form>
        </div>
    )
}

export { ToDoForm }