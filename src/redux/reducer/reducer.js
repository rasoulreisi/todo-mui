import {SET_TODOS, SET_TODOS_LOADING} from "../type";

const initialState = {
  todos: [],
  todosLoading: true,
}

export const reducerTodo = (state = initialState, action) => {
  switch (action.type) {
    case SET_TODOS: {
      return {...state, todos: action.payload, todosLoading: false}
    }
    case SET_TODOS_LOADING: {
      return {...state, todosLoading: action.payload}
    }
    default:
      return state
  }
}