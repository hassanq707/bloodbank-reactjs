import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from '../config/Firebase_app'
import { useDispatch } from 'react-redux'
import { set_user_auth } from '../store/slices/User_detail'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [data, setData] = useState({})

  const changeHandle = (e) => {
    const { value, name } = e.target
    setData({
      ...data,
      [name]: value
    })

  }

  const onSubmitHandle = (e) => {
    e.preventDefault()

    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
        dispatch(set_user_auth(true))
        navigate('/dashboard')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)

      });

  }

  return (
    <div className='background-div'>
      <div className='main-div'>
        <h1>Login</h1>
        <form onSubmit={onSubmitHandle}>

          <label>Email: </label>
          <input type="text" placeholder='Enter email' name='email' onChange={changeHandle} required />
          <label>Password: </label>
          <input type="text" placeholder='Enter password' name='password' onChange={changeHandle} required />
          <button type='submit'>Login</button>

        </form>
      </div>
    </div>
  )
}

export default Login