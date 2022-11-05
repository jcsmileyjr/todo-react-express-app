import { v4 as uuidv4 } from "uuid";
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
  const [userModalInput, setUserModalInput] = useState("");

  // Update the application, upon start, with the list of Todos
  useEffect(() => {
    getTodo();
  }, []);

  // Method that when clicked, will find that todo and change the status to "done"
  const updateTodoStatus = (todoID) => {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === todoID) {
          if (todo.status === "in-progress") {
            todo.status = "done";
          } else {
            todo.status = "in-progress";
          }
          return todo;
        } else {
          return todo;
        }
      })
    );
  };

  // Method that when clicked, will find and delete the todo
  const deleteTodoFromList = (todoID) => {
    setTodoList(todoList.filter((todo) => todo.id !== todoID));
  };

  // Method that will create a new TODO item and add to TodoList.
  const createNewTodo = (userContent) => {
    let blankTodo = {
      content: userContent,
      status: "in-progress",
      id: uuidv4(),
    };

    setTodoList([...todoList, blankTodo]);
  };

  // Method to update the application state with the current list of Todos
  const getTodo = () => {
    fetch('/v1/todo/data')
      .then((response) => response.json())
      .then((data) => setTodoList(data));
    // const currentTodoList = dummyData;
    // setTodoList(currentTodoList);
  };

  // Method to open the "add new TODO" modal
  const openModal = () => {
    setIsOpen(true);
  };

  // Method to close the "add new Todo" modal, create a new Todo, and reset the Modal state
  const closeModal = () => {
    createNewTodo(userModalInput);
    setIsOpen(false);
    setUserModalInput("");
  };

  return (
    <div className="App">
      <header>
        <h1>TODO</h1>
      </header>
      <main>
        {/*Display Todo items */}
        {todoList.map((todo) => (
          <TodoItem
            todo={todo}
            deleteTodo={deleteTodoFromList}
            updateTodo={updateTodoStatus}
            key={todo.id}
          />
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
          <input
            onChange={(e) => {
              setUserModalInput(e.target.value);
            }}
            className="modal__input--style"
            type="text"
            name="todoInput"
            value={userModalInput}
          />
          <button className="card__button--style" onClick={closeModal}>
            close
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default App;
