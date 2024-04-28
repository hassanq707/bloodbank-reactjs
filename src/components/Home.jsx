import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
  const store = useSelector((store) => store.user_data)
  const navigate = useNavigate()
  const donateNow = () => {
    if(store.isLoggedIn == true){
        navigate('/dashboard')
    }
    else{
      alert('Sign up to Donate/Receive Blood')
    }
  }
  return (
    <div className='home_page'>
        <div className="home_row">
           <div className="home_left_col">
                  <h1>Save a Life</h1>
                  <p>Give the gift of life. Donate blood today and make a difference in someone's life. Every drop counts. Join the noble cause and save lives. Be a hero, donate blood. Your contribution can bring hope and healing to those in need. Give generously, give blood.</p>
                     <button onClick={donateNow}>Donate Now</button>
           </div>
           <div className="home_right_col">
               <img src="./main-image.avif" alt="" />
           </div>
        </div>
    </div>
  )
}

export default Home