import React, { useState } from 'react'
import Leftbar from '../../dashboard/leftbar/Leftbar'
import "./regis.css"
const Register = () => {
  const [name,setName]= useState()
  const [age,setAge] = useState()
  const [number,setNumber]=useState();
  const [position,setPosition] = useState();
  const regist=async(e)=>
  {
    e.preventDefault();
    try{

    }
    catch(err)
    {
      console.log(err)
    }
  }
  return (
    <div className='settingContiner'>
    <Leftbar/>
    <div className='rightsetting'>
            <h1>setting</h1>
            <div className='ulSetting'>
            <ul>
              <li><a href="/admin/setting/profile" style={{textDecoration:"none ",marginTop:"20px"}}>Profile info</a></li>
              <li><a href="/admin/setting/generalsetting" style={{textDecoration:"none ",marginTop:"20px"}}>General Setting</a></li>
              <li><a href="/admin/setting/tax" style={{textDecoration:"none ",marginTop:"20px"}}>Tax</a></li>
              <li><a href="/admin/setting/register" style={{textDecoration:"none ",marginTop:"20px"}}>Register</a></li>
            </ul>
            </div>
             <div className='reisContainer'>
              <h2>Registration Form</h2>
              <form>
                
               <input placeholder='Name' type="text" onChange={(e)=>
                {
                  setName(e.target.value)
                }
               } name="name"/>
               <br/>
               <input placeholder='Number' type="number" onChange={(e)=>
                {
                  setNumber(e.target.value)
                }
               } name="number"/>
               <br/>
               <input placeholder='age' type="number" onChange={(e)=>
                {
                  setAge(e.target.value)
                }
               } name="age"/>
               <br/>
               <select onChange={(e)=>
                {
                  setPosition(e.target.value)
                }
                
               } name="position">
                <option>Position</option>
                <option value="Manager">Manager</option>
                <option value="Casiher">Casiher</option>
                <option value="Weiter">Weiter</option>
                <option value="Ceif">Ceif</option>
               </select><br/>
               <button onClick={regist}>Register</button>
              </form>
             </div>
          </div>
       
  </div>
  )
}

export default Register