import React from "react";
import RegisterLogin from "./components/RegisterLogin";
import axios from 'axios';


const App= ()=>{
 
    async function getData() {
        try {
            let data=await axios.get("https://catfact.ninja/fact");
            console.log(data);
        } catch (error) {
            console.log("Error has occured: ",error);
        }
    }

    getData();

    return(
        <div>
            <RegisterLogin/>
        </div>
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