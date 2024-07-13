import { useState, useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { adduser_data } from './Loginslice'
import {useNavigate } from 'react-router-dom'; 
import axios from 'axios';
// import Googlelogin from "./Googlelogin";


const Login=()=>{
  const data = useSelector(state=>{state.mylogdata.user_data})
  const dispatch = useDispatch()
  console.log("==============>",data)
  const [input, setInput] = useState({})
  const [val, setVal] = useState([])
  console.log(val)
  const navigate = useNavigate()
  console.log("intput data",input)
  
  const inputhandle = (e) => {
    let name = e.target.name
    let value = e.target.value
    setInput(item => ({ ...item, [name]: value }))
    console.log("-------------->",input.user_id)
  }


    const load = () => {
        let url = "http://127.0.0.1:8000/login/"
        axios.get(url).then(res=>{
          setVal(res.data)
        })
      }

    useEffect(()=>{
      load()

     }, [])

  const submithandle=()=>{
    let userdata = val.filter(item=>item.user_id === input.user_id)
    console.log("######################",userdata[0]["name"])
    let user_name = val.find(item=>item.user_id  === input.user_id)
    console.log(user_name)
    let user_pass = val.find(item=>item.password === input.password)
    console.log(user_pass)
    if(user_name || user_pass){
      alert("Login Successfully")
      dispatch(adduser_data(userdata))
    }
    // console.log(userdata) 
    navigate("/home")
  }

  return (
    <>
      <div className='container'>
        <div className='register_wrapper'>
          <h3>Login</h3><br />
          <input type="text" className='input_field' name="user_id" value={input.user_id || ""} placeholder='Enter User_Id'  onChange={inputhandle} /><br /><br />
          <input type="text" className='input_field' name="password" value={input.password || ""}  placeholder='set Password' Enter Password In onChange={inputhandle} /><br /><br />
          <button type='submit' className='signuptbtn' onClick={submithandle}>submit</button>
          {/* <Googlelogin /> */}
        </div>
      </div>
    </>
  )
}

export default Login;
