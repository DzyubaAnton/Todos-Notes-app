import { useDispatch, useSelector } from 'react-redux';
import { patchTodo, deleteTodo } from '../redux/actions/todosAction';


function Todo({ todo }) {

  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  const styleDone = { fill: 'green', transition: '0.3s' };
  const styleNotYetDone = { fill: 'gray', transition: '0.3s' };
  const todoDone = { borderColor: 'green', textDecoration: 'line-through' }
  const todoNotYetDone = { borderColor: 'gray' }

  const handlerClick = () => {
    dispatch(patchTodo({ ...todo, isDone: !todo.isDone }, user._id))
  };

  const handlerDelete = () => {
    dispatch(deleteTodo(todo, user._id))
  };

  return (
    <div className='todo' style={todo.isDone ? todoDone : todoNotYetDone}>
      <span>{todo.text}</span>
      <div className='todoButtons'>
        <button className='doneButton'>
          <svg className='icon' onClick={handlerClick} style={todo.isDone ? styleDone : styleNotYetDone}
            viewBox='0 0 27.855 27.855' width='30px' >
            <g>
              <path d='M27.604,6.751L14.176,20.18c-0.338,0.336-0.885,0.336-1.223,0l-0.27-0.27l0,0l-0.293-0.293l-1.268-1.268l-0.018-0.027
		L5.297,12.47c-0.336-0.336-0.336-0.885,0-1.221l1.83-1.828c0.338-0.339,0.883-0.339,1.221,0l5.223,5.262L24.551,3.7
		c0.338-0.337,0.885-0.337,1.221,0l1.832,1.832C27.939,5.867,27.939,6.415,27.604,6.751z'/>
              <path d='M21.795,22.613c0,0.973-0.793,1.766-1.768,1.766H3.535c-0.975,0-1.768-0.793-1.768-1.766V5.241
		c0-0.973,0.793-1.766,1.768-1.766h16.492c0.975,0,1.768,0.793,1.768,1.766l0,0l1.256-1.162c0.203-1.43-1.242-2.369-3.024-2.369
		H3.535C1.582,1.71,0,3.29,0,5.241v17.372c0,1.951,1.582,3.533,3.535,3.533h16.492c1.953,0,3.535-1.582,3.535-3.533V12.257
		l-1.768,1.924L21.795,22.613L21.795,22.613z'/>
            </g>
          </svg>
        </button>
        <button className='deleteButton' onClick={handlerDelete}>
          <svg className='icon' viewBox='0 0 512 512' width='30px' height='30px' style={todo.isDone ? styleDone : styleNotYetDone} >
            <g>
              <path d='m424 64h-88v-16c0-26.467-21.533-48-48-48h-64c-26.467 0-48 21.533-48 48v16h-88c-22.056 0-40 17.944-40 40v56c0 8.836 7.164 16 16 16h8.744l13.823 290.283c1.221 25.636 22.281 45.717 47.945 45.717h242.976c25.665 0 46.725-20.081 47.945-45.717l13.823-290.283h8.744c8.836 0 16-7.164 16-16v-56c0-22.056-17.944-40-40-40zm-216-16c0-8.822 7.178-16 16-16h64c8.822 0 16 7.178 16 16v16h-96zm-128 56c0-4.411 3.589-8 8-8h336c4.411 0 8 3.589 8 8v40c-4.931 0-331.567 0-352 0zm313.469 360.761c-.407 8.545-7.427 15.239-15.981 15.239h-242.976c-8.555 0-15.575-6.694-15.981-15.239l-13.751-288.761h302.44z' />
              <path d='m256 448c8.836 0 16-7.164 16-16v-208c0-8.836-7.164-16-16-16s-16 7.164-16 16v208c0 8.836 7.163 16 16 16z' /><path d='m336 448c8.836 0 16-7.164 16-16v-208c0-8.836-7.164-16-16-16s-16 7.164-16 16v208c0 8.836 7.163 16 16 16z' />
              <path d='m176 448c8.836 0 16-7.164 16-16v-208c0-8.836-7.164-16-16-16s-16 7.164-16 16v208c0 8.836 7.163 16 16 16z' />
            </g>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Todo;
