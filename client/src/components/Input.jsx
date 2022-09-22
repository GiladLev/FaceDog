import React, { Component, useState } from 'react';
import axios from 'axios';
import "./input.css"
import { Box, Button, Card, Typography } from '@mui/material';
const Input = (props) => {
    const [action, setAction] = useState('')
    const [body, setBody] = useState('')
    const [image, setImage] = useState('')
    const [error, setError] = useState(false)
  const addTodo = () => {
    const task = { action: action+"--asasaas--"+image+"--asasaas--"+body };
    if (task.action && task.action.length > 0) {
        setError(false)
      axios
        .post('/api/todos', task)
        .then((res) => {
          if (res.data) {
            props.getTodos();
          }
        })
        .catch((err) => console.log(err));
    } else {
      setError(true)
    }
  };
  const handleChange1 = (e) => {
    e.target.value.length > 0 && setError(false)
    setAction(e.target.value);
  };
  const handleChange2 = (e) => {
    e.target.value.length > 0 && setError(false)
    setBody(e.target.value);
  };
  const handleChange3 = (e) => {
    e.target.value.length > 0 && setError(false)
    setImage(e.target.value);
  };
    return (
      <Card bgcolor="white" p={6} borderRadius={5} className='input-area'>
        <Typography variant="h6" color="gray" textAlign="center">
            Create post
          </Typography>
        <input className='shareInput' type="text" placeholder='name of the dog' onChange={(e) => {handleChange1(e)}} value={action} />
        <input className='shareInput' type="text" placeholder='image' onChange={(e) => {handleChange2(e)}} value={body} />
        <input className='shareInput' type="text" placeholder='description' onChange={(e) => {handleChange3(e)}} value={image} />
        <Button fullWidth
            variant="contained"
            aria-label=" primary" onClick={() => addTodo()}>add todo</Button>
        {error && <h6>The Todo field is required</h6>}
      </Card>
    );
}
export default Input;