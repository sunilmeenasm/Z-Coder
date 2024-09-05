import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./Addquestion.css"

function Addquestion()
{

    const navigate=useNavigate();
const [question , setQuestion]=useState([]);
const [questiontitle,setQuestiontitle]=useState("");
const [questionlink,setQuestionlink]=useState("");

function handleaddquestion(){

    const newques={title: questiontitle , link:questionlink};
    setQuestion(q=>[...q,newques]);
    setQuestionlink("");
    setQuestiontitle("");
}

function handleremovequestion(index){
    setQuestion(c=>c.filter((_,i)=>i!==index));
}

function handletitlechange(event){
    setQuestiontitle(event.target.value);
}
function handlelinkchange(event){
    setQuestionlink(event.target.value);
}

function handlegotobutton(){
    navigate(question.link);

}


    return (

            <div className="main-container">

            <div className="title-container">
                <h2>Saved Questions : </h2>
            </div>
            <div className="question-input">
                <input className="inp-1"  type="text" placeholder="Question title"  value={questiontitle} onChange={handletitlechange}/>
                <input className="inp-2" type="text" placeholder="Question link" value={questionlink} onChange={handlelinkchange}/>
                <button className="button-29" onClick={handleaddquestion}>Add </button>
            </div>

            <div className="questions-container">
                {/* <div className="title-container"> */}
                <ul>
               {question.map((question,index)=><li key={index}>
                       <p className="title">{question.title} </p> 
                       
                       
                      <a href={question.link} ><button className="button-29"> 
                        Go to Ques. 
                        </button> </a> 
                             <button className="button-29" onClick={()=>handleremovequestion(index)}>
                            Remove
                        </button> 
                    </li>
                )}
                </ul>


            </div>




            </div>


    );
}

export default Addquestion