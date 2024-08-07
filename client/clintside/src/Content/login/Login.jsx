import React, { useEffect, useState } from 'react'
import "./login.css"
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import img1 from "../../image/loginpicture.png"
const Login = () => {
  const [name1, setUserd] = useState();
  const [name, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigation = useNavigate()
  const submit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:4000/login", { name, password })
      .then(result => {
        if (result.data === "manager") {
          navigation("/admin")
        }
        if (result.data === "Casiher") {
          navigation("/")
        }
        if (result.data === "Weiter") {
          navigation("/")
        }
        if (result.data === "Ceif") {
          navigation("/cook")
        }
      })

  }

  return (
    <div className='loginContainer'>
      <div className='loginleft'>
        <img src={img1} />
      </div>
      <div className='form' onSubmit={submit}>
        <h1>Get Started</h1>
        <p>Dont Have an Account? <a href=""> Sign Up</a></p>
        <form>
          <input id="userId" type="text" onChange={(e) => {
            setEmail(e.target.value)
          }} placeholder='User Id' name="name" required />
          <br />
          <input id="password" type="password" placeholder='Password' onChange={(e) => {
            setPassword(e.target.value)
          }} name="password" required />
          <br />
          <input className='checkbox' type="checkbox" /><b>Remember me </b><button className='forget'><a href="">Forget Password</a></button>
          <br />
          <button >Sign In</button>
        </form>
      </div>
    </div>
  )
}
export default Login