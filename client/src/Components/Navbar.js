import { useHistory, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../redux/actions/userAction';

import '../css/Navbar.css'

function Navbar({ user }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const logoutHandler = async () => {
    await dispatch(logoutUser())
    history.push('/');
  }
  
  return (
    user ? 
    <nav className='navbar'>
      <div className='navLinks'>
      <h3 className='navGreet'>Todos &<br/> Notes app</h3>
    <div className='user'>
      <img src={user.img} className='userImg' alt='userImg'/>
      <p><strong>{user.login}</strong></p>
    </div>
    <Link to='/todos'>My Todos</Link>
    <Link to='/notes'>My Notes</Link>
    <Link onClick={ logoutHandler } to='/'>Logout</Link>
      </div>
  </nav> 
  : null
  )
}

export default Navbar;
