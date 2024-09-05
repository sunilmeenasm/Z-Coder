import React,{useContext,useEffect} from 'react'

import Homepage from './HOME PAGE/Homepage.jsx'
import FirstPage from './FIRST PAGE/FirstPage.jsx'
import Loginpage from './LOGINPAGE/Loginpage.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './DETAILS PAGE/SignUp.jsx';
// import Protection from './PROTECTION/Protection.jsx';
import Addquestion from './HOME PAGE/Addquestion.jsx';
import axios from 'axios';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Context} from "./main.jsx";
// import Footer from './Footer.jsx';

function App() {

//   const { isAuthenticated, setIsAuthenticated, setUser } =
//   useContext(Context);

// useEffect(() => {
//   const fetchUser = async () => {
//     try {
//       const response = await axios.get(
//         "http://localhost:5000/api/user/v1",
//         {
//           withCredentials: true,
//         }
//       );
//       setIsAuthenticated(true);
//       setUser(response.data.user);
//     } catch (error) {
//       setIsAuthenticated(false);
//       setUser({});
//     }
//   };
//   fetchUser();
// }, [isAuthenticated]);





  return ( 
    <div>
      
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstPage/>} />
        <Route path="/Loginpage.jsx" element={<Loginpage/>} />
        <Route path="/SignUp.jsx" element={<SignUp/>} />
        {/* <Route path="/Homepage.jsx" element ={<Protection/>}> */}
            <Route path="/Homepage.jsx" element={<Homepage/>} />
             {/* </Route> */}
        {/* </Route> */}
        <Route path="/Addquestion.jsx" element={<Addquestion/>}/>

      </Routes>
      <ToastContainer position="top-center"/>
      
    </BrowserRouter>  

    </div>
  )
}

export default App
