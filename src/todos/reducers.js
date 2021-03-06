import { ADD_TODO, UPDATE_TODO, REPLACE_TODOS, DELETE_TODO } from "./actions";

export const initialState = [];
export function reduceTodos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.todo];
    case UPDATE_TODO:
      return state.map((currentTodo) =>
        currentTodo.id === action.todo.id ? action.todo : currentTodo
      );
    case REPLACE_TODOS:
      return action.todos;

    case DELETE_TODO:
      return state.filter((currentTodo) => currentTodo.id !== action.todo.id);
    default:
      return state;
  }
}
