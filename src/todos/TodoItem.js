import { useState, useEffect } from 'react';
import ReactModal from 'react-modal';
ReactModal.setAppElement('#main');

export function TodoItem({ todo, onTodoUpdate }) {   

  return (
    <>
      <div className="container-todo">
        <button className="editar-button"> Editar Todo</button>
        <li
          className={todo.completed ? "completed" : "pending"}
          onClick={() => onTodoUpdate({ ...todo, completed: !todo.completed })}
        >
          <span className=" text-form "> Títol: {todo.title} </span>
          <span className=" text-form ">Detalls: {todo.details}</span>
        </li>
        <button className="borrar-todo"> Borrar Todo</button>
      </div>
    </>
  );
}
