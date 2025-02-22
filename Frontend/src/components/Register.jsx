import React, { useState } from 'react'
import axios from 'axios';
import { BeatLoader } from "react-spinners";
import { useNavigate } from 'react-router-dom';

const RegisterLogin = ({ setChangeForm }) => {

    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [gender, setGender] = useState("");
    const [submitChecker,setSubmitChecker]=useState(false);
    const navigate=useNavigate();

    const handlefullnamechange = (e) => {
        setFullname(e.target.value);
    }
    const handleemailchange = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordchange = (e) => {
        setPassword(e.target.value);
    }
    const handleConfirmPasswordchange = (e) => {
        setConfirmPassword(e.target.value);
    }

    const getGender = (genderValue) => {
        setGender(genderValue)
        console.log(gender)
    }



    const RegisterUser = async (e) => {
        e.preventDefault();
        const data = {
            fullname: fullname,
            email: email,
            password: password,
            gender: gender
        }

        setSubmitChecker(true);
        try {
            const response = await axios.post('http://localhost:3000/app/User/register-user', data, { withCredentials: true })
            if(response && response.data.status===true){
                navigate('/OneTimePass')
            }
        } catch (error) {
            throw error;
        }
    }

    const changeFormToLogin = () => {
        setChangeForm(true);
    }

    return (
        <>


            <form id='register-form' className=' sm:w-[30rem] sm:h-[37rem] w-full h-full flex flex-col items-center justify-center gap-3 backdrop-blur-md sm:rounded-3xl text-[#72c6c6]' style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>

                <p id='heading' className='font-bold text-4xl mb-3'>Sign Up</p>
                <input type='text' placeholder='Enter Your FullName' className='w-[80%] px-2 py-2 bg-transparent border-b-2 placeholder:text-[#72c6c6] placeholder:font-semibold outline-none placeholder:opacity-45' value={fullname} onChange={handlefullnamechange} />
                <input type='email' placeholder='Enter Your Email' className='w-[80%] px-2 py-2 bg-transparent border-b-2 placeholder:text-[#72c6c6] placeholder:font-semibold outline-none placeholder:opacity-45' value={email} onChange={handleemailchange} />
                <input type='password' placeholder='Enter Your password' className='w-[80%] px-2 py-2 bg-transparent border-b-2 placeholder:text-[#72c6c6] placeholder:font-semibold outline-none placeholder:opacity-45' value={password} onChange={handlePasswordchange} />
                <input type='password' placeholder='Confirm password' className='w-[80%] px-2 py-2 bg-transparent border-b-2 placeholder:text-[#72c6c6] placeholder:font-semibold outline-none placeholder:opacity-45' value={confirmPassword} onChange={handleConfirmPasswordchange} />

                <div id='gender-container' className=' w-full  mt-3 gap-3 px-12'>
                    <p id='gender-head' className='font-bold text-xl mb-3'>Gender</p>

                    <div >
                        <label className='mr-2'>Male</label>
                        <input type='radio' className='mr-5' name='gender' value="Male" onClick={() => getGender("Male")} />
                        <label className='mr-2'>Female</label>
                        <input type='radio' name='gender' value="Female" onClick={() => getGender("Female")} />

                    </div>

                </div>

                <button type='submit' onClick={RegisterUser} className=' px-7 py-2 rounded-full border-2 border-white font-bold my-3 hover:bg-[#72c6c6] hover:border-[#72c6c6] hover:text-white transition-all duration-300 ease-in-out  hover:scale-110 active:scale-90'>{!submitChecker?<p>Sign Up</p>:<BeatLoader color="#ffffff" size={10}/>}</button>

                <p id='sign-in-message'>Already having an account?<span id='sign-in-link' onClick={changeFormToLogin} > Sign In</span></p>
            </form>






        </>
    )
}

export default RegisterLogin