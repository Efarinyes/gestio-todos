import { useState, useRef } from "react";

export function UpdateCurrentTodo({
  todo,
  onTodoUpdate,
  mostraModalEditar,
  setMostraModalEditar,
}) {
  const titleRef = useRef();
  const detailsRef = useRef();
  const [titol, setTitol] = useState(todo.title);
  const [detalls, setDetalls] = useState(todo.details);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const title = titleRef.current.value;
          const details = detailsRef.current.value;
          titleRef.current.value = todo.title;
          detailsRef.current.value = todo.details;
          onTodoUpdate({ ...todo, title, details });
          setMostraModalEditar(false);
        }}
      >
        {"Titol: "}
        <input
          ref={titleRef}
          value={titol}
          onChange={(e) => setTitol(e.target.value)}
        />
        <br />
        {"Detalls: "}
        <input
          ref={detailsRef}
          value={detalls}
          onChange={(e) => setDetalls(e.target.details)}
        />
        <br />
        <input type="submit" value="Modificar" className="modificar" />
      </form>
    </>
  );
}
