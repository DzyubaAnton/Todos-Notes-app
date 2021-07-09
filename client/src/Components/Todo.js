import { useDispatch } from 'react-redux';
import { changeTodo } from '../redux/actions/todosAction';

function Todo({ todo }) {

  const dispatch = useDispatch();

  const styleDone = {width: '20px', height: '20px', background: 'green'};
  const styleNotYetDone = {width: '20px', height: '20px', background: 'gray'};

  const handlerclick = () => {
    dispatch(changeTodo({...todo, isDone: !todo.isDone}))
  };

  return (
    <div onClick={ handlerclick } className='todo'>
      {todo.text}
      <p>{todo.isDone}</p>
      <div style={ todo.isDone ? styleDone : styleNotYetDone} />
    </div>
  )
}

export default Todo;
