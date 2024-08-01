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
      <div >
            <ul style={{display:"flex",listStyle:"none", gap:"120px"}}>
              <li style={{width:"20%",textAlign:"center",background:"white",height:"3vh",borderRadius:"10px"}}>
                Order
              </li>
              <li style={{width:"20%",textAlign:"center",background:"white",height:"3vh",borderRadius:"10px"}}>
                On Going Order

              </li>
              <li style={{width:"20%",textAlign:"center",background:"white",height:"3vh",borderRadius:"10px"}}>
                Order History

              </li>
            </ul>
         
          </div>
        <div className='invupper'>
         
          <div className="seacrhInput">
            <input type="text" placeholder="Search" />
          </div>
          <div className='iconNotification'><IoIosNotifications style={{ fontSize: "34px", marginLeft: "4px", marginTop: "2px" }} />
          </div> </div>
       
        <div className='maanage1Product'>
          
            {data && data.map((e) => {
              return <>
                <div className='manageinner'>
                  <h3 >{e.nameProduct}</h3>
                <p> quanaty:{e.qunty}</p>
                 <p>${e.Price}</p>

                </div>
              </>
            })}
          
        </div>
      </div>
    </div>
  )
}
export default Order