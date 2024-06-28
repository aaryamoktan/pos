import React from 'react'
import "./left.css"
import img from "../../../image/logo.png"
import { MdDashboardCustomize } from "react-icons/md";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { MdInventory } from "react-icons/md";
import { CiMenuBurger } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import { useParams } from 'react-router-dom';
const Leftbar = (props) => {
 const id1 = props.id
 console.log(id1)
  return (
    <div className='homeLeft'>
    
    <div className='LOGO'>
      <img src={img} alt="my resturent" />
    </div>
    <div className='ul'>
      <ul>
        <li ><b><CiMenuBurger  style={{position:"relative",marginRight:"4px",top:"2px",marginLeft:"40px"}} /><a href={`/admin`}>Menu</a> </b></li>
        <li ><b><MdDashboardCustomize style={{position:"relative",marginRight:"5px",top:"2px",marginLeft:"40px"}}  /><a href="/admin/dashboard">Dashboard</a></b></li>
        <li ><b><MdOutlineShoppingCartCheckout style={{position:"relative",marginRight:"5px",top:"2px",marginLeft:"40px"}}  /><a href="/admin/order">Order</a></b></li>
        <li ><b><MdInventory style={{position:"relative",marginRight:"5px",top:"2px",marginLeft:"40px"}}  /><a href="/admin/inventry">inventry</a></b></li>
        <li ><b><CiSettings style={{position:"relative",marginRight:"5px",top:"3px",marginLeft:"40px"}} /><a href={`/admin/setting`}>setting</a></b></li>
      </ul>
    </div>
    <div className='logout'>
      <button type="submit"><a href="/" style={{color:"black",textDecoration:"none"}}><IoIosLogOut style={{position:"relative",marginRight:"5px",top:"2px"}} />Logout</a></button>
    </div>
    </div>

  )
}

export default Leftbar