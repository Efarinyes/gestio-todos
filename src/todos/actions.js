export const REQUEST_TODOS = "todos/REQUEST_TODOS";
export function requestTodos() {
  return { type: REQUEST_TODOS };
}

export const REPLACE_TODOS = "todos/REPLACE_TODOS";
export function replaceTodos(todos) {
  return { type: REPLACE_TODOS, todos };
}
export const UPDATE_TODO = "todos/UPDATE_TODO";
export function updateTodo(updatedTodo) {
  return { type: UPDATE_TODO, todo: updatedTodo };
}

export const REQUEST_UPDATE_TODO = "todos/REQUEST_UPDATE_TODO";
export function requestUpdateTodo(updatedTodo) {
  return { type: REQUEST_UPDATE_TODO, todo: updatedTodo };
}

export const ADD_TODO = "todos/ADD_TODO";
export function addTodo(todo) {
  return { type: ADD_TODO, todo };
}
export const REQUEST_ADD_TODO = "todos/REQUEST_ADD_TODO";
export function requestAddTodo(todo) {
  return { type: REQUEST_ADD_TODO, todo };
}

export const REQUEST_DELETE_TODO = "todos/REQUEST_DELETE_TODO";
export function requestDeleteTodo(todo) {
  return { type: REQUEST_DELETE_TODO, todo };
}

export const DELETE_TODO = "todos/DELETE_TODO";
export function deleteTodo(todo) {
  return { type: DELETE_TODO, todo };
}
