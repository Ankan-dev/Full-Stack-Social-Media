const User = require('../models/user-model.js');
const { hashPassword, checkPassword} = require('../utils/hashing.js');
const sendEmail = require('../utils/sendEmail.js');
const jwt=require('jsonwebtoken')

const registerUser = async (req, res) => {
    const { fullname, email, password, gender } = req.body;

    if (!fullname || !email || !password || !gender) {
        return req.status(404)
            .json({
                message: "Your crendentials are missing",
                success: false
            })
    }

    try {
        const checkIfUserExists = await User.findOne({ Email: email });

        if (checkIfUserExists && checkIfUserExists.length !== 0) {
            return req.status(409)
                .json({
                    message: "user already exists",
                    success: false
                })
        }

        const newPassword = await hashPassword(password);

        if (!newPassword) {
            return req.status(500)
                .json({
                    message: "Internal server error in saving the password",
                    success: false
                })
        }

        const OTP = Math.floor(100000 + Math.random() * 900000).toString();

        const emailStatus = await sendEmail(email, OTP);

        if (!emailStatus) {
            return res.status(401)
                .json({
                    message: "Email is incorrect",
                    success: false
                })
        }

        const createUser = await User.create({ FullName: fullname, Email: email, Password: newPassword, Gender: gender, OTP: OTP });

        if (!createUser) {
            return req.status(500)
                .json({
                    message: "Internal server error in saving the Details",
                    success: false
                })
        }

        return res.status(201)
            .json({
                message: "User has been created successfully",
                status: true
            })


    } catch (error) {
        return req.status(500)
            .json({
                message: "Internal Server Error in Registering User",
                success: false
            })
    }

}

const verifyUser = async (req, res) => {
    const { email, code } = req.body;

    if (!email || !code) {
        res.status(404)
            .json({
                message: "Credentials are missing",
                success: false
            })
    }

    try {
        const checkUser = await User.findOne({ Email: email });

        if (!checkUser) {
            return res.status(404)
                .json({
                    message: "User not found",
                    success: false
                })
        }

        if (code !== checkUser.Password) {
            return res.status(402)
                .json({
                    message: "Incorrect code",
                    success: false
                })
        }

        const updateUser = await User.findOneAndUpdate({ Email: email }, { isVerified: true }, { new: true });

        if (!updateUser) {
            return res.status(500)
                .json({
                    message: "Internal server error in changing the verifying status",
                    success: false
                })
        }

        return res.status(200)
            .json({
                message: "user verified successfully",
                success: true
            })
    } catch (error) {
        return res.status(500)
                .json({
                    message:"Internal server error in verifying the user",
                    success:false
                })
    }


}

const userLogin=async(req,res)=>{
    const {email,password}=req.body;

    if(!email || !password){
        return res.status(404)
                .json({
                    message:"Credentials are missing",
                    success:false
                })
    }

    const getUser=await User.findOne({Email:email});

    if(!getUser){
        return res.status(404)
                .json({
                    message:"No user found with this email id",
                    success:false
                })
    }
    
    const checkUserPassword=await checkPassword(getUser.Password,password);

    if(!checkUserPassword){
        return res.status(404)
                .json({
                    message:"Incorrect Password",
                    success:false
                })
    }

    const token=jwt({id:getUser._id},process.env.JWT_SECRET,);

    const options={
        httpOnly:true,
        secure:true
    }

    return res.status(200)
            .cookie("Token",token,options)
            .json({
                message:"THe user is loggedin Successfully",
                success:true
            })

}

module.exports = { registerUser,verifyUser,userLogin };