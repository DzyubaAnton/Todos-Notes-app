import * as TYPES from '../types/types';

function todosReducer(todos = [], action) {
  switch (action.type) {
    case TYPES.SET_TODOS:
      return action.data
    case TYPES.ADD_TODO:
      return [action.data, ...todos]
    case TYPES.CHANGE_TODO:
      return todos.map(todo => todo._id === action.data._id ? action.data : todo)
    case TYPES.REMOVE_TODO:
      return todos.filter(todo => todo._id !== action.data._id)
    default:
      return todos;
  }
}

export default todosReducer;
