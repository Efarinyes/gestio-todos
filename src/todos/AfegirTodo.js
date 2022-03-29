import { useRef } from "react";

export function AfegirTodo({ onAddTodo }) {
  const titleRef = useRef();
  const detailsRef = useRef();

  return (
    <form
      className="form-style"
      onSubmit={(e) => {
        e.preventDefault();
        const title = titleRef.current.value;
        const details = detailsRef.current.value;
        onAddTodo({ title, details });
        // postNewTodo(title, details).then((json) => onTodoAdded(json));
        titleRef.current.value = "";
        detailsRef.current.value = "";
      }}
    >
      <label className="label-styles">Titol </label>
      <input ref={titleRef} />
      <label className="label-styles"> Detalls </label>
      <input ref={detailsRef} />
      <input type="submit" value="Afegir" id="submit-boto" />
    </form>
  );
}
