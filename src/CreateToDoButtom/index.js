import React from "react";
import './CreateToDoButtom.css';

function CreateToDoButtom() {
    return (
        <button 
            className="createToDo"
            onClick={() => console.log('hubo un click')}
        >
        +
        </button>
    )
}

export { CreateToDoButtom };