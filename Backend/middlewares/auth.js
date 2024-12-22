const jwt =require('jsonwebtoken');

const authenticateUser=async(req,res,next)=>{
    const token=req.cookies?.Token

    if(!token){
        return res.status(404)
            .json({
                success:false,
                message:"Cookies are missing"
            })
    }

    try{

        const verifiedUserId=jwt.verify(token,process.env.JWT_SECRET);

        req.user=verifiedUserId;
        next();
      
    }catch(error){
        return res.status(500)
        .json({
            success:false,
            message:"Internal server error in middleware"
        }) 
    }
}

module.exports=authenticateUser