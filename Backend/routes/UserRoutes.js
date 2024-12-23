const express=require('express');
const Router=express.Router();
const {registerUser,verifyUser, userLogin, userLogout,userProfile}=require('../controllers/userController');
const authenticateUser=require('../middlewares/auth.js')

Router.post('/register-user',registerUser);
Router.post('/verify-user',verifyUser);
Router.post('/login-user',userLogin);
Router.post('/user-logout',authenticateUser,userLogout);
Router.get('/profile-user',userProfile);

module.exports=Router;