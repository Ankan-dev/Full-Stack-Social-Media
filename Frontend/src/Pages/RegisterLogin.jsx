import React,{useState} from 'react'
import '../Styles/RegisterLogin.css';
import Register from '../components/Register.jsx';
import Login from '../components/Login.jsx';

const RegisterLogin = () => {
       const [ChangeForm, setChangeForm] = useState(false);

    return (
        <>

            {
                ChangeForm === false ? <Register setChangeForm={setChangeForm} /> : <Login setChangeForm={setChangeForm}/>
            }

        </>
    )
}

export default RegisterLogin