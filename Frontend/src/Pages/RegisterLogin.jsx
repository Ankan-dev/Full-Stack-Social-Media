import React,{useState} from 'react'

import Register from '../components/Register.jsx';
import Login from '../components/Login.jsx';

const RegisterLogin = () => {
       const [ChangeForm, setChangeForm] = useState(true);

    return (
        <div className='w-full h-[100vh] bg-red-300 flex items-center justify-center' style={{backgroundImage:'url("https://images.unsplash.com/photo-1548913344-66177da9425e?q=80&w=2946&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D%22")',backgroundSize:'cover',backgroundPosition:'center'}}>

            {
                ChangeForm === false ? <Register setChangeForm={setChangeForm} /> : <Login setChangeForm={setChangeForm}/>
            }

        </div>
    )
}

export default RegisterLogin