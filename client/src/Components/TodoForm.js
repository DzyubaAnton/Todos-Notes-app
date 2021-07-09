import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../redux/actions/todosAction';

function TodoForm() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user)

  const handlerSubmit = async (event) => {
    event.preventDefault();
    const text = event.target.text.value
    await dispatch(addTodo(text, user._id))
  };

  return (
    <>
      <form onSubmit={ handlerSubmit }>
        <div className=''>
          <input type='text' className='' name='text' placeholder='Your Todo text here' />
        </div>
        <button type='submit' className=''>Add Todo</button>
      </form>
    </>
  )
}

export default TodoForm;
