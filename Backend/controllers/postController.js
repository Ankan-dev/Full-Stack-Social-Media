const Post = require('../models/post-model.js');
const User = require('../models/user-model.js');
const uploadToCloudinary = require('../utils/cloudinary.js');

const addPost = async (req, res) => {
    const userId = req.user;
    const localPath = req.file.userPost;
    const description = req.body.description;

    if (!userId || !localPath) {
        res.status(404)
            .json({
                message: "Credentials are missing",
                success: false
            })
    }

    const Upload = await uploadToCloudinary(localPath);

    if (!Upload) {
        return res.status(500)
            .json({
                message: "Internal server error to upload to cloudinary",
                success: false
            })
    }

    const addNewPost = await Post.create({ file: Upload, description: description, User: userId });

    if (!addNewPost) {
        return res.status(500)
            .json({
                message: "Internal server error to create new post",
                success: false
            })
    }

    const updateUser = await User.findOneAndUpdate({ _id: userId }, { $push: { Posts: addNewPost._id } }, { new: true });

    if (!updateUser) {
        return res.status(500)
            .json({
                message: "Internal server error to updating the user ",
                success: false
            })
    }


    return res.status(201)
        .json({
            message: "Post has beed created successfully",
            success: true
        })


}

const updatePost = async (req, res) => {
    const { postId, desc } = req.body

    if (!postId || !desc) {
        return res.status(404)
            .json({
                message: "Post id or description is missing",
                success: false
            })
    }

    try {
        const updatePost = await Post.findOneAndUpdate({ _id: postId }, { $set: { description: desc } }, { new: true });

        if (!updatePost) {
            return res.status(500)
                .json({
                    message: "Internal server error in updating the description",
                    success: false
                })
        }

        return res.status(200)
            .json({
                message: "Description is updated successfully",
                success: true
            })
    } catch (error) {
        return res.status(500)
            .json({
                message: "Internal server error in update post",
                success: false
            })
    }

}

const likePost = async (req, res) => {
    const userId = req.user;
    const { postId } = req.body;

    if (!postId || !userId) {
        return res.status(404)
            .json({
                message: "credentials are missing",
                success: false
            })
    }

    try {
        const addLike = await Post.findOneAndUpdate({ _id: postId }, { $pust: { likes: userId } }, { new: true });

        if (!addLike) {
            return res.status(500)
                .json({
                    message: "Internal server error in adding the like",
                    success: false
                })
        }

        return res.status(200)
            .json({
                message: "The like has been added successfully",
                success: true
            })
    } catch (error) {
        return res.status(500)
            .json({
                message: "Internal server error in liking the post",
                success: true
            })
    }
}


const commentPost = async (req, res) => {
    const userId = req.user;
    const { postId, comment } = req.body;
    if (!postId || !userId || !comment) {
        return res.status(404)
            .json({
                message: "credentials are missing",
                success: false
            })
    }

    const commentObj = {
        User: userId,
        Content: comment
    }

    try {
        const addComment = await Post.findOneAndUpdate({ _id: postId }, { $push: { Comments: commentObj } }, { new: true });

        if (!addComment) {
            return res.status(500)
                .json({
                    message: "Unable to add the comment due to internal server error",
                    success: false
                })
        }

        return res.status(200)
            .json({
                message: "Comment added successfully",
                success: true
            })
    } catch (error) {
        return res.status(500)
            .json({
                message: "Internal server error in adding comment",
                success: false
            })
    }


}


module.exports = { addPost, updatePost, likePost,commentPost };