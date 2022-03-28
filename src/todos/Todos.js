import { useEffect, useReducer} from "react";
import { AfegirTodo } from "./AfegirTodo";
import { replaceTodos, addTodo, updateTodo } from "./actions";
import { TodoList } from "./TodoList";
import { getTodos } from "./todosAPI";
import { initialState, reduceTodos } from "./reducers";


export function Todos() {
  const [todos, dispatch] = useReducer( reduceTodos, initialState);

  // const onTodoRefresh = (todos) => dispatch(replaceTodos(todos));
  const refreshTodos = () => getTodos().then((allTodos) => dispatch( replaceTodos(allTodos)));

  useEffect(() => {
    getTodos()
    const intervalID = setInterval(() => {
      getTodos()
    }, 60000);
    return () => clearInterval(intervalID);
  }, []);

  const onTodoAdded = (todo) => dispatch( addTodo(todo));
  const onTodoUpdated = (updatedTodo) => dispatch( updateTodo(updatedTodo));

  return (
    <>
      <header className="App App-header">
        <h2> Gestió de TODO's</h2>
      </header>

      <div className="Container">
        <h3 className="titular"> Todos </h3>
        <AfegirTodo onTodoAdded={onTodoAdded} onTodoRefresh={refreshTodos} />
        <button className="boto-refresh" onClick={refreshTodos}>
          {" "}
          Refresca
        </button>

        <TodoList todos={todos} onUpdated={onTodoUpdated} />
      </div>
    </>
  );
}
