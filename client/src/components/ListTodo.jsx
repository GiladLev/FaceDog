import React from 'react';
import { useSelector } from 'react-redux';
import Post from './Post';
const ListTodo = ({ todos, deleteTodo }) => {
  const data = useSelector((state) => state.pizza);
  return (
    <ul>
      {todos && todos.length > 0 ? (
        todos.map((todo) => {
          return (
            
         < Post key={todo._id} id={todo._id} deleteTodo={deleteTodo} dogName={todo.action.split("--asasaas--")[0]} description={todo.action.split("--asasaas--")[1]} image={todo.action.split("--asasaas--")[2]}/>
          );
        })
        
      ) : (
        <li>No todo(s) left</li>
      )}
    </ul>
  );
};
export default ListTodo;