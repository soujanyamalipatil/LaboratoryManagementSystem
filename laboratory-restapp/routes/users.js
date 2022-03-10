const express=require('express');
const userRouter=express.Router();
const auth=require('../middleware/auth')
const userController=require('../controller/users');

//registration
userRouter.post('/register',userController.register)
//login
userRouter.post('/login',userController.login);
//getting users
userRouter.get('/users',auth.authorizeUserAdmin,userController.getAllusers)
//editing users
userRouter.put('/edit-users',userController.editUser)
module.exports=userRouter