const ENDPOINT = "https://tc-todo-2022.herokuapp.com/todos";

export function getTodos() {
  return fetch(ENDPOINT).then((response) => response.json());
}
export function postNewTodo(todo) {
  return fetch(ENDPOINT, {
    method: "POST",
    body: JSON.stringify({
      title: todo.title,
      details: todo.details,
    }),
  }).then((reponse) => reponse.json());
}
export function postUptadedTodo(todo) {
  return fetch(`${ENDPOINT}/${todo.id}`, {
    method: "POST",
    body: JSON.stringify(todo),
  }).then((response) => response.json());
}
