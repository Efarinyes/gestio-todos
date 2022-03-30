import { useState } from "react";
import ReactModal from "react-modal";
ReactModal.setAppElement("#main");

export function TodoItem({ todo, onTodoUpdate }) {
  const [mostraModalEditar, setMostraModalEditar] = useState(false);
  const [mostrarModalBorrar, setMostrarModalBorrar] = useState(false);

  return (
    <>
      <div className="container-todo">
        <button
          className="editar-button"
          onClick={() => setMostraModalEditar(true)}
        >
          Editar TODO{" "}
        </button>
        <ReactModal isOpen={mostraModalEditar} className="Modal">
          <h1> SOc una finestra modal</h1>
          <button onClick={() => setMostraModalEditar(false)}> Tanca </button>
        </ReactModal>
        <li
          className={todo.completed ? "completed" : "pending"}
          onClick={() => onTodoUpdate({ ...todo, completed: !todo.completed })}
        >
          <span className=" text-form "> Títol: {todo.title} </span>
          <span className=" text-form ">Detalls: {todo.details}</span>
        </li>
        <button
          className="borrar-todo"
          onClick={() => setMostrarModalBorrar(true)}
        >
          {" "}
          Borrar TODO{" "}
        </button>
        <ReactModal
          isOpen={mostrarModalBorrar}
          className="Modal"
          contentLabel="Minimal Modal Example"
        >
          <h1> Soc un Altre Modal </h1>
          <button onClick={() => setMostrarModalBorrar(false)}> Tanca </button>
        </ReactModal>
      </div>
    </>
  );
}
