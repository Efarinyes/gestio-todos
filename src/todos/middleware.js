import {
  addTodo,
  REQUEST_DELETE_TODO,
  replaceTodos,
  REQUEST_ADD_TODO,
  REQUEST_TODOS,
  REQUEST_UPDATE_TODO,
  updateTodo,
  deleteTodo,
} from "./actions";
import {
  getTodos,
  postNewTodo,
  postUptadedTodo,
  deleteCurrentTodo,
} from "./todosAPI";

export const todosMiddleware = (store) => (next) => async (action) => {
  next(action);
  if (action.type === REQUEST_TODOS) {
    const todos = await getTodos();
    store.dispatch(replaceTodos(todos));
  }

  if (action.type === REQUEST_ADD_TODO) {
    const todo = await postNewTodo(action.todo);
    store.dispatch(addTodo(todo));
  }

  if (action.type === REQUEST_UPDATE_TODO) {
    const todo = await postUptadedTodo(action.todo);
    store.dispatch(updateTodo(todo));
  }

  if (action.type === REQUEST_DELETE_TODO) {
    const todo = await deleteCurrentTodo(action.todo);
    store.dispatch(deleteTodo(todo));
  }
};
