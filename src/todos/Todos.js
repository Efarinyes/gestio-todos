import { useEffect } from "react";
import { AfegirTodo } from "./AfegirTodo";
import {
  requestAddTodo,
  requestUpdateTodo,
  requestTodos,
  requestDeleteTodo,
} from "./actions";
import { TodoList } from "./TodoList";
import { useDispatch, useSelector } from "react-redux";
import { selectTodos } from "./selectors";

export function Todos() {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  useEffect(() => {
    const intervalID = setInterval(() => {
      refreshTodos();
    }, 60000);
    return () => clearInterval(intervalID);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const refreshTodos = () => dispatch(requestTodos());
  const onAddTodo = (todo) => dispatch(requestAddTodo(todo));
  const onTodoUpdate = (todo) => dispatch(requestUpdateTodo(todo));
  const onDeleteTodo = (todo) => dispatch(requestDeleteTodo(todo));

  return (
    <>
      <header className="App App-header">
        <h2> Gestió de TODO's</h2>
      </header>

      <div className="Container">
        <AfegirTodo onAddTodo={onAddTodo} onTodoRefresh={refreshTodos} />

        <button className="boto-refresh" onClick={refreshTodos}>
          {" "}
          Refresca
        </button>

        <TodoList
          todos={todos}
          onTodoUpdate={onTodoUpdate}
          onDeleteTodo={onDeleteTodo}
        />
      </div>
    </>
  );
}
