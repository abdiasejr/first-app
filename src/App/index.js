import React from "react";
import { useToDos } from "../CustomHooks/UseToDos";
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
import { SiTodoist } from "react-icons/si"

function App() {

  const { 
    error, 
    loading, 
    searchedToDos, 
    toggleCompleteToDo, 
    deleteToDo, 
    openModal, 
    totalToDos, 
    completedToDos,
    searchValue, 
    setSearchValue,
    addToDo, 
    setOpenModal,
  } = useToDos();

  return (
    // Render de nuestro componentes o más bien los retorna cuando sean solicitados para renderizar en el dom
    <React.Fragment>
      <ToDoHeader >
        <header className="toDoHeader">
            <a href="index.html"> <SiTodoist /> ToDo Machine </a>
        </header>
        <ToDoCounter 
          totalToDos={totalToDos}
          completedToDos={completedToDos}
          loading={loading}
        />
        <ToDoSearch 
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          loading={loading}
        />
      </ToDoHeader>
      <ToDoList 
        
        error={error}
        loading={loading}
        searchedToDos={searchedToDos}
        totalToDos={totalToDos}
        searchValue={searchValue}

        onError={() => <ToDoError />}
        onLoading={() => <ToDoLoading />}
        onEmpty={() => <EmptyToDos />}
        onEmptySearch={(searchText) => (<p>There's no results for {searchText}</p>)}
      >
        {toDo => (
          <ToDoItem
            text={toDo.text}
            completed={toDo.completed}
            key={toDo.text}
            onComplete={() => toggleCompleteToDo(toDo.text)}
            onDelete={() => deleteToDo(toDo.text)}
          />
        )}
      </ToDoList>
      {!!openModal && (
        <Modal>
          <ToDoForm 
            addToDo={addToDo} 
            setOpenModal={setOpenModal}  
          />
        </Modal>
      )}
      <CreateToDoButtom 
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
      <ToDoFooter />
    </React.Fragment>
  );
}

export default App;
