import React, { useContext } from "react";
import { ToDoContext } from "../ToDoContext";
import { ToDoHeader } from "../ToDoHeader";
import { ToDoCounter } from "../ToDoCounter";
import { ToDoSearch } from "../ToDoSearch";
import { ToDoList } from "../ToDoList";
import { ToDoItem } from "../ToDoItem";
import { CreateToDoButtom } from "../CreateToDoButtom";
import { Modal } from "../Modal"
import { ToDoForm} from "../ToDoForm";

function AppUI() {
  const { 
    error, 
    loading, 
    searchedToDos, 
    toggleCompleteToDo, 
    deleteToDo, 
    openModal, 
  } = useContext(ToDoContext);

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
      {!!openModal && (
        <Modal>
          <ToDoForm />
        </Modal>
      )}
      <CreateToDoButtom />
    </React.Fragment>
  );
}

export { AppUI };
