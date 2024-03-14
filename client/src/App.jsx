import axios from 'axios'
import './App.css'
import Register from './Register'

function App() {
  axios.defaults.baseURL = 'http://localhost:4040';
  axios.defaults.withCredentials = true;
  return (
    <>
      <div>
        <Register/>
      </div>
    </>
  )
}

export default App