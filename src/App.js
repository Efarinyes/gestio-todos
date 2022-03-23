import { useEffect, useRef, useState } from "react";
import "./App.css";

const ENPOINT = "https://tc-todo-2022.herokuapp.com/todos";

function AfegirTodo({ onTodoAdded }) {
  const titleRef = useRef();
  const detailsRef = useRef();

  return (
    <form
      className = 'form-style'
      onSubmit={(e) => {
        e.preventDefault();
        const title = titleRef.current.value;
        const details = detailsRef.current.value;


        fetch(ENPOINT, {
          method: 'POST',
          body: JSON.stringify({
            title: title,
            details: details
          }),
        })
          .then((reponse) => reponse.json())
          .then((json) => onTodoAdded(json));
        titleRef.current.value = '';
        detailsRef.current.value = '';
      }}
    >
      <label className = 'label-styles'>Titol TODO</label>
      <input ref={titleRef} />
      <label className = 'label-styles'> Detalls TODO </label>
      <input ref={detailsRef} />
      <input type="submit" value="Afegir" />
    </form>
  );
}
function TodoItem({ todo }) {
  return (
    <li>
      <span className=' text-form '> Títol: </span>  {todo.title} - <span className=' text-form '> Detalls: </span>   {todo.details}
    </li>
  )
}

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch(ENPOINT)
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
        <AfegirTodo onTodoAdded={todo => setTodos([...todos, todo])} />
        
        <ul className = 'llista'>
          {todos.map((todo) => (
              <TodoItem key={todo.id} todo = { todo } />
          ))}
        </ul>

        
      </div>
    </>
  );
}

export default App;
