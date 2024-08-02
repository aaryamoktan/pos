import React, { useState,useEffect } from 'react'
import "./int.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoAddOutline } from "react-icons/io5";
import { FaPen } from "react-icons/fa6";
import { IoIosNotificationsOutline } from "react-icons/io";
import Updateint from './Updateint';
import Leftbar from '../dashboard/leftbar/Leftbar'
import axios from "axios"
import Addp from './Addp';
import { Link } from 'react-router-dom';
const Int = () => {
  const [apple,setlist] = useState();
  const [modal,setmodal] = useState(false)
  const [update,setUpdate] = useState(false);
  console.log(apple)
  useEffect(()=>
  {
    axios.get("http://localhost:4000/getdata")
    .then(result=>setlist(result.data))
    .catch(err=>console.log(err))
  },[])

 const Ddelete=(id)=>{
  axios.delete(`http://localhost:4000/deleteint/`+id)
  .then(result=>console.log(result))
  .catch(err=>console.log(err))
  window.location.reload();
 }
  return (
    <>
        <div className='intContainer'>
        <Leftbar/>
        {update && <Updateint onClose={()=>
          {
            setUpdate(false)
          }}/>}
        
        <div className='inventry'>
          <div className='invupper'>
          <div className="seacrhInput">
            <input type="text" placeholder="Search"/>
          </div>
          <div className='iconNotification'><IoIosNotificationsOutline style={{fontSize:"34px",marginLeft:"4px",marginTop:"2px"}}/>
          </div> </div>
          <div className='intmanag'>
          <h1>Manage Product</h1><button onClick={()=>setmodal(true)}><IoAddOutline style={{position:"relative",marginLeft:"-10px",top:"px",fontSize:"15px",fontStyle:"bold"}}/> Add New Product</button></div>
          {modal && <Addp onClose={()=>
          {
            setmodal(false)
          }}/>}
          <div className='maanageProduct'>
          <table>
  <tr className='tr1'>
    <th className='t1'><p>Name</p></th>
    <th className='t2'>Price</th>
    <th className='t3'>Category</th>
    <th className='t4'>Available</th>
    <th className='t5'>Action</th>
  </tr>
{apple && apple.map((e)=>
{
  return<>
  <tr className='tr2'>
  <td style={{border:"none"}}><p className='p2'>{e.nameProduct}</p></td>
    <td style={{border:"none"}}><p className='p1'></p>${e.Price}</td>
    <td style={{border:"none"}}><p className='p1'></p>{e.ChooseCategory}</td>
    <td  style={{border:"none"}}>{e.image}</td>
    <td className='editdelete' style={{border:"none"}}>
    <p style={{position:"relative",left:"15%"}}><Link to={`/admin/inventry/update/${e._id}`}style={{color:"black"}}><FaPen style={{position:"relative",fontSize:"20px",left:"30px",top:"10px"}}/></Link></p>
    <p style={{position:"relative",left:"10%"}}  onClick={()=>
    {
      Ddelete(e._id)
    }}><RiDeleteBin6Line style={{position:"relative",fontSize:"20px",left:"30px",top:"8px",color:"red"}}/></p>
    </td>
    </tr>
  </>
})}  
</table>
          </div>
        </div>
        </div>
    </>
  )
}

export default Int