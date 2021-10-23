import { useState, createContext } from "react";
import { useLocalStorage } from "../CustomHooks/useLocalStorage";

const ToDoContext = createContext();

function ToDoProvider(props){
    const {
        item: toDos,
        saveItem: saveToDos,
        loading,
        error,
      } = useLocalStorage("TODOS_V1", []);
    
      const [searchValue, setSearchValue] = useState("");
      const [openModal, setOpenModal] = useState(false);

      const completedToDos = toDos.filter((toDo) => !!toDo.completed).length;
      const totalToDos = toDos.length;
    
      let searchedToDos = [];
    
      if (!searchValue.length >= 1) {
        searchedToDos = toDos;
      } else {
        searchedToDos = toDos.filter((toDo) => {
          const toDoText = toDo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
          return toDoText.includes(searchText);
        });
      }
       
      const addToDo = (text) => {
        const newTodos = [...toDos];
        newTodos.push({
            completed: false,
            text,
        });
        saveToDos(newTodos);
      };

      const toggleCompleteToDo = (text) => {
        const toDoIndex = toDos.findIndex((toDo) => toDo.text === text);
        const newToDos = [...toDos];
        newToDos[toDoIndex].completed = !toDos[toDoIndex].completed;
        saveToDos(newToDos);
      };
    
      const deleteToDo = (text) => {
        const toDoIndex = toDos.findIndex((toDo) => toDo.text === text);
        const newTodos = [...toDos];
        newTodos.splice(toDoIndex, 1);
        saveToDos(newTodos);
      };
    return (
      <ToDoContext.Provider value={{
        error,
        loading,
        completedToDos,
        totalToDos,
        searchValue,
        setSearchValue,
        searchedToDos,
        addToDo,
        toggleCompleteToDo,
        deleteToDo,
        openModal,
        setOpenModal,
      }}>
          {props.children}
      </ToDoContext.Provider>
    );
}


export { ToDoContext, ToDoProvider}