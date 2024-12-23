const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    FullName:{
        type:String,
        require:true
    },
    Email:{
        type:String,
        require:true
    },
    Password:{
        type:String,
        require:true
    },
    Gender:{
        type:String
    },
    OTP:{
        type:String
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    RefreshToken:{
        type:String
    },
    Profile:{
        type:String
    },
    Posts:[{
        type:mongoose.Schema.Types.ObjectId,
        res:'Posts'
    }]
})

const User=mongoose.model("User",userSchema)

module.exports=User