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

            <form id='login-in-form'>
                <p id='heading'>Sign In</p>
                <input type='email' placeholder='Enter Your Email' className='input-fields' value={Email} onChange={handleEmailChange}/>
                <input type='password' placeholder='Enter Your password' className='input-fields' value={Password} onChange={handlePasswordChange} />



                <button type='submit' onClick={loginUser}>Sign In</button>

                <p id='sign-in-message'>Don't Have An account?<span id='sign-in-link' onClick={changeFormToRegister}> Sign Up</span></p>
            </form>

        </>
    )
}

export default Login