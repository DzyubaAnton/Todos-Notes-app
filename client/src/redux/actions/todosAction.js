import * as TYPES from '../types/types';

//============================================
function setTodos(data) {
  return {
    type: TYPES.SET_TODOS,
    data,
  }
}

const getTodos = () => async (dispatch) => {
  const res = await fetch('/user/todos')
  if(res.status === 200) {
    const data = await res.json()
    dispatch(setTodos(data))
  }
}

function addTodos(data) {
  return {
    type: TYPES.ADD_TODOS,
    data,
  }
}

const addTodo = (text, id) => async (dispatch) => {
  const res = await fetch(`/user/${id}/addtodo`,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text,
    })
  }
  )

  if(res.status === 200) {
    const data = await res.json()
    dispatch(addTodos(data))
  }
}

function changeTodo(data) {
  return {
    type: TYPES.CHANGE_TODO,
    data,
  }
}

export {
  setTodos,
  getTodos,
  addTodo,
  addTodos,
  changeTodo
}
