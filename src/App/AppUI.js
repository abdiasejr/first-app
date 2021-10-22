import React, { useContext } from "react";
import { ToDoContext } from "../ToDoContext";
import { ToDoCounter } from "../ToDoCounter";
import { ToDoList } from "../ToDoList";
import { ToDoItem } from "../ToDoItem";
import { ToDoSearch } from "../ToDoSearch";
import { CreateToDoButtom } from "../CreateToDoButtom";
import { ToDoHeader } from "../ToDoHeader";

function AppUI() {
  const { error, loading, searchedToDos, toggleCompleteToDo, deleteToDo } =
    useContext(ToDoContext);
  return (
    <React.Fragment>
      <ToDoHeader />
      <ToDoCounter />
      <ToDoSearch />
      <ToDoList>
        {error && <p>Desespérate, hubo un error...</p>}
        {loading && <p>Estamos cargando, no desesperes...</p>}
        {!loading && !searchedToDos.length && <p>¡Crea un nuevo TODO!</p>}

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

export { AppUI };
