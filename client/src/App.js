import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { checkUserSession } from './redux/actions/userAction';

import { Ring } from 'react-awesome-spinners';

import './css/App.css'
// components
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import TodoList from './Components/TodoList';
import TodoForm from './Components/TodoForm';
import NoteForm from './Components/NoteForm';
import NoteTable from './Components/NoteTable';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession())
  }, [dispatch])

  const user = useSelector(state => state.user);

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          {!user ? <Home /> : <Redirect to='/todos' />}
        </Route>

        <Route exact path='/todos'>
          {!user ? <Ring/> :
            <>
              <Navbar user={user} />
              <div className='todosContainer'>
                <div className='todos'>
                  <TodoForm />
                  <TodoList />
                </div>
              </div>
            </>
          }
        </Route>

        <Route exact path='/notes'>
          {!user ? <Ring/> :
            <>
              <Navbar user={user} />
              <div className='notesContainer'>
                <div className='notes'>
                  <NoteForm />
                  <NoteTable />
                </div>
              </div>
            </>
          }
        </Route>

        <Redirect to='/' />
      </Switch>
    </Router>
  );
}

export default App;
