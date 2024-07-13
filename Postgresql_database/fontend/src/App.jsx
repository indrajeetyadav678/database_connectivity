// import { useState, useEffect } from 'react'
// import axios from 'axios'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Login from './Login'
import Registration from './Registration'
import Chatbox from './Chatbox';
import User_list from './User_list';
import Home from './Home'



function App() {
  // const [val, setVal] = useState([])
  // const load = () => {
  //   let url = "http://127.0.0.1:8000/login/"
  //   axios.get(url).then(res => {
  //     setVal(res.data)
  //   })
  // }

  // useEffect(() => {
  //   load()
  // }, [])

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Registration />} />
          <Route path='listd' element={<User_list />} />
          <Route path='chat' element={<Chatbox />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
