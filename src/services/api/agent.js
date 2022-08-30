import request from "./base";

const Todo = {
  getTodos: () => request.get('todos'),
  postTodo: (data) => request.post('todos', data),
  deleteTodo: (id) => request.delete(`todos/${id}`),
  patchTodo: (id, data) => request.patch(`todos/${id}`, data),
}

export {Todo}