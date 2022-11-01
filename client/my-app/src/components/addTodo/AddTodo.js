import './addTodo.css'
import AddImage from "../../assets/add.png";

const AddTodo = () => {
  return (
    <>
      <button name="addTodo" className="addTodo__button--style" type="button">
        <img className="addTodo__image--style" src={AddImage} alt="" />
        Add a new TODO item
      </button>
    </>
  );
};

export default AddTodo;
