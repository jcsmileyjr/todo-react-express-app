import "./todo.css"
import DeleteImage from "../../assets/delete.png";

const Todo = () => {
    return(
        <div className="todo--container">
          <div className="todo__content--container">
            <input className="todo__checkbox--style" type="checkbox" id="1" name="vehicle1" value="Todo Item 1" />
            <label htmlFor="vehicle1"> Todo Item 1</label>
          </div>
          <img className="todo__deleteImage--style" src={DeleteImage} alt="" />
        </div>
    )
};

export default Todo;