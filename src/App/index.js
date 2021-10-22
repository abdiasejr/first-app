import React, { useState } from "react";
import { AppUI } from "./AppUI";

const defaultToDos = [
  { text: "Get new shoes", completed: false },
  { text: "Go to swim", completed: false },
  { text: "Call my mom", completed: true },
  { text: "Practice for checkpoint", completed: false },
];

function App() {

  const [toDos, setToDos] = useState(defaultToDos);
  const  [searchValue, setSearchValue] = useState('');

  const completedToDos = toDos.filter(toDo => !!toDo.completed).length;
  const totalToDos = toDos.length;

  let searchedToDos = [];

  if(!searchValue.length>= 1){
    searchedToDos  = toDos;
  } else {
    searchedToDos = toDos.filter(toDo => {
      const toDoText = toDo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return toDoText.includes(searchText);
    });
  }

  const toggleCompleteToDo = (text) => {
    const toDoIndex = toDos.findIndex(toDo => toDo.text === text);
    const newToDos = [...toDos]
    newToDos[toDoIndex].completed = !toDos[toDoIndex].completed;
    setToDos(newToDos);
  } 

  const deleteToDo = (text) => {
    const toDoIndex = toDos.findIndex(toDo => toDo.text === text);
    const newTodos = [...toDos];
    newTodos.splice(toDoIndex, 1);
    setToDos(newTodos);
  }
  return (
    <AppUI 
      completedToDos={completedToDos}  
      totalToDos={totalToDos} 
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedToDos={searchedToDos}
      toggleCompleteToDo={toggleCompleteToDo}
      deleteToDo={deleteToDo}
    />
  )
}

export default App;
