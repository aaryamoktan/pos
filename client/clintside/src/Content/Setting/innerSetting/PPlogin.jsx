import React from 'react'
import Leftbar from '../../dashboard/leftbar/Leftbar'
import "./profile.css"
import { CiLogout } from "react-icons/ci";
import { RiEditCircleLine } from "react-icons/ri";
const PPlogin = () => {
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
                <img src="https://scontent.fktm8-1.fna.fbcdn.net/v/t39.30808-6/451007028_1979726372430621_7055232597399235896_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGI6YgUjrux-fSbp953ghdybcjvtmZCfOltyO-2ZkJ86cBgtjvUApNMfWIAc3HAXr9nU8MWZU2kEPWoP8K3_R0X&_nc_ohc=FVpIK1Emg-EQ7kNvgFOqTU5&_nc_ht=scontent.fktm8-1.fna&oh=00_AYDlcPLkC8UUpeDXqEQxZD2wY3EvyhX_GfOq3zmcNvbR-w&oe=669EC1B3"/>
                <RiEditCircleLine style={{color:"orange",fontSize:"40px",position:"absolute",top:"120px",left:"180px"}}/>
                <p>Aarya moktan</p>
                <p style={{marginTop:"-10px"}}>Founder</p>
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
            <div className='profile2ndContainer'>
              <div className='profileinside'>
                <h1 className='h1fororofile'>Login & Password</h1>
                <div className='div1'>
                  <div><lable>User name</lable><br/><input style={{borderRadius:"10px" ,border:"1px solid black"}} type="text"/></div>
                  <div><lable>user Sales Id Number</lable><input style={{borderRadius:"10px" ,border:"1px solid black"}} type="text"/></div>
                </div>
                <div className='div2'>
                <div><lable>Password</lable><input style={{borderRadius:"10px" ,border:"1px solid black"}} type="password"/></div>
                <div><lable>Changepassword</lable><input style={{borderRadius:"10px" ,border:"1px solid black",marginLeft:"-19px"}} type="password" /></div>
                </div>
                <div className='div3' >
                  <button>Save Change</button>
                </div>
              </div>
            </div>
    </div>
   
  )
}

export default PPlogin