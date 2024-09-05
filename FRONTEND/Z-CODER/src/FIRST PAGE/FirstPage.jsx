import React from 'react'
import { useNavigate } from 'react-router-dom'
import profile from '../assets/logo1.jpg'
import './FirstPage.css'

function FirstPage() {

  const navigate=useNavigate();

  function handleonclick(){
    navigate("/Loginpage.jsx")
  }


  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        
          <div className='logoimage'>
             <img src={profile}  alt='logo image'></img>
          </div>

          <div className='titlecontainer'>
             <a className="navbar-brand" href="#">Z-CODER</a>
          </div>

          <div className='buttoncontainer'>
             <button className="btn btn-outline-success" type="submit" onClick={handleonclick} >Log In</button>
          </div>
          
   </nav>
   <div className="container">
    <div className="introduction">
      <h2>Welcome to Z-Coder a platform which make yours coding life easy and more efficient</h2>
    </div>
    <div className="about us">
      <p>this is the place where you can put all your data</p>
      <p>Here you can log in and make your account and then you can place all your requried data and questions </p>
      <p>here you can sav your codeforces readings, codechef reading and many other things </p>
    </div>
    
   </div>
    </>
  )
}

export default FirstPage
