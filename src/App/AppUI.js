import React, { useContext } from "react";
import { ToDoContext } from "../ToDoContext";
import { ToDoHeader } from "../ToDoHeader";
import { ToDoCounter } from "../ToDoCounter";
import { ToDoSearch } from "../ToDoSearch";
import { ToDoList } from "../ToDoList";
import { ToDoItem } from "../ToDoItem";
import { Modal } from "../Modal"
import { ToDoForm} from "../ToDoForm";
import { ToDoError } from "../ToDoError"
import { ToDoLoading } from "../ToDoLoading";
import { EmptyToDos } from "../EmptyToDos"
import { CreateToDoButtom } from "../CreateToDoButtom";
import { ToDoFooter } from "../ToDoFooter";

function AppUI() {
  // Destructuring para tomar las variables de nuestro contexto de que vamos a utilizar
  const { 
    error, 
    loading, 
    searchedToDos, 
    toggleCompleteToDo, 
    deleteToDo, 
    openModal, 
  } = useContext(ToDoContext);

  return (
    // Render de nuestro componentes o más bien los retorna cuando sean solicitados para renderizar en el dom
    <React.Fragment>
      <ToDoHeader />
      <ToDoCounter />
      <ToDoSearch />
      <ToDoList>
        {error && <ToDoError />}
        {loading && <ToDoLoading />}
        {!loading && !searchedToDos.length && <EmptyToDos />}

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
      <ToDoFooter />
    </React.Fragment>
  );
}

export { AppUI };
