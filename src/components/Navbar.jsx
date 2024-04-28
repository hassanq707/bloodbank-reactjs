import React from 'react'
import '../App.css'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { set_user_auth } from '../store/slices/User_detail'
import { signOut } from 'firebase/auth'
import { auth } from '../config/Firebase_app'
import { CircularProgress } from '@mui/material'

const Navbar = () => {

   const Username = localStorage.getItem('Username')
 
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const store = useSelector((store) => store.user_data)
     
   const logoutHandle = () => {
      signOut(auth).then((res)=>{
         dispatch(set_user_auth(false))
         navigate('/')
     })
   }

   return (
      <div className='navbar'>
         <div className='logo-div'>
            <img src="./download2.png" />
            <h2>BLOOD BANK</h2>
            
         </div>
         <div>
            {/* {
               store.isLoggedIn ? <button onClick={logoutHandle}>Logout</button>
                  : (
                     <div>
                        <Link to='login'>
                           <button>Login</button>
                        </Link>
                        <Link to='signup'>
                           <button>Signup</button>
                        </Link>
                     </div>
                  )
            } */}
            {
               store.loading ? <CircularProgress /> :
               (
                 <div>
                  {
                     store.isLoggedIn ? 
                     <div>
                     <span style={{textTransform:'capitalize' , fontWeight:'600'}}>{!Username ? null : Username}</span>
                     <button onClick={logoutHandle}>Logout</button>
                     </div>
                     : (
                        <div>
                        <Link to='login'>
                           <button>Login</button>
                        </Link>
                        <Link to='signup'>
                           <button>Signup</button>
                        </Link>
                     </div>
                     )
                  }
                 </div>
               )
            }
         </div>
      </div>
   )
}

export default Navbar