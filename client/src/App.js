import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { checkUserSession } from './redux/actions/userAction';


import './App.css'
// components
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import TodoList from './Components/TodoList';
import TodoForm from './Components/TodoForm';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession())
  }, [dispatch])

  const user = useSelector(state => state.user)

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='/todos'>
          {!user ? <Redirect to='/' /> :
            <>
              <Navbar user={user} />
              <TodoForm />
              <TodoList />
            </>
          }
        </Route>

        <Redirect to='/' />
      </Switch>
    </Router>
  );
}

export default App;
