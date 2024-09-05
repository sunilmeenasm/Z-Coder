const express=require('express')
const router=express.Router();
const UserController=require('../Controllers/User-Controller');


router.post('/login',UserController.userlogin);
router.post('/signup',UserController.usersignup);
router.get('/homepage',UserController.profileinfo);
// router.get('/:uid',UserController.getUserById);
router.get('/userlist',UserController.getUserList);
router.get('/v1',UserController.getUserDetails);

module.exports=router;


