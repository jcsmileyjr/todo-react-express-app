import Modal from "react-modal";
import { React, useState, useEffect } from "react";
import dummyData from "./development-data/dummyData.json";
import "./App.css";
import AddTodo from "./components/addTodo/AddTodo.js";
import TodoItem from "./components/todo/Todo.js";

const customStyles = {
  content: {
    top: "25%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "70%",
  },
};

function App() {
  const [todoList, setTodoList] = useState([]); // Current Todo items displayed
  const [modalIsOpen, setIsOpen] = useState(false);

  // Update the application, upon start, with the list of Todos
  useEffect(() => {
    getTodo();
  }, []);

  // Method to update the application state with the current list of Todos
  const getTodo = () => {
    const currentTodoList = dummyData;
    setTodoList(currentTodoList);
  };

  const openModal = () => {
    console.log("open model");
    setIsOpen(true);
  };

  const closeModal = () => {
    console.log("close modal");
    setIsOpen(false);
  };

  return (
    <div className="App">
      <header>
        <h1>TODO</h1>
      </header>
      <main>
        {/*Display Todo items */}
        {todoList.map((todo) => (
          <TodoItem key={todo.id} />
        ))}

        {/*Display button to add a new todo */}
        <AddTodo open={() => openModal()} />
      </main>

      {/*Pop up modal to create a new TODO item */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Pop up modal to create a new TODO task"
        ariaHideApp={false}
      >
        <h2 className="modal__title--style">Type in a new Todo</h2>
        <div className="modal__button--container">
          <input className="modal__input--style" type="text" name="todoInput" />
          <button className="card__button--style" onClick={closeModal}>
            close
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default App;
