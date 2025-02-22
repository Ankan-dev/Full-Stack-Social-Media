import React,{useState} from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const Login = ({setChangeForm}) => {


    const [Email,setEmail]=useState("");
    const [Password,setPassword]=useState("");
    const navigate=useNavigate();


    const handleEmailChange=(e)=>{
        setEmail(e.target.value);
    }

    const handlePasswordChange=(e)=>{
        setPassword(e.target.value);
    }


    const loginUser=async(e)=>{
        e.preventDefault();
        try {
           const data={
            email:Email,
            password:Password
           } 

           const response=await axios.post('http://localhost:3000/app/User/login-user',data,{withCredentials:true});

           if(response){
                console.log(response);
                navigateToHome();
           }

        } catch (error) {
            throw error.message;
        }
    }






    const changeFormToRegister=()=>{
        setChangeForm(false);
    }


    const navigateToHome=()=>{
        navigate('/')
    }

    return (
        <>

            <form id='login-in-form' className=' sm:w-[30rem] sm:h-[25rem] w-full h-full flex flex-col items-center justify-center gap-3 backdrop-blur-md sm:rounded-3xl text-[#72c6c6]' style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
                <p id='heading' className='font-bold text-4xl mb-3'>Sign In</p>
                <input type='email' placeholder='Enter Your Email' className='w-[80%] px-2 py-2 bg-transparent border-b-2 placeholder:text-[#72c6c6] placeholder:font-semibold outline-none placeholder:opacity-45' value={Email} onChange={handleEmailChange}/>
                <input type='password' placeholder='Enter Your password' className='w-[80%] px-2 py-2 bg-transparent border-b-2 placeholder:text-[#72c6c6] placeholder:font-semibold outline-none placeholder:opacity-45' value={Password} onChange={handlePasswordChange} />



                <button type='submit' onClick={loginUser} className=' px-7 py-2 rounded-full border-2 border-white font-bold my-3 hover:bg-[#72c6c6] hover:border-[#72c6c6] hover:text-white transition-all duration-300 ease-in-out  hover:scale-110 active:scale-90'>Sign In</button>

                <p id='sign-in-message'>Don't Have An account?<span id='sign-in-link' onClick={changeFormToRegister}> Sign Up</span></p>
            </form>

        </>
    )
}

export default Login