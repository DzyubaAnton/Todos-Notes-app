import { combineReducers } from 'redux';
import userReducer from './userReducer';
import todosReducer from './todosReducer';
import notesReducer from './notesReducer ';

const rootReducer = combineReducers({
    user: userReducer,
    todos: todosReducer,
    notes: notesReducer,
})

export default rootReducer;
