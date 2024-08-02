import React from 'react'
import Leftbar from '../../dashboard/leftbar/Leftbar'
import "./profile.css"
import { CiLogout } from "react-icons/ci";
import { RiEditCircleLine } from "react-icons/ri";
import img from "./image.png"
const Profileinfo = () => {
  return (
    <div className='settingContiner'>
      <Leftbar/>
      <div className='rightsetting'>
              <h1>setting</h1>
              <div className='ulSetting'>
              <ul>
                <li><a href="/admin/setting" style={{textDecoration:"none ",marginTop:"20px"}}>Profile info</a></li>
                <li><a href="/admin/setting/generalsetting" style={{textDecoration:"none ",marginTop:"20px"}}>General Setting</a></li>
                <li><a href="/admin/setting/tax" style={{textDecoration:"none ",marginTop:"20px"}}>Tax</a></li>
                <li><a href="/admin/setting/register" style={{textDecoration:"none ",marginTop:"20px"}}>Register</a></li>
              </ul>
              </div>
            </div>
            <div className='profile1stContainer'>
              <div className='pp1'>
                <img src={img} alt="image"/>
                <RiEditCircleLine style={{color:"orange",fontSize:"40px",position:"absolute",top:"120px",left:"180px"}}/>
                <p>Aarya moktan</p>
                <p style={{marginTop:"-10px"}}>Developer</p>
              </div>
              <div className='pp2'>
                <ul>
                  <li className='l1'><a href="/admin/setting/profile/more">Personal Information</a></li>
                  <li className='l2'><a href="/admin/setting/profile/login">Login & Password</a></li>
                  <li className='l3'><CiLogout style={{ position:"relative",fontSize:"20px",top:"5px"}}/>Logout</li>
                  <li className='l4'>Delete Account</li>
                </ul>
              </div>
            </div>
           
    </div>
   
  )
}

export default Profileinfo