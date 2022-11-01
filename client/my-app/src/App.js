import { React, useState, useEffect } from "react";
import dummyData from "./development-data/dummyData.json";
import "./App.css";
import AddTodo from "./components/addTodo/AddTodo.js";
import TodoItem from "./components/todo/Todo.js";

function App() {
  const [todoList, setTodoList] = useState([]); // Current Todo items displayed

  // Update the application, upon start, with the list of Todos
  useEffect(() => {
    getTodo();
  }, []);

  // Method to update the application state with the current list of Todos
  const getTodo = () => {
    const currentTodoList = dummyData;
    setTodoList(currentTodoList);
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
        <AddTodo />
      </main>
    </div>
  );
}

export default App;
