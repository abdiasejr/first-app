import React from "react";
import "./ToDoSearch.css"
import { BiSearch } from "react-icons/bi";

function ToDoSearch({searchValue, setSearchValue}){
    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    }

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