import "./App.css";
import { Todos, requestTodos } from "./todos";
import { store } from "./store";
import { Provider } from "react-redux";

store.dispatch(requestTodos());

export default function App() {
  return (
    <Provider store={store}>
      <Todos />
    </Provider>
  );
}
