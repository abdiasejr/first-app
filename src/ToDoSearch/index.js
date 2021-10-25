import React from "react";
import { BiSearch } from "react-icons/bi";
import "./ToDoSearch.css"

function ToDoSearch({searchValue, setSearchValue}){

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