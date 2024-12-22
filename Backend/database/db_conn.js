const mongoose=require('mongoose');

const connectDB= async()=>{
    try {

        const connectInstance= await mongoose.connect(process.env.DB_LINK);
        console.log(`The database is connected with the host : ${connectInstance.connection.host}`)
        
    } catch (error) {
        console.log(error.message);
    }
}

module.exports=connectDB;