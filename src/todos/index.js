import { useEffect, useState } from "react";
import { AfegirTodo } from "./AfegirTodo";
import { TodoList } from "./TodoList";
import { getTodos } from "./todosAPI";

const initialState = [];

function reduceTodos(state = initialState, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.todo];
    case "UPDATE_TODO":
      return state.map((curreentTodo) =>
        curreentTodo.id === action.todo.id ? action.todo : curreentTodo
      );
    case "REPLACE_TODOS":
      return action.todos;
    default:
      return state;
  }
}

export function Todos() {
  const [todos, setTodos] = useState(initialState);

  const onTodoRefresh = (todos) => setTodos(todos);
  const refreshTodos = () =>
    getTodos().then((allTodos) =>
      reduceTodos(todos, { type: "REPLACE_TODOS", todo: allTodos })
    );

  useEffect(() => {
    getTodos().then(setTodos);
    const intervalID = setInterval(() => {
      getTodos().then(setTodos);
    }, 60000);
    return () => clearInterval(intervalID);
  }, []);

  const onTodoAdded = (todo) =>
    setTodos(reduceTodos(todos, { type: "ADD_TODO", todo }));
  const onTodoUpdated = (updatedTodo) =>
    setTodos(reduceTodos(todos, { type: "UPDATE_TODO", todo: updatedTodo }));

  return (
    <>
      <header className="App App-header">
        <h2> Gestió de TODO's</h2>
      </header>

      <div className="Container">
        <h3 className="titular"> Todos </h3>
        <AfegirTodo onTodoAdded={onTodoAdded} onTodoRefresh={onTodoRefresh} />
        <button className="boto-refresh" onClick={refreshTodos}>
          {" "}
          Refresca
        </button>

        <TodoList todos={todos} onUpdated={onTodoUpdated} />
      </div>
    </>
  );
}
