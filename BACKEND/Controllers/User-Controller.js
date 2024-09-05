 const {validationResult}=require('express-validator');
 // const uuid=require('uuid');
 const User=require('../schema/user-schema');






const userlogin= async (req,res,next)=>
    {
        const {email,password}=req.body;
        
        
        if(!email || !password)
        {
           return  res.status(400).json("Please fill the form");
        }
        const isvalid=await User.findOne({email}).select("+password");
        if(!isvalid)
        {
           return  res.status(400).json("Invalid Credentials !")  
                                            //email is not correct
        }
        const checkPassword=await isvalid.comparePassword(password);

        if(!checkPassword)
        {
            return  res.status(400).json("Invalid Credentials !") // comparing password
        }
        
    
        res.status(200).json('User logged in !')
    }

 

 const usersignup= async (req,res,next)=>
    {
    
        const {name,email,password,institutename,contactNo,codeForces,leetCode,codeChef}=req.body;
        const errors=validationResult(req);
        if(!errors.isEmpty())
        {
            return res.json('Invalid inputs !!!!' )
        }

       const isinvalid= await User.findOne({email});
        if(isinvalid){
            return res.json('Email already exists !!!!');
        }
        const createdUser=new User({
            name,
            email,
            password,
            institutename,
            contactNo,
            codeForces,
            leetCode,
            codeChef,
            questions:[]

        });

        try{
         await createdUser.save();
             }
            catch (err){console.log("error occuredd!!!!")}
            
            res.status(201).json({user : createdUser});
    };

    const profileinfo=(req,res,next)=>
    {
        const {email,password}=req.body;
        const user=DUMMY_USERS.find(u=>u.email===email);
        const info=[user.email,user.password];
        res.json({info});
    }

// const getUserById= async (req,res,next)=>{
//     const userId=req.params.uid;
//     let user;
//     try{
//         user=await User.findById(userId);
//     }
//     catch(err){
//         res.status(500).json("An error occured !")
//         //return next(error);
//     }
//     if(!user)
//     {
//         res.status(404).json("Cannot find user for the provided Id !!")
//     }
// }

const getUserList = async (req,res,next)=>{
    let user;
    try{
        user= await User.find({},'-password');

    }
    catch(err){
        return res.status(404).json("An error occured !");
    }
   return  res.json({users:users.map(user=>user.toObject({getters:true}))});
}


const getUserDetails = async (req, res, next) => {
    const user = req.user;
    res.status(200).json({
      success: true,
      user,
    });
  }

  






module.exports={
    userlogin,
    usersignup,
    profileinfo,
    // getUserById,
    getUserList,
    getUserDetails
 }