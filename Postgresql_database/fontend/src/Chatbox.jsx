import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

const Chatbox = () => {
    const data = useSelector(state => state.mylogdata?.user_data);
    console.log("User data:", data);

    const [username, setUsername] = useState("null");
    const dispatch = useDispatch();
    const [input, setInput] = useState({});
    const [val, setVal] = useState([]);
    const [ws, setWs] = useState(null);

    useEffect(() => {
        if (data && data.length > 0) {
            const user_id = data[0]["user_id"];
            setUsername(user_id);
            setInput(prevInput => ({ ...prevInput, user_id }));
            console.log("Username set:", user_id);
        }
    }, [data]);

    const inputhandle = (e) => {
        const { name, value } = e.target;
        setInput(prevInput => ({ ...prevInput, [name]: value }));
    };

    const submithandle = () => {
        const url = "http://127.0.0.1:8000/chat/";
        axios.post(url, input).then(res => {
            alert("Message Successfully Sent");
        });
    };

    useEffect(() => {
        const socket = new WebSocket('ws://127.0.0.1:8000/ws/chating/');
        setWs(socket);

        socket.onopen = () => {
            console.log('WebSocket connection established');
        };

        socket.onmessage = (event) => {
            const newMessage = JSON.parse(event.data);
            setVal(prevVal => [...prevVal, newMessage]);
            console.log("--- New message received --->", newMessage);
        };

        socket.onerror = (error) => {
            console.log('WebSocket error:', error);
        };

        socket.onclose = (event) => {
            console.log('WebSocket connection closed:', event);
        };

        return () => {
            socket.close();
        };
    }, []);

    let anser = val.map((key, index) => (
        <div key={index} className="chatmsgdata">{key.msg}</div>
    ));

    return (
        <>
            <h3 style={{ textAlign: "center", fontSize: "30px" }}>Chat</h3><br />
            <div className='chatcontainer'>
                {anser}
            </div>
            <div className='msg_input_container'>
                <div className='register_wrapperchat'>
                    <input
                        type="text"
                        className='input_fieldchat'
                        name="user_id"
                        value={username}
                        placeholder='Enter User_Id'
                        readOnly
                        hidden
                    /><br /><br />
                    <input
                        type="text"
                        className='input_fieldchat'
                        name="msg"
                        value={input.msg || ""}
                        placeholder='Enter Message'
                        onChange={inputhandle}
                    />
                    <button type='submit' className='msgsend' onClick={submithandle}>Send</button>
                </div>
            </div>
        </>
    );
};

export default Chatbox;
