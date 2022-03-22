import { useEffect, useRef, useState } from "react";
import "./App.css";

function AfegirTodo() {
  const titleRef = useRef();
  const detailsRef = useRef();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const title = titleRef.current.value;
        const details = detailsRef.current.value;

        title.current.value = "";
        details.current.value = "";
      }}
    >
      <label>Titol TODO</label>
      <input ref={titleRef} />
      <label> Detalls TODO </label>
      <input ref={detailsRef} />
      <input type="submit" value="Afegir" />
    </form>
  );
}

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("https://tc-todo-2022.herokuapp.com/todos")
      .then((response) => response.json())
      .then((json) => setTodos(json));
  });
  return (
    <>
      <header className="App App-header">
        <h3> Gestió de TODO's</h3>
      </header>
      <div className="Container">
        <h4> Todos </h4>
        <ul>
          {todos.map((todo) => (
            <>
              <li key={todo.id}>
                {todo.title} - {todo.details}
              </li>
            </>
          ))}
        </ul>

        <AfegirTodo />
      </div>
    </>
  );
}

export default App;
