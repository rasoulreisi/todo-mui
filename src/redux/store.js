import {combineReducers} from "redux";
import {reducerTodo} from "./reducer/reducer";
import {configureStore} from "@reduxjs/toolkit";

const reducer = combineReducers({
  todo: reducerTodo
})

const store = configureStore({
  reducer,
  devTools: true
})

export {store}