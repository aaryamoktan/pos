import React, { useEffect, useState } from 'react'
import "./setting.css"
import Leftbar from '../dashboard/leftbar/Leftbar'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const Setting = () => {
  const [fullname,setFullname] = useState();
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const [mobile,setMobile] = useState();
  const [companyname,setCompany] = useState();
  const [Address,setAddress] = useState();
  const id = useParams();
  console.log(email)
 useEffect(()=>
 {
  axios.get(`http://localhost:4000/userdetails/`+id)
  .then(result=>setEmail(result))
 },[])
  const save = async(e)=>
  {
    e.preventDefault();
    console.log(id)
    try{
     
    }
    catch(err)
    {
      console.log(err)
    }
   
  }
  return (
    <>
        <div className='settingContiner'>
            <Leftbar/>
            <div className='settingright'>
              <div className='settinginner'>
              <h1>Personal Information</h1>
                <label>Full Name</label><input type="text" onChange={(e)=>
                {
                  setFullname(e.target.value)
                }}/><br/>
                <br/>
                <label>Company name</label><input type="text" onChange={(e)=>
                {
                  setCompany(e.target.value)
                }}/><br/><br/>
                <label>Email id</label><input type="text" value={email}
                  onChange={(e)=>
                {
                  setEmail(e.target.value)
                }}
                /><br/><br/>
                <label>Password</label><input type="password"
                  onChange={(e)=>
                {
                  setPassword(e.target.value)
                }}
                /><br/><br/>
                <label>Mobile</label><input type="number"
                  onChange={(e)=>
                {
                  setMobile(e.target.value)
                }}
                /><br/><br/>
                <label>Address</label><input type="text"
                  onChange={(e)=>
                {
                  setAddress(e.target.value)
                }}
                /><br/><br/>
                <button onClick={save}>Save</button>

              </div>
            </div>
        </div>
    </>
  )
}

export default Setting