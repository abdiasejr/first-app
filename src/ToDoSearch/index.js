import React, { useContext } from "react";
import { ToDoContext } from "../ToDoContext";
import { BiSearch } from "react-icons/bi";
import "./ToDoSearch.css"

function ToDoSearch(){
    const {searchValue, setSearchValue} = useContext(ToDoContext);

    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <div className='toDoSearchContainer'>
            <input 
                className='toDoSearch' 
                placeholder='Cook dinner...' 
                value={searchValue}
                onChange={onSearchValueChange}
            />
            <BiSearch />
        </div>
    )
};

export { ToDoSearch };