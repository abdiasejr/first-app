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
import { ToDoError } from "../ToDoError"
import { ToDoLoading } from "../ToDoLoading";
import { EmptyToDos } from "../EmptyToDos"


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
    </React.Fragment>
  );
}

export { AppUI };
