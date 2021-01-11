import { Provider } from "react-redux";
import store from "./store";
import TodoList from "./components/todo-list";
import TodoForm from "./components/todo-form";

export default function App() {
  return (
    <Provider store={store}>
      <h1>TODOS</h1>
      <TodoForm />
      <TodoList />
    </Provider>
  );
}
