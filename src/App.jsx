import React, { useEffect } from 'react'
import Router_App from './components/Router_App'
import { useDispatch, useSelector } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './config/Firebase_app'
import { set_user_auth } from './store/slices/User_detail'
import { useNavigate } from 'react-router-dom'

const App = () => {
  const dispatch = useDispatch()
  // const navigate = useNavigate()

  const check_user = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log('user hai', uid)
        dispatch(set_user_auth(true))
    
      } else {

        dispatch(set_user_auth(false))
        console.log('user available nh hai', user)
      }
    });
  }

  useEffect(() => {
    check_user()
  },[])


  return (
    <>
     <Router_App />
    </>
  )
}

export default App