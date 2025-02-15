import React, { useState } from 'react'
import '../Styles/RegisterLogin.css';
import axios from 'axios';

const RegisterLogin = ({setChangeForm}) => {

    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [gender, setGender] = useState("");

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

        try {
            const response = await axios.post('http://localhost:3000/app/User/register-user', data, { withCredentials: true })

            console.log(response)
        } catch (error) {
            throw error;
        }
    }

    const changeFormToLogin=()=>{
        setChangeForm(true);
    }

    return (
        <>


            <form id='register-form'>
                <p id='heading'>Sign Up</p>
                <input type='text' placeholder='Enter Your FullName' className='input-fields' value={fullname} onChange={handlefullnamechange} />
                <input type='email' placeholder='Enter Your Email' className='input-fields' value={email} onChange={handleemailchange} />
                <input type='password' placeholder='Enter Your password' className='input-fields' value={password} onChange={handlePasswordchange} />
                <input type='password' placeholder='Confirm password' className='input-fields' value={confirmPassword} onChange={handleConfirmPasswordchange} />

                <div id='gender-container'>
                    <p id='gender-head'>Gender</p>
                    <label>Male</label>
                    <input type='radio' name='gender' value="Male" onClick={() => getGender("Male")} />
                    <label>Female</label>
                    <input type='radio' name='gender' value="Female" onClick={() => getGender("Female")} />
                </div>

                <button type='submit' onClick={RegisterUser}>Sign Up</button>

                <p id='sign-in-message'>Already having an account?<span id='sign-in-link' onClick={changeFormToLogin} > Sign In</span></p>
            </form>






        </>
    )
}

export default RegisterLogin