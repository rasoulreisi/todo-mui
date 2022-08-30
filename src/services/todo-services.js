import {Todo} from "./api/agent";

export const fetchTodos = async () => {
  try {
    const res = await Todo.getTodos();
    if (res) {
      return res.data
    }
  } catch (e) {
    console.log(e)
  }
}

export const addTodo = async (data) => {
  try {
    const res = await Todo.postTodo(data);
    if (res) {
      return res.data
    }
  } catch (e) {
    console.log(e)
  }
}

export const removeTodo = async (id) => {
  try {
    const res = await Todo.deleteTodo(id);
    if (res) {
      return res.data
    }
  } catch (e) {
    console.log(e)
  }
}


export const editTodo = async (id, data) => {
  try {
    const res = await Todo.patchTodo(id, data);
    if (res) {
      return res.data
    }
  } catch (e) {
    console.log(e)
  }
}
