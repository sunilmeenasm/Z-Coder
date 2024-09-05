import React from 'react'
import "../HOME PAGE/Homepage.css";
import Navbar from "./Navbar";
import Leetcode from "../component/Leetcode";
import Codeforces from "../component/Codeforces";
import Codechef from "../component/Codechef";
import Card from "./Card"
import Addquestion from './Addquestion.jsx';
import { useNavigate } from 'react-router-dom';


function Homepage() {
  const navigate=useNavigate();

  function handleAddQuestion()
  {
    navigate("/Addquestion.jsx");
  }
  return (
  <div className='content'> 
  <div className='nvbr'>
    <Navbar/>
  </div>
  <div className="containers">
    <h2>Welcome ....</h2>
  </div>
  <div className='card-container'>
  <Card/>
  </div>
  <div className='item'>
    <div className="leetcode">
      <Leetcode/>
      </div>
    <div className="codechef">
      <Codechef/>
    </div>
    <div className="codeforces">
      <Codeforces/>
    </div>

  </div>
  <button onClick={handleAddQuestion}>Saved Questions</button>
  

  </div>
  )
}

export default Homepage