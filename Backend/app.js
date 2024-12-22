const express=require('express')
const app=express();
require('dotenv').config({path:'.env'})
const connectDB=require('./database/db_conn.js');
const cookieParser=require('cookie-parser');
const cors=require('cors');
const port=process.env.PORT
const UserRoutes =require('./routes/UserRoutes.js');
const PostRoutes=require('./routes/PostRoutes.js');


app.use(cookieParser());
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}));


app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb",}))


connectDB();


app.use('/app/User',UserRoutes);
app.use('/app/Post',PostRoutes);








app.listen(port,()=>{
    console.log(`The api is running on the port: ${port}`)
})


/*


1)app.js-> express normal setup
2)database folder: db_conn.js->database connection setup : mongoose.connect(link)
3)app.js -> require database file
4)app.js->data coming from frontend configuration
    app.use(express.json({limit:20kb}));
    app.use(express.urlencoded({extented:true,limit:"30kb"}))
5)Add some extra packages, required them and configure them as middleware: dotenv, cors, cookie-parser,bcrypt, jwt
    * put everything in the app.use()
    * codes are available in npm website
6)create controllers(funtions) and middlewares ----> main logic areas
7)create routers


*/