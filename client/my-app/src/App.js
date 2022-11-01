import "./App.css";
import DeleteImage from "./assets/delete.png";
import AddImage from "./assets/add.png";

function App() {
  return (
    <div className="App">
      <header>
        <h1>TODO</h1>
      </header>
      <main>
        <div className="todo--container">
          <div className="todo__content--container">
            <input className="todo__checkbox--style" type="checkbox" id="1" name="vehicle1" value="Todo Item 1" />
            <label for="vehicle1"> Todo Item 1</label>
          </div>
          <img className="todo__deleteImage--style" src={DeleteImage} alt="" />
        </div>
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
