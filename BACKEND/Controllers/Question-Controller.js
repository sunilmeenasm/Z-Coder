const Question=require('../schema/question-schema')
const {validationResult}=require('express-validator');


const Addquestion= async (req,res,next)=>{
    
    const { title, link, remarks } = req.body;
    const errors=validationResult(req);
        if(!errors.isEmpty())
        {
            return res.json('Invalid inputs !!!!' )
        }

    const isvalid=await Question.findOne({title});
    const isvalid1 =await Question.findOne({link});
    if(isvalid)
    {
       return res.status(400).json("Question with same title already exists !")
    }
    if(isvalid1)
        {
          return res.status(400).json("Question with same link already exists !")
        }
    const createdQuestion=new Question({

            title,
            link,
            remarks,
            creator
        })
        try{
            await createdQuestion.save();
                }
               catch (err){console.log("error occuredd!!!!")}
               
               res.status(201).json({Question : createdQuestion});


    
}

// const getQuesbyId=(req,res,next)=>{
//     const QuesId=req.params.qid;
//     const ques=questions.find(q=>{
//       return q.id===QuesId;
//     })
//     res.json({ques});
// }

module.exports={
    Addquestion
    
    
}










