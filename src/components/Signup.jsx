import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from '../config/Firebase_app'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
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

    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
        navigate('/login')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
      });

      localStorage.setItem('Username' , data.fullname)

  }

  return (
    <div className='background-div'>
      <div className='main-div'>
        <h1>Signup</h1>
        <form onSubmit={onSubmitHandle}>
          <label>Fullname: </label>
          <input type="text" placeholder='Enter fullname' name='fullname' onChange={changeHandle} required />
          <label>Email: </label>
          <input type="text" placeholder='Enter email' name='email' onChange={changeHandle} required />
          <label>Password: </label>
          <input type="text" placeholder='Enter password' name='password' onChange={changeHandle} required />
          <label>Mobile No: </label>
          <input type="text" placeholder='Enter number' name='number' onChange={changeHandle} required />
          <label>Address: </label>
          <input type="text" placeholder='Enter address' name='address' onChange={changeHandle} required />
          <button type='submit'>Signup</button>
        </form>
      </div>
    </div>
  )
}

export default Signup