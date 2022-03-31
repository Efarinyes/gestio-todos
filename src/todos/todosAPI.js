const ENDPOINT = "https://tc-todo-2022.herokuapp.com/todos";

export async function getTodos() {
  return fetch(ENDPOINT).then((response) => response.json());
}
export async function postNewTodo(todo) {
  return fetch(ENDPOINT, {
    method: "POST",
    body: JSON.stringify({
      title: todo.title,
      details: todo.details,
    }),
  }).then((reponse) => reponse.json());
}
export async function postUptadedTodo(todo) {
  return fetch(`${ENDPOINT}/${todo.id}`, {
    method: "POST",
    body: JSON.stringify(todo),
  }).then((response) => response.json());
}

export async function deleteCurrentTodo(todo) {
  return fetch(`${ENDPOINT}/${todo.id}`, {
    method: "DELETE",
  }).then((response) => response.json());
}
