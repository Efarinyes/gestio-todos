import { replaceTodos, REQUEST_TODOS } from "./actions";
import { getTodos } from "./todosAPI";

export const todosMiddleware = (store) => (next) => async (action ) => {
    next(action);
    if(action.type === REQUEST_TODOS) {
        const todos = await getTodos();
        store.dispatch(replaceTodos(todos));
    }
}