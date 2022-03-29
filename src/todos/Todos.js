import { useEffect, useReducer } from "react";
import { AfegirTodo } from "./AfegirTodo";
import { replaceTodos, addTodo, updateTodo, requestTodos } from "./actions";
import { TodoList } from "./TodoList";
import { getTodos } from "./todosAPI";
import { initialState, reduceTodos } from "./reducers";
import { useDispatch, useSelector } from "react-redux";

function selectTodos(state) {
  return state.todos
}

export function Todos() {

  const todos = useSelector(selectTodos)

  // const [todos] = useReducer(reduceTodos, initialState);
  const dispatch = useDispatch();

  // const onTodoRefresh = (todos) => dispatch(replaceTodos(todos));
  const refreshTodos = () =>
     dispatch(requestTodos());

  useEffect(() => {
    // getTodos().then((all) => dispatch(replaceTodos(all)));
    // refreshTodos()
    const intervalID = setInterval(() => {
      refreshTodos();
    }, 60000);
    return () => clearInterval(intervalID);
  }, []);

  const onTodoAdded = (todo) => dispatch(addTodo(todo));
  const onTodoUpdated = (todo) => dispatch(updateTodo(todo));

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
