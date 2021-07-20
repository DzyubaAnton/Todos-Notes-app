import * as TYPES from '../types/types';

//============================================
function setTodos(data) {
  return {
    type: TYPES.SET_TODOS,
    data,
  }
}

const getTodos = () => async (dispatch) => {
  const res = await fetch('/todos')
  if (res.status === 200) {
    const data = await res.json()
    dispatch(setTodos(data))
  }
}

function addTodo(data) {
  return {
    type: TYPES.ADD_TODO,
    data,
  }
}

const createTodo = (text, id) => async (dispatch) => {
  const res = await fetch(`/todos/${id}/addtodo`,
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

  if (res.status === 200) {
    const data = await res.json()
    dispatch(addTodo(data))
  }
}

function changeTodo(data) {
  return {
    type: TYPES.CHANGE_TODO,
    data,
  }
}

function removeTodo(data) {
  return {
    type: TYPES.REMOVE_TODO,
    data,
  }
}

const deleteTodo = (todo, id) => async (dispatch) => {
  const res = await fetch(`/todos/${id}/deletetodo`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: todo._id
      })
    }
  )

  if (res.status === 200) dispatch(removeTodo(todo))
}

const patchTodo = (todo, id) => async (dispatch) => {
  const res = await fetch(`/todos/${id}/patchtodo`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        todo
      })
    }
  )
  if (res.status === 200) dispatch(changeTodo(todo))
}

export {
  setTodos,
  getTodos,
  createTodo,
  addTodo,
  changeTodo,
  deleteTodo,
  removeTodo,
  patchTodo,
}
