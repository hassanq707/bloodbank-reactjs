import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Signup from './Signup'
import Layout from './Layout'
import Dashboard from './Dashboard'
import Private_Route from './Private_Route'
import Dashboard_Home from './Dashboard_Home'
import {Donate_Page} from './Donate_Page'



const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='' element={<Layout />}>
           <Route path='' element={<Home />}/>
           <Route path='login' element={<Login />}/>
           <Route path='signup' element={<Signup />}/>
        </Route>
         <Route element={<Private_Route />}>
            <Route path='dashboard' element={<Dashboard />}>
                <Route path='' element={<Dashboard_Home />}/>
                <Route path='donate' element={<Donate_Page />}/>
            </Route>
         </Route>
      </>
    )
)


const Router_App = () => {

  return <RouterProvider router={router}/>
}

export default Router_App