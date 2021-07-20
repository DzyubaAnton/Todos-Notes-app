import { useDispatch, useSelector } from 'react-redux';
import { createNote } from '../redux/actions/notesAction';

function NoteForm() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  const handlerSubmit = async (event) => {
    event.preventDefault();
    const text = event.target.text.value;
    if(text.trim()) {
      await dispatch(createNote(text, user._id));
      event.target.text.value = '';
    }
  };

  return (
      <form className='noteForm' onSubmit={handlerSubmit}>
          <h3>Note Form</h3>
          <textarea type='text' className='noteInput' name='text' placeholder='Your Note text here' />
          <button type='submit' className='addButton'>Add Note</button>
      </form>
  )
}

export default NoteForm;
