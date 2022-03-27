import { ADD_TODO, UPDATE_TODO, REPLACE_TODOS } from "./actions";

export const initialState = [];
export function reduceTodos(state = initialState, action) {

  switch (action.type) {
    case ADD_TODO:
      return [...state, action.todo];
    case UPDATE_TODO:
      return state.map((curreentTodo) => curreentTodo.id === action.todo.id ? action.todo : curreentTodo
      );
    case REPLACE_TODOS:
      return action.todos;
    default:
      return state;
  }
}
