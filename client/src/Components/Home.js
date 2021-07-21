import GoogleButton from 'react-google-button'

import '../css/Home.css'

function Home() {

  return (
    <div className='home'>
      <h3>
      Wellcome to Todos & Notes app!
      </h3>
      <a className='googleButton' href="https://todos-and-notes.herokuapp.com/google" role="button">
        <GoogleButton/>
      </a>
    </div>
  )
}

export default Home;
