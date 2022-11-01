import "./App.css";
import AddImage from "./assets/add.png";
import TodoItem from "./components/todo/Todo.js"

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
          <button
            name="addTodo"
            className="addTodo__button--style"
            type="button"
          >
            <img className="addTodo__image--style" src={AddImage} alt="" />
            Add a new TODO item
          </button>
        
      </main>
    </div>
  );
}

export default App;
