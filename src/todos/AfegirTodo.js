import { useRef } from "react";
import { postNewTodo } from "./todosAPI";

export function AfegirTodo({ onTodoAdded }) {
  const titleRef = useRef();
  const detailsRef = useRef();

  return (
    <form
      className="form-style"
      onSubmit={(e) => {
        e.preventDefault();
        const title = titleRef.current.value;
        const details = detailsRef.current.value;

        postNewTodo(title, details).then((json) => onTodoAdded(json));
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
  );
}
