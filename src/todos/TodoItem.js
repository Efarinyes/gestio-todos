import { useState } from "react";
import ReactModal from "react-modal";
import { UpdateCurrentTodo } from "./UpdateCurrentTodo";
ReactModal.setAppElement("#main");

export function TodoItem({ todo, onTodoUpdate, onDeleteTodo }) {
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
          <h2> Editar TODO</h2>
          <UpdateCurrentTodo
            todo={todo}
            onTodoUpdate={onTodoUpdate}
            mostraModalEditar={mostraModalEditar}
            setMostraModalEditar={setMostraModalEditar}
          />

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
          <h2>Borrar aquest TODO ?</h2>
          <h4>
            {" "}
            <em>Titol: </em> "{todo.title}"
          </h4>
          <h5>
            {" "}
            <em>Detalls: </em> "{todo.details}"{" "}
          </h5>
          <button
            onClick={() => {
              onDeleteTodo(todo);
              setMostrarModalBorrar(false);
            }}
          >
            Borra{" "}
          </button>
          <button onClick={() => setMostrarModalBorrar(false)}> Tanca </button>
        </ReactModal>
      </div>
    </>
  );
}
