import React, {useState} from 'react';
import {Box, Button, Card, CardActions, CardContent, IconButton, Typography, useTheme} from "@mui/material";
import {DeleteOutline, List, Refresh, Verified} from "@mui/icons-material";
import {useDispatch} from "react-redux";
import {editTodo, removeTodo} from "../../services/todo-services";
import {toast} from "react-toastify";
import {addTodoAction} from "../../redux/action/actionTodo";
import {ClipLoader} from "react-spinners";


const statusCard = [
  <List sx={{fontSize: 60}} color={'warning'}/>,
  <Refresh sx={{fontSize: 60}} color={'info'}/>,
  <Verified sx={{fontSize: 60}} color={'success'}/>
]

const infoStatus = {
  0: {
    text: 'progress',
    icon: <Refresh color={'info'}/>,
    target: 1
  },
  1: {
    text: 'done',
    icon: <Verified color={'success'}/>,
    target: 1
  },
  2: {
    text: 'progress',
    icon: <Refresh color={'info'}/>,
    target: -1
  },
}


const TodoCart = ({status = 0, title, description, id}) => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)

  const theme = useTheme()

  const handleDeleteTodo = async () => {
    setLoading(true)
    const res = await removeTodo(id)
    if (res) {
      dispatch(addTodoAction())
      toast.success(title + ' removed')
    }
    setLoading(false)
  }

  const handleChangeStatus = async (target = 1) => {

    // check error or validation
    if ((target === -1 && status === 0) ||
        (target === 1 && status === 2)) {
      return
    }

    const res = await editTodo(id, {status: status + target})
    if (res) {
      toast.success(title + ' updated')
      dispatch(addTodoAction())
    }
  }

  return (
      <Card sx={{maxWidth: 345}}>
        <Box sx={{display: 'flex', justifyContent: 'center', height: 70, alignItems: 'center'}}>
          {statusCard[status]}
        </Box>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton size="small" color={'error'} onClick={handleDeleteTodo}>{loading ?
              <ClipLoader color={theme.palette.info.main} size={20}/> :
              <DeleteOutline fontSize={'medium'}/>}</IconButton>
          <Button size="small" variant={'outlined'}
                  onClick={() => handleChangeStatus(infoStatus[status].target)}
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 1
                  }}>{infoStatus[status].text} {infoStatus[status].icon}</Button>
          {status === 1 && <Button onClick={() => handleChangeStatus(-1)} size="small"
                                   sx={{display: 'flex', justifyContent: 'center', gap: 1}}
                                   variant={'outlined'}>todo <List color={'warning'}/></Button>}
        </CardActions>
      </Card>
  );
};

export default TodoCart;