import React, { useState } from 'react'
import Leftbar from '../../dashboard/leftbar/Leftbar'
import "./tax.css"
import axios from 'axios';
const Tax = () => {
  const [tax1, setTax1] = useState();
  const [tax2, setTax2] = useState();
  console.log(tax1, tax2)
  const onSubmit = async (e) => {
    try {
      fetch("http://localhost:4000/tax", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({tax1,tax2})
      })
      window.location.reload();
    }
    catch (err) {
    console.log(err)
  }
}
return (
  <div className='settingContiner'>
    <Leftbar />
    <div className='rightsetting'>
      <h1>setting</h1>
      <div className='ulSetting'>
        <ul>
          <li><a href="/admin/setting/profile" style={{ textDecoration: "none ", marginTop: "20px" }}>Profile info</a></li>
          <li><a href="/admin/setting/generalsetting" style={{ textDecoration: "none ", marginTop: "20px" }}>General Setting</a></li>
          <li><a href="/admin/setting/tax" style={{ textDecoration: "none ", marginTop: "20px" }}>Tax</a></li>
          <li><a href="/admin/setting/register" style={{ textDecoration: "none ", marginTop: "20px" }}>Register</a></li>
        </ul>
      </div>
    </div>
    <div className='taxContainer'>
      <h1>Include Tax</h1>
      <label style={{ marginTop: "20px" }}>Dine In Tax(%)</label>
      <br />
      <input onChange={(e) => {
        setTax1(e.target.value)
      }
      } type="number" name="tax1" />
      <br />
      <label>TakeAway Tax(%)</label>
      <br />
      <input onChange={(e) => {
        setTax2(e.target.value)
      }
      } type="number" name="tax2" />
      <br />
      <button style={{ cursor: "pointer" }} onClick={onSubmit}>Save Changes</button>

    </div>
  </div>
)
}
export default Tax