import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'

function App() {
const [email, setEmail] = useState('')
const [password, setPassword] = useState()

const handleSubmit = (e) => {
e.preventDefault();
axios.post('http://localhost:3001/login', {email, password})
.then(result => console.log(result))
.catch(err => console.log(err))
}

  return (
      <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div className='bg-white p-3 rounded w-25'>
          <h2>Sign-In</h2>
          <form onSubmit={handleSubmit}>
            <div className='mb-3'>
              <label htmlFor="email"><strong>Email</strong></label>
              <input type="email" placeholder='Enter Email'  autoComplete='off' name='email' className='form-control' onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className='mb-3'>
            <label htmlFor="email"><strong>Password</strong></label>
              <input type="password" placeholder='Enter Password'  name='password' className='form-control' 
               onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <button type='submit' className='btn btn-success w-100 rounded-0' >Log In</button>
            <p>You are agree to our terms and conditions</p>
            <button className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>s</button>
          </form>
        </div>
      </div>
  )
}

export default App
