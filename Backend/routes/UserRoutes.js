const express=require('express');
const Router=express.Router();
const {registerUser}=require('../controllers/userController');

Router.post('/register-user',registerUser);

module.exports=Router;