import * as TYPES from '../types/types';

function notesReducer(notes = [], action) {
  switch (action.type) {
    case TYPES.SET_NOTES:
      return action.data
    case TYPES.ADD_NOTE:
      return [action.data, ...notes]
    case TYPES.CHANGE_NOTE:
      return notes.map(note => note._id === action.data._id ? action.data : note)
    case TYPES.REMOVE_NOTE:
      return notes.filter(note => note._id !== action.data._id)
    default:
      return notes;
  }
}

export default notesReducer;
