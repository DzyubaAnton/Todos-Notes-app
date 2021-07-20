import Todo from './Todo';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from '../redux/actions/todosAction';

import '../css/Todos.css'

function TodoLits() {

  const dispatch = useDispatch();

  const todos = useSelector(state => state.todos);

  useEffect(() => {
    dispatch(getTodos())
  }, [dispatch])


  return (
    <>
      {
        todos.length ? todos.map((todo) =>
        (
          <Todo
            todo={todo}
          key={todo._id}
          />
        )) :
          <p>
            You have no tasks yet!<br />To plan your new task just fill and submit Todo form.
          </p>
      }
    </>
  )
}

export default TodoLits;
