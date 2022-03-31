import { useState, useRef } from "react";

export function UpdateCurrentTodo({
  todo,
  onTodoUdate,
  mostraModalEditar,
  setMostrarModalEditar,
}) {
  const titleRef = useRef();
  const detailsRef = useRef();
  const [titol, setTitol] = useState(todo.title);
  const [detalls, setDetalls] = useState(todo.details);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const title = titleRef.current.value;
        const details = detailsRef.current.value;
        titleRef.current.value = todo.title;
        detailsRef.current.value = todo.details;
        onTodoUdate({ ...todo, title, details });
        setMostrarModalEditar(true);
      }}
    ></form>
  );
}
