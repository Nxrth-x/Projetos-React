import { useState } from "react";
import { useDispatch } from "react-redux";

export default function TodoForm() {
  const [todoName, setTodoName] = useState("");
  const dispatch = useDispatch();

  const handleChange = ({ target: { value } }) => setTodoName(value);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (todoName.length > 0) {
      dispatch({
        type: "ADD_TODO",
        title: todoName,
      });
      setTodoName("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={todoName} onChange={handleChange} />
      <button>Adicionar</button>
    </form>
  );
}
