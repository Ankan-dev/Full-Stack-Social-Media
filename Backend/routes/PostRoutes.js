const express=require('express')
const {addPost,updatePost, likePost,commentPost}=require('../controllers/postController.js');
const upload=require('../middlewares/multer.js');
const authenticateUser=require('../middlewares/auth.js')

const Router=express.Router();

Router.post('/addPost',authenticateUser,upload.single('userPost'),addPost);
Router.patch('/updatePost',authenticateUser,updatePost);
Router.patch('/likePost',authenticateUser,likePost);
Router.patch('/commentPost',authenticateUser,commentPost);


module.exports=Router