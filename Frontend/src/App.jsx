import React from "react";
import RegisterLogin from "./Pages/RegisterLogin.jsx";
import OneTimePassword from "./Pages/OneTimePassword.jsx";
import Home from "./Pages/Home.jsx";
import Profile from "./Pages/Profile.jsx";
import { BrowserRouter, Routes, Route } from "react-router";


const App = () => {


    return (
        <>
            <BrowserRouter>

                <Routes>
                    <Route path="/register-login" element={<RegisterLogin />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/OneTimePass" element={<OneTimePassword />} />
                    <Route path="/Profile" element={<Profile />} />
                </Routes>

            </BrowserRouter>
        </>
    )
}

export default App;













/*

Components
Props
Hooks(useState, useEffect, useRef)
Axios
react router (react router dom, link, navLink, Navigate)
Context API
Local Storage along with Context API
Redux


*/