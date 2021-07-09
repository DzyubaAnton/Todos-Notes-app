import Todo from './Todo';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from '../redux/actions/todosAction';

function TodoLits() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos())
  }, [dispatch])

  const todos = useSelector(state => state.todos);

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
            У вас пока нет запланированных дел. Что бы запланировать дела - заполните форму.
          </p>
      }
    </>
  )
}

export default TodoLits;
