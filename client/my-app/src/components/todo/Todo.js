import {React} from 'react';
import "./todo.css"
import DeleteImage from "../../assets/delete.png";

const Todo = ({updateTodo, deleteTodo, todo}) => {
    return(
        <div className="todo--container">
          <div className="todo__content--container">
            <input onChange={() => updateTodo(todo.id)} checked={todo.status==='in-progress'?false:true} className="todo__checkbox--style" type="checkbox" id="1" name="todoCheckbox" value={todo.content} />
            <label htmlFor="todoCheckbox"> {todo.content}</label>
          </div>
          <img onClick={() => deleteTodo(todo.id)} className="todo__deleteImage--style" src={DeleteImage} alt="" />
        </div>
    )
};

export default Todo;