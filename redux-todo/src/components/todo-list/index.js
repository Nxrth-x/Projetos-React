import { useSelector } from "react-redux";

export default function TodoList() {
  const todos = useSelector(({ data }) => data);

  return (
    <ul>
      {todos.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
