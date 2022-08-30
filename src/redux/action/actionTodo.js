import {fetchTodos} from "../../services/todo-services";
import {SET_TODOS, SET_TODOS_LOADING} from "../type";

export const addTodoAction = () => (

    async (dispatch) => {
      dispatch({type: SET_TODOS_LOADING, payload: true})
      const res = await fetchTodos()
      if (res) {
        dispatch({type: SET_TODOS, payload: res})
      } else {
        dispatch({type: SET_TODOS_LOADING, payload: false})
      }
    }
)
