import React from 'react'
import Leftbar from '../../dashboard/leftbar/Leftbar'
import "./tax.css"
const Tax = () => {
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
          </div>
          <div className='taxContainer'>
            <h1>Include Tax</h1>
            <label style={{marginTop:"20px"}}>Dine In Tax(%)</label>
            <br/>
            <input type="text"/>
            <br/>
            <label>TakeAway Tax(%)</label>
            <br/>
            <input type="text"/>
            <br/>
            <button>Save Changes</button>
            
          </div>
  </div>
  )
}

export default Tax