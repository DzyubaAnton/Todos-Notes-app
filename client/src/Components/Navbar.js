import { useHistory, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../redux/actions/userAction';

function Navbar({ user }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const logoutHandler = async () => {
    await dispatch(logoutUser())
    history.push('/');
  }
  
  return (
    user ? <nav className='navbar'>
    <p>Todo and note app</p>
    <div>
      <img src={user.img} className='userImg' alt='userImg'/>
      <p>{user.login}</p>
    </div>
    <Link to='/todos'>My Todos</Link>
    <Link to='/notes'>My Notes</Link>
    <Link onClick={ logoutHandler } to='/'>Logout</Link>
  </nav> : null
  );
}

export default Navbar;
