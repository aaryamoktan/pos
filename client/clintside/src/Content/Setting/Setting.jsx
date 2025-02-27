import React, { useEffect, useState } from 'react'
import "./setting.css"
import Leftbar from '../dashboard/leftbar/Leftbar'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const Setting = () => 
  {
  return (
    <> 
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
            </div>
           
        </div>
    </>
  )
}
export default Setting