import "./App.css";
import AddTodo from './components/addTodo/AddTodo.js';
import TodoItem from "./components/todo/Todo.js";

function App() {
  return (
    <div className="App">
      <header>
        <h1>TODO</h1>
      </header>
      <main>
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <AddTodo />
        
      </main>
    </div>
  );
}

export default App;
