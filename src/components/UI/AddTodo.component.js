import React, {useRef, useState} from 'react';
import {Box, Button, IconButton, TextField} from "@mui/material";
import {Add} from "@mui/icons-material";
import {Modal} from "./index";
import {addTodo} from "../../services/todo-services";
import {toast} from "react-toastify";
import {useDispatch} from "react-redux";
import {addTodoAction} from "../../redux/action/actionTodo";

const AddTodo = () => {
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()

  const form = useRef(null)

  const getValuesForm = (formElm) => {
    const temp = {};
    [...formElm].forEach((input) => temp[input.name] = input.value)
    delete temp[""]
    return temp
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = getValuesForm(e.target)
    data.status = 0
    const res = await addTodo(data)
    if (res) {
      toast.success('success!')
      handleClose()
      dispatch(addTodoAction())
    }
  }

  const handleClose = () => {
    setOpen(false)
    form.current.reset()
  }

  return (
      <div>
        <IconButton onClick={() => setOpen(true)} sx={(theme) => ({
          border: `1px solid ${theme.palette.primary.dark}`,
          position: 'fixed',
          right: 20,
          bottom: 20
        })} size={'large'} color={'primary'}>
          <Add fontSize={'large'}/>
        </IconButton>
        <Modal open={open} setOpen={setOpen}>
          <Box
              component="form"
              autoComplete="off"
              ref={form}
              sx={{m: 1, display: 'flex', flexDirection: 'column', gap: 2}}
              onSubmit={handleSubmit}
          >
            <TextField fullWidth name={'title'} inputProps={{minLength: 5}} required label="Title" variant="outlined"/>
            <TextField
                name="description"
                label="Description"
                inputProps={{minLength: 5}}
                required
                multiline
                rows={4}
                fullWidth
                variant={'outlined'}
            /><Box display={'flex'} sx={{gap: 2}}>
            <Button variant={'outlined'} type="button" onClick={handleClose} color="secondary">Close</Button>
            <Button variant={'contained'} type="submit" color="success">Add</Button>
          </Box>
          </Box>
        </Modal>
      </div>
  );
};

export default AddTodo;