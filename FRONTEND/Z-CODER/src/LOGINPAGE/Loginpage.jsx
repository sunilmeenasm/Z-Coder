import React, { useContext, useState , useEffect} from 'react'
import "./Loginpage.css"
import { useNavigate,Link,Navigate } from 'react-router-dom';
import axios from 'axios';
import {toast} from "react-toastify";
import {Context} from "../main";



function Loginpage() {
  const navigate=useNavigate();
  const {isAuthenticated , setIsAuthenticated}=useContext(Context);
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const handlelogin= async (e)=>{
    e.preventDefault();
                                  

    try{
    const response=  await axios.post(
        "http://localhost:5000/api/user/login",
        {email,password },
        {
          withCredentials:true,
          headers:{ "Content-Type": "application/json"}
        }
      ).then((res)=>{
        navigate("/Homepage.jsx")
        toast.success(res.data.message);
       // setIsAuthenticated(true);
        setEmail("");
        setPassword("");
      });
      console.log(response);
    } catch(error) {
      toast.error(error.response.data.message);
    }

  };
  // if(isAuthenticated)
  // {
  //   return < Navigate to={"/Homepage"}/>
  // }
  // useEffect(() => {
  //   if (isAuthenticated) {
  //     navigate("/Homepage.jsx"); // Use the path without `.jsx`
  //   }
  // }, [isAuthenticated, navigate]);



  return (
    <div className={'mainContainer'}>
      <div className={'titleContainer'}>
        <div>Login</div>
      </div>
      <br />
      <form onSubmit={handlelogin}>
      <div className={'inputContainer'}>
        <input  className={'inputBox'} placeholder="Enter your email here"  name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      </div> <br/>

      <div className={'inputContainer'}>
        <input  className={'inputBox'} placeholder="Enter your password here" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
      </div> <br/>

      <div className={'inputContainer'}>
        <button className={'inputButton'} type="submit"  >Log In</button>
      </div>

      <div >
        <p>If you don't have an account!</p>
      
    <u> <div className='createcontainer'>  <a href="SignUp.jsx">Create one</a> </div> </u>
      </div>
      </form>
    </div>
  )
}

export default Loginpage