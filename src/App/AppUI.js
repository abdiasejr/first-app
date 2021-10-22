import React from "react";
import { ToDoCounter } from "../ToDoCounter";
import { ToDoList } from "../ToDoList";
import { ToDoItem } from "../ToDoItem";
import { ToDoSearch } from "../ToDoSearch";
import { CreateToDoButtom } from "../CreateToDoButtom";
import { ToDoHeader } from "../ToDoHeader";

function AppUI({
    completedToDos, 
    totalToDos, 
    searchValue, 
    searchedToDos, 
    setSearchValue, 
    toggleCompleteToDo, 
    deleteToDo
}) {
    return (
    <React.Fragment>
      <ToDoHeader />
      <ToDoCounter 
        completed={completedToDos}  
        total={totalToDos}
      />
      <ToDoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <ToDoList> 
        {searchedToDos.map((toDo) => (
          <ToDoItem 
            text={toDo.text} 
            completed={toDo.completed} 
            key={toDo.text}
            onComplete={() => toggleCompleteToDo(toDo.text)}
            onDelete={() => deleteToDo(toDo.text)}
          />
        ))}
        </ToDoList>
      {<CreateToDoButtom />}
    </React.Fragment>
    );
}

export { AppUI }