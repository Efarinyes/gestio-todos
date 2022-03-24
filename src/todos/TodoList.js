import { TodoItem } from "./TodoItem";

export function TodoList({ todos, onUpdated }) {
  return (
    <ul className="llista">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onUpdated={onUpdated} />
      ))}
    </ul>
  );
}
