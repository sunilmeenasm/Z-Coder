import React,{useState,useContext} from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Context } from '../main';

import './SignUp.css'
import { useNavigate ,Link} from 'react-router-dom';
import Leetcode from '../component/Leetcode';
import Codechef from '../component/Codechef';


function SignUp() {
  const navigate=useNavigate();

 
    const { isAuthenticated, setIsAuthenticated } = useContext(Context);

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [contactNo, setContactNo] = useState("");
    const [institutename, setInstituename] = useState("");
    const [codeForces, setCodeForces] = useState("");
    const [leetCode, setLeetCode] = useState("");
    const [codeChef, setCodeChef] = useState("");

  

  

  const handlesubmit= async (e)=>{
    e.preventDefault(); // prevent Default behaviour so that we can add our custom behaviour after the form is submitted
    try{
         const response= await axios.post(

          "http://localhost:5000/api/user/signup",
        { name ,email,password,contactNo,institutename,codeForces,leetCode,codeChef },
        {
          withCredentials:true,
          headers:{ "Content-Type": "application/json"}
        }
      ).then((res)=>{

        toast.success(res.data.message);
        navigate("/Loginpage.jsx")
       
        setIsAuthenticated(false);
        setEmail("");
        setPassword("");
        setCodeChef("");
        setContactNo("");
        setCodeForces("");
        setInstituename("");
        setName("");
        setLeetCode("");
      })
      console.log(response);
      
    } catch(error) {
      toast.error(error.response.data.message);

    }
  }

  return (
    <div className='signup-container'>
      <div className="title-container">
        <h1>Sign Up Here</h1>
      </div>
      <form action="submit" onSubmit={handlesubmit} >
        <div className="signup-input">
          <div className="input-field">
            <label>Name:</label>
            <input name="name" value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder='Enter your Name..' />
          
            <label>Contact Number:</label>
            <input type="number" value={contactNo} placeholder='Enter Your Contact Number..' onChange={(e)=>setContactNo(e.target.value)} />
          </div>
          <div className="input-field">
            <label>EE-mail:</label>
            <input name="email" value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Enter Your Email Id' />
          
            <label>Institute Name:</label>
            <input name="institutename" value={institutename} onChange={(e)=>setInstituename(e.target.value)} type="text" placeholder='Enter your Institute Name' />
          </div>
          <div className="input-field">
            <label>Password</label>
            <input name="password" value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='Enter the password' />
          
            {/* <label>Re-enter the Password</label>
            <input type="password" placeholder='Re-enter the above password' /> */}
          </div>
          <div className='input-field'>
              <label>Codeforces handle</label>
              <input name="codeForces" value={codeForces} onChange={(e)=>setCodeForces(e.target.value)} type="text" placeholder='Enter Codeforces handle...' />
          </div>

          <div className='input-field'>
              <label>Enter LeetCode handle</label>
              <input name="leetCode" value={leetCode} onChange={(e)=>setLeetCode(e.target.value)} type="text" placeholder='Enter LeetCode handle...' />
          </div>

          <div className='input-field'>
              <label>Enter CodeChef handle</label>
              <input name="codeChef" value={codeChef} onChange={(e)=>setCodeChef(e.target.value)} type="text" placeholder='Enter CodeChef handle...' />
          </div>


        </div>
        <button type="submit" className="submit-btn">Sign Up</button>
      </form>
    </div>
  )
}

export default SignUp
