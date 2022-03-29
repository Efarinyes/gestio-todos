import { TodoItem } from "./TodoItem";

export function TodoList({ todos, onTodoUpdate }) {
  return (
    <ul className="llista">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onTodoUpdate={onTodoUpdate} />
      ))}
    </ul>
  );
}
