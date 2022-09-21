import React, { Component, useState } from "react";
import axios from "axios";
const Input = (props) => {
  const [action, setAction] = useState("");
  const [image, setimage] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState(false);
  const addTodo = () => {
    const task = { action: action, body: body, image: image };
    console.log(task);
    if (task.action && task.action.length > 0) {
      setError(false);
      axios
        .post("/api/todos", task)
        .then((res) => {
          if (res.data) {
            props.getTodos();
            setAction("");
          }
        })
        .catch((err) => console.log(err));
    } else {
      setError(true);
    }
  };
  const handleChange1 = (e) => {
    e.target.value.length > 0 && setError(false);
    setAction(e.target.value);
  };
  const handleChange2 = (e) => {
    e.target.value.length > 0 && setError(false);
    setBody(e.target.value);
  };
  const handleChange3 = (e) => {
    e.target.value.length > 0 && setError(false);
    setimage(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          handleChange1(e);
        }}
        value={action}
      />
      <input
        type="text"
        onChange={(e) => {
          handleChange2(e);
        }}
        value={body}
      />
      <input
        type="text"
        onChange={(e) => {
          handleChange3(e);
        }}
        value={image}
      />
      <button onClick={() => addTodo()}>add todo</button>
      {error && <h6>The Todo field is required</h6>}
    </div>
  );
};
export default Input;
