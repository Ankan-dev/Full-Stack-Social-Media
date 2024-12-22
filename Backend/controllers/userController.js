const User = require('../models/user-model.js');
const { hashPassword } = require('../utils/hashing.js');
const sendEmail = require('../utils/sendEmail.js');

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

        const createUser = await User.create({ FullName: fullname, Email: email, Password: newPassword, Gender: gender,OTP:OTP });

        if (!createUser) {
            return req.status(500)
                .json({
                    message: "Internal server error in saving the Details",
                    success: false
                })
        }

        return res.status(201)
                .json({
                    message:"User has been created successfully",
                    status:true
                })


    } catch (error) {
        return req.status(500)
            .json({
                message: "Internal Server Error in Registering User",
                success: false
            })
    }

}

module.exports={registerUser};