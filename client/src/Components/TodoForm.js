import { useDispatch, useSelector } from 'react-redux';
import { createTodo } from '../redux/actions/todosAction';

function TodoForm() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  const handlerSubmit = async (event) => {
    event.preventDefault();
    const text = event.target.text.value;
    if (text.trim()) {
      await dispatch(createTodo(text, user._id));
      event.target.text.value = '';
    }
  };

  return (
      <form onSubmit={handlerSubmit} className='todoForm'>
          <h3>Todo Form</h3>
          <textarea type='text' className='todoInput' name='text' placeholder='Your Todo text here' />
          <button type='submit' className='addButton'>Add Todo</button>
      </form>
  )
}

export default TodoForm;
