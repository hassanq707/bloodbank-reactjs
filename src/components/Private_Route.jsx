import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'


const Private_Route = () => {

const store = useSelector((store) => store.user_data.isLoggedIn)

  return (
    
    store ? <Outlet /> : <Navigate to={'/'}/>

  )

}

export default Private_Route