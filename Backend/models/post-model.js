const mongoose=require('mongoose')

//sub schema

const commentSchema=mongoose.Schema({
    User:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Users"
    },
    Content:{
        type:String,
        require:true
    }
})



//main post schema
const postSchema=mongoose.Schema({
    file:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    likes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Users"
    }],
    Comments:[commentSchema],
    User:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true
    }
})

const postModel=mongoose.model("Posts",postSchema);

module.exports=postModel