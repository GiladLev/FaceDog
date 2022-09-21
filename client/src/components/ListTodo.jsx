import React from 'react';
import Post from './Post';
const ListTodo = ({ todos, deleteTodo }) => {
  return (
    <ul>
      {todos && todos.length > 0 ? (
        todos.map((todo) => {
          return (

            < Post key={todo._id} id={todo._id} deleteTodo={deleteTodo} dogName={todo.action}/>

          );
        })
        
      ) : (
        <li>No todo(s) left</li>
      )}
    </ul>
  );
};
export default ListTodo;