const express=require('express')

// const QuestionController=require('../Controllers/Question-Controller.js')/
const QuestionController = require("../Controllers/Question-Controller.js")
const router=express.Router();
router.post('/add',QuestionController.Addquestion);
// router.get('/:qid',QuestionController.getQuesbyId);

module.exports=router;
