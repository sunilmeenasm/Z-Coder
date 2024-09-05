const express = require('express')
const app = express()
const UserRouting=require('./Routes/User-Routing');
const bodyParser=require('body-parser');
const QuestionRouting=require('./Routes/Question-Routing');
const mongoose=require('mongoose');
const cors=require('cors');

const corsOption={
    origin: "http://localhost:5173",
    methods: "GET, POST,PUT,DELETE,PATCH",
    credentials:true,
};

app.use(cors(corsOption));
app.use(bodyParser.json());
// app.use((req,res,next)=>{
//     res.setHeader('Access-Control-Allow-Origin','http://localhost:5173');
//     res.header('Access-Control-Allow-Credentials', 'true');
//     res.setHeader('Access-Control-Allow-Headers','Origin, X-Requested-Wit,Content-Type,Accept,Authorization')
//     res.setHeader('Access-Control-Allow-Methods','GET,POST,PATCH,PUT,DELETE')
//     next();
// })

app.use('/api/user',UserRouting);
app.use('/api/user/savedQuestions',QuestionRouting);



 


console.log ('listing on port 5000');
mongoose.connect('mongodb+srv://prashantsaurabh2016:prashant347@cluster0.y63n7.mongodb.net/ZCODER?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{
    console.log('Connected to database !!!!')
    app.listen(5000);})
.catch(err=>{console.log(err)})


  