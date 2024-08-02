import React,{useState,useEffect} from 'react'
import Leftbar from '../dashboard/leftbar/Leftbar'
import axios from 'axios'
import { IoIosNotifications
} from "react-icons/io";
const OngoingOrder = () => {
  const [data, setdata] = useState()
  const [lenght, setlength] = useState(0)
  const [status,setStatus]=useState(false)
  const [status1,setStatus1]=useState(false)
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
            <li style={{width:"20%",textAlign:"center",background:"white",height:"3vh",borderRadius:"10px",cursor:"pointer"}}>
              <a href="/admin/order" style={{textDecoration:"none",color:"black",fontFamily:"sans-serif"}}>Order</a>
            </li>
            <li  style={{width:"20%",textAlign:"center",background:"white",height:"3vh",borderRadius:"10px",cursor:"pointer"}}>
            <a href="/admin/ongoingorder" style={{textDecoration:"none",color:"black",fontFamily:"sans-serif"}}>On Going Order</a>
            </li>
            <li  style={{width:"20%",textAlign:"center",background:"white",height:"3vh",borderRadius:"10px",cursor:"pointer"}}>
            <a href="/admin/orderHistory" style={{textDecoration:"none",color:"black",fontFamily:"sans-serif"}}>Order Histor</a>
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

export default OngoingOrder