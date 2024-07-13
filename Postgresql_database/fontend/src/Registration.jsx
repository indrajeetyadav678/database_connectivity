// 
import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from 'react';
import axios from 'axios';

const Registration = () => {
    const { loginWithRedirect, user} = useAuth0();
    console.log("user_name",user.name)
    let user_log = {
        "name":"indrajeet",
    }
    const [input, setInput] = useState({user});

    const inputhandle = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setInput(item => ({ ...item, [name]: value }));
    };

    const submithandle = () => {
        let url = "http://127.0.0.1:8000/login/";
        axios.post(url, input).then(res => {
            alert("Registration successful");
            setInput({})
        });
    };

    return (
        <div className='container'>
            <div className='register_wrapper'>
                <h3>Registration</h3><br />
                <input type="text" className='input_field' name="name" value={input.name || ""} placeholder='Enter Name' onChange={inputhandle} /><br /><br />
                <input type="text" className='input_field' name="user_id" value={input.user_id || ""} placeholder='Enter User_name' onChange={inputhandle} /><br /><br />
                <input type="password" className='input_field' name="password" value={input.password || ""} placeholder='Set Password' onChange={inputhandle} /><br /><br />
                <button type='submit' className='signuptbtn' onClick={submithandle}>submit</button><br/>
                <button onClick={()=>loginWithRedirect()}>Login with google</button>
            </div>
        </div>
    );
};

export default Registration;
