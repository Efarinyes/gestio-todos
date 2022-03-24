import { postUptadedTodo } from "./todosAPI";

export function TodoItem({ todo, onUpdated }) {
  return (
    <li
      className={todo.completed ? "completed" : "pending"}
      onClick={() => {
        postUptadedTodo(todo).then((json) => onUpdated(json));
      }}
    >
      <span className=" text-form "> Títol: </span> {todo.title} -
      <span className=" text-form "> Detalls: </span>
      {todo.details}
    </li>
  );
}
