import React from "react";
import profile from '../assets/logo1.jpg';
import notificationicon from '../assets/notificationlogo.png';
import profileicon from '../assets/profileicon1.png';
import settingicon from '../assets/settingicon.png';
import "./Navbar.css"
import { useNavigate } from "react-router-dom";
function Navbar (){

   const navigate=useNavigate();

const handlelogout=()=>
   {
      localStorage.removeItem("loggedin");
      navigate("/");
   }


    return (

<nav className="navbar navbar-expand-lg bg-body-tertiary nnn">
  <div className="container-fluid">

          <div className='logoimage'>
             <img src={profile}  alt='logo image'></img>
          </div>

          <div className='titlecontainer'>
             <a className="navbar-brand" href="#">Z-CODER</a>
          </div>

          <div className="items">

          <div className="notifycontainer">
           <a href="#"> <img src={notificationicon} alt="notification-icon"/></a>
          </div>

          <div className="profilecontainer">
           <a href="/Homepage.jsx"> <img src={profileicon} alt="profile-icon"/></a>
          </div>

          <div className="settingcontainer">
           <a href="#2"> <img src={settingicon} alt="setting-icon"/></a>
          </div>
          </div>

          <div className='buttoncontainer'>
             <button className="btn btn-outline-success" type="button" onClick={handlelogout}  >Log Out</button>
          </div>
 
    </div>
  
</nav>
    );

}

export default Navbar
