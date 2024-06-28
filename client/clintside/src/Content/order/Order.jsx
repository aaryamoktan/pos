import React, { useState, useEffect } from 'react'
import Leftbar from '../dashboard/leftbar/Leftbar'
import axios from 'axios'
import { IoIosNotifications } from "react-icons/io";
import "./order.css"
const Order = ({ carts }) => {
  const [data, setdata] = useState()
  const [lenght, setlength] = useState(0)
  useEffect(() => {
    axios.get("http://localhost:4000/order")
      .then(result => {
        console.log(result)
        setlength(result.data.length)
        setdata(result.data)
      })
      .catch(err => console.log(err))
  }, [])
  return (
    <div className='orderContainer'>
      <Leftbar />
      <div className='inventry'>
        <div className='invupper'>
          <div className="seacrhInput">
            <input type="text" placeholder="Search" />
          </div>
          <div className='iconNotification'><IoIosNotifications style={{ fontSize: "34px", marginLeft: "4px", marginTop: "2px" }} />
          </div> </div>
        <div className='intmanag'>
          <h1>Total Order  {lenght}</h1></div>
        <div className='maanageProduct'>
          <table>
            <tr className='tr1'>
              <th className='t1'><p>Name</p></th>
              <th className='t2'>Price</th>
              <th className='t3'>Quantity
              </th>
              <th className='t4'>Total</th>
              <th className='t5'>Status</th>
            </tr>
            {data && data.map((e) => {
              return <>
                <tr className='tr2'>
                  <td><p className='p2'>{e.nameProduct}</p></td>
                  <td><p className='p1'></p>${e.Price}</td>
                  <td><p className='p1'></p>{e.qunty}</td>
                  <td><p className='p1'></p>${e.qunty * e.Price}</td>
                  <td >
                    <input type="radio" name="status" value="weiting" style={{ position: "relative", top: "-10px" }} />
                    <label style={{ position: "relative", top: "10px", left: "-35px" }}>Weiting</label>
                    <input type="radio" id="css" name="status" value="dine" style={{ position: "relative", top: "-10px" }} />
                    <label style={{ position: "relative", top: "10px", left: "-25px" }} for="css">Dine</label>
                    <input type="radio" id="javascript" name="status" value="Complete" style={{ position: "relative", top: "-10px" }} />
                    <label style={{ position: "relative", top: "10px", left: "-35px" }} for="javascript">Complete</label>
                  </td>
                  <td>
                  </td>
                </tr>
              </>
            })}
          </table>
        </div>
      </div>
    </div>
  )
}
export default Order