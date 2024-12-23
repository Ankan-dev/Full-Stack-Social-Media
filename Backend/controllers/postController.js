const Post=require('../models/post-model.js');
const User=require('../models/user-model.js');
const uploadToCloudinary=require('../utils/cloudinary.js');

const addPost=async (req,res) => {
    const userId=req.user;
    const localPath=req.file.userPost;
    const description=req.body.description;

    if(!userId || !localPath){
        res.status(404)
            .json({
                message:"Credentials are missing",
                success:false
            })
    }

    const Upload=await uploadToCloudinary(localPath);

    if(!Upload){
        return res.status(500)
                .json({
                    message:"Internal server error to upload to cloudinary",
                    success:false
                })
    }

    const addNewPost=await Post.create({file:Upload,description:description,User:userId});

    if(!addNewPost){
        return res.status(500)
                .json({
                    message:"Internal server error to create new post",
                    success:false
                })
    }

    const updateUser=await User.findOneAndUpdate({_id:userId},{$push:{Posts:addNewPost._id}},{new:true});

    if(!updateUser){
        return res.status(500)
                .json({
                    message:"Internal server error to updating the user ",
                    success:false
                })
    }


    return res.status(201)
            .json({
                message:"Post has beed created successfully",
                success:true
            })


}


module.exports={addPost};