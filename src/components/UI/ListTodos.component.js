import React, {useEffect} from 'react';
import {Grid, Typography} from "@mui/material";
import {TodoCart} from "./index";
import {useDispatch, useSelector} from "react-redux";
import {addTodoAction} from "../../redux/action/actionTodo";

const ListTodos = () => {

  const dispatch = useDispatch()
  const {todos, todosLoading: loading} = useSelector((state) => state.todo)

  const getTodos = () => {
    dispatch(addTodoAction())
  }

  const getAllNeedData = async () => {
    await getTodos()
  }

  useEffect(() => {
    getAllNeedData()
  }, [])

  return (
      loading ? <Typography>Loading...</Typography> :
          <Grid container spacing={2} justifyContent={'center'} mt={'20px'}>
            {todos.map((todo) => (
                <Grid item key={todo.id}>
                  <TodoCart {...todo} />
                </Grid>
            ))}
          </Grid>
  );
};

export default ListTodos;