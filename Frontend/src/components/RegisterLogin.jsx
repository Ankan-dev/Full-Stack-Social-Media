import React, { useState } from 'react'
import '../Styles/RegisterLogin.css';

const RegisterLogin = () => {

    const [state, setState] = useState(false);

    
   

    function changeState() {
        if (state === false) {
            setState(true)

        } else {
            setState(false)
        }

    }

    return (
        <>

            {
                state === false ? <form id='register-form'>
                    <p id='heading'>Sign Up</p>
                    <input type='text' placeholder='Enter Your FullName' className='input-fields' />
                    <input type='email' placeholder='Enter Your Email' className='input-fields' />
                    <input type='password' placeholder='Enter Your password' className='input-fields' />
                    <input type='password' placeholder='Confirm password' className='input-fields' />

                    <div id='gender-container'>
                        <p id='gender-head'>Gender</p>
                        <label>Male</label>
                        <input type='radio' name='Male' value="Male" />
                        <label>Female</label>
                        <input type='radio' name='Female' value="Female" />
                    </div>

                    <button type='submit'>Sign Up</button>

                    <p id='sign-in-message'>Already having an account?<span id='sign-in-link' onClick={changeState}> Sign In</span></p>
                </form> : <form id='login-in-form'>
                    <p id='heading'>Sign In</p>
                    <input type='email' placeholder='Enter Your Email' className='input-fields' />
                    <input type='password' placeholder='Enter Your password' className='input-fields' />



                    <button type='submit'>Sign In</button>

                    <p id='sign-in-message'>Don't Have An account?<span id='sign-in-link' onClick={changeState}> Sign Up</span></p>
                </form>
            }





        </>
    )
}

export default RegisterLogin