const express=require('express')
const {addPost}=require('../controllers/postController.js');
const upload=require('../middlewares/multer.js');
const authenticateUser=require('../middlewares/auth.js')

const Router=express.Router();

Router.post('/addPost',authenticateUser,upload.single('userPost'),addPost);


module.exports=Router