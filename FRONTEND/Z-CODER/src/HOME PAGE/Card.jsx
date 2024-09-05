import React from 'react';
import profileicon from '../assets/profileicon.png';
import './Card.css';
function Card (){

    const username = JSON.parse(localStorage.getItem("user"));
      


    return (

        <div className='card'>

     <div className='card-image'>   <img src={profileicon} alt="profile image" ></img> </div>
        <div className='card-title'> <p> {username.name} </p> </div>
        <div className='card-info'> <p>Institue name : {username.institutename}  <br/>
                                        {username.email}
                                    </p>
        </div>
        
        </div>
    );
}

export default Card;