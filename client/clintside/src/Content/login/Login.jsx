import React, { useEffect, useState } from 'react'
import "./login.css"
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import img1  from "../../image/loginpicture.png"
const Login = () => {
  const [userD,setUserd] = useState();
  const [Email,setEmail] =useState();
  const [password,setPassword] = useState();
  const navigation = useNavigate()
    const submit = (e)=>
    {
          if(password==="match" && Email==="aaryamoktan2055@gmail.com")
          {
            alert("welcome to our pos system mr aarya")
            navigation("/admin")
          } 
          else 
          {
            alert(" you have inter worng details")
          }   
    }
    useEffect(()=>
    {
      axios.get("http://localhost:4000/userlogin")
      .then(result=>setUserd(result.data))
    },[])
  return (
    <div className='loginContainer'>
    <div className='loginleft'>
    <img src={img1}/>
    </div>
        <div className='form' onSubmit={submit}>
        <h1>Get Started</h1>
        <p>Dont Have an Account? <a href=""> Sign Up</a></p>
            <form>
           <input id="userId" type="text" onChange={(e)=>
            {
              setEmail(e.target.value)
            }} placeholder='User Id' required />
            <br/>
           <input id="password" type="password" placeholder='Password' onChange={(e)=>
            {
              setPassword(e.target.value)
            }} required/>
            <br/>
            <input className='checkbox' type="checkbox"/><b>Remember me </b><button className='forget'><a href="">Forget Password</a></button>
            <br/>
            <button >Sign In</button>
            </form>
        </div>
    </div>
  )
}
export default Login