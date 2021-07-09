import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Home() {

  const history = useHistory();

  const user = useSelector(state => state.user)
  if (user) history.push('/todos');


  return (
    <>
      <h2>
        Todo list
      </h2>
      <a className='' href="http://localhost:3001/google" role="button">
        <img width="20px" alt="Google sign-in" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" />
        Войти с помощью Google
      </a>
    </>
  )
}

export default Home;
