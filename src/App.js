import { useEffect, useRef, useState } from "react";
import "./App.css";

const ENDPOINT = "https://tc-todo-2022.herokuapp.com/todos";

function AfegirTodo({ onTodoAdded, onTodoRefresh }) {
  const titleRef = useRef();
  const detailsRef = useRef();

  return (
    <>
      <form
        className="form-style"
        onSubmit={(e) => {
          e.preventDefault();
          const title = titleRef.current.value;
          const details = detailsRef.current.value;

          fetch(ENDPOINT, {
            method: "POST",
            body: JSON.stringify({
              title: title,
              details: details,
            }),
          })
            .then((reponse) => reponse.json())
            .then((json) => onTodoAdded(json));
          titleRef.current.value = "";
          detailsRef.current.value = "";
        }}
      >
        <label className="label-styles">Titol TODO</label>
        <input ref={titleRef} />
        <label className="label-styles"> Detalls TODO </label>
        <input ref={detailsRef} />
        <input type="submit" value="Afegir" id="submit-boto" />
      </form>
      <button
        className="boto-refresh"
        onClick={() => getTodos().then(onTodoRefresh)}
      >
        {" "}
        Carrega TODO's
      </button>
    </>
  );
}
function TodoItem({ todo, onUpdated }) {
  return (
    <li
      className={todo.completed ? "completed" : "pending"}
      onClick={() => {
        fetch(`${ENDPOINT}/${todo.id}`, {
          method: "POST",
          body: JSON.stringify({ completed: !todo.completed }),
        })
          .then((response) => response.json())
          .then((json) => onUpdated(json));
      }}
    >
      <span className=" text-form "> Títol: </span> {todo.title} -
      <span className=" text-form "> Detalls: </span>
      {todo.details}
    </li>
  );
}

export function getTodos() {
  return fetch(ENDPOINT).then((response) => response.json());
}

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    getTodos().then(setTodos);
    const intervalID = setInterval(() => {
      getTodos().them(setTodos);
    }, 60000);
    return () => clearInterval(intervalID);
  }, []);
  return (
    <>
      <header className="App App-header">
        <h2> Gestió de TODO's</h2>
      </header>
      <div className="Container">
        <h3 className="titular"> Todos </h3>
        <AfegirTodo
          onTodoAdded={(todo) => setTodos([...todos, todo])}
          onTodoRefresh={(todos) => setTodos(todos)}
        />

        <ul className="llista">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onUpdated={(updatedTodo) =>
                setTodos(
                  todos.map((currentTodo) =>
                    currentTodo.id === updatedTodo.id
                      ? updatedTodo
                      : currentTodo
                  )
                )
              }
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
