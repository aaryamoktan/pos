import React, { useEffect, useState } from 'react'
import Leftbar from './leftbar/Leftbar'
import "./dash.css"
import { IoIosNotifications } from "react-icons/io";
import { LiaSellcast } from "react-icons/lia";
import { LuCircleDollarSign } from "react-icons/lu";
import {Chart as Chartjs} from "chart.js/auto"
import { Bar,Line,Doughnut } from 'react-chartjs-2';
import { MdArrowOutward } from "react-icons/md";
import { MdAddCard } from "react-icons/md";
import axios from 'axios';
const Dashboard = () => {
  const [data1,setdata] = useState();
  const [totalPrice,setTotalPrice] = useState(0)
  const [totalqu,setTotalqu] = useState(0)
  const [length,setLength] = useState();
  useEffect(()=>
{
  axios.get("http://localhost:4000/order")
  .then(result=>{console.log(result)
    setLength(result.data.length)
  setdata(result.data)
  })
},[])
const total = ()=>
{
  let totalPrice = 0;
  let totalqu = 0; 
  data1 && data1.map((ele)=>
{
  totalPrice=ele.Price*ele.qunty+totalPrice;
  totalqu = ele.qunty+totalqu;
})
setTotalqu(totalqu)
setTotalPrice(totalPrice);
}
useEffect(()=>
{
total()
},[total])
  return (
    <>
      <div className='Dassboard'>
        <Leftbar />
        <div className='dassboardinner'>
          <div className='dashin'>
            <input type="text" placeholder="Search" /> <IoIosNotifications style={{ position: "Relative", fontSize: "35px", top: "14px", marginLeft: "10px" }} />
          </div>
          <div className='dashinner1'>
            <div className='dashinner11'>
            <MdAddCard style={{fontSize:"40px",margin:"10px",color:"green"}}/>
              <span style={{position:"absolute",fontSize:"20px",top:"20px",marginLeft:"20px"}}>Total Order</span>
              <p style={{position:"absolute",fontSize:"27px",top:"40px",left:"30px"}}>{length}</p>
              <div className='uparr' style={{position:"absolute",width:"50px",top:"55px",height:"50px",left:"180px",borderRadius:"25px"}}><a href="/admin/dashboard/totalorder"><MdArrowOutward style={{fontSize:"50px",color:"green",fontWeight:"100"}}/></a></div>
            </div>
            <div className='dashinner11'>
            <LiaSellcast style={{fontSize:"40px",margin:"10px",color:"lightgreen"}}/>
              <span style={{position:"absolute",fontSize:"20px",top:"20px",marginLeft:"20px"}}>Total Sell</span>
              <p style={{position:"absolute",fontSize:"27px",top:"40px",left:"30px"}}>{totalqu}</p>
              <div className='uparr' style={{position:"absolute",width:"50px",top:"55px",height:"50px",left:"180px",borderRadius:"25px",background:"lightgreen"}}><a href="/admin/dashboard/totalsell"><MdArrowOutward style={{fontSize:"50px",color:"green",fontWeight:"100"}}/></a></div>
            
            </div>
            <div className='dashinner11'>
            <LuCircleDollarSign  style={{fontSize:"40px",margin:"10px",color:"blue"}}/>
              <span style={{position:"absolute",fontSize:"20px",top:"20px",marginLeft:"20px"}}>Total Revenue</span>
              <p style={{position:"absolute",fontSize:"27px",top:"40px",left:"30px"}}>$ {totalPrice}</p>
              <div className='uparr2' style={{position:"absolute",width:"50px",top:"55px",height:"50px",left:"180px",borderRadius:"25px"}}><a href="/admin/dashboard/totalrevenue"><MdArrowOutward style={{fontSize:"50px",color:"blue",fontWeight:"100"}}/></a></div>
            </div>
            <div className='dashinner11'>
              
            </div>
          </div>
          <div className='dashinner2'>
            <div className='dashinner21'>
              <Bar data={{
                labels:["Sunday","Monday","Tuesday","Wednesday","thrusday","Friday","Satueday"],
                datasets:[{
                 label:"Revenue", 
                 data:[100,110,300,300,400,900,100]
                }],
              }}/>
            </div>
            <div className='dashinner22'>
            <Doughnut data={{
                labels:["Sunday","Monday","Tuesday","Wednesday","thrusday","Friday","Satueday"],
                datasets:[{
                 label:"Revenue", 
                 data:[100,110,300,300,400,900,100]
                }],
              }}/>
            </div>
            <div className='dashinner23'>
              <div className='das24'><Line data={{
                labels:["Sunday","Monday","Tuesday","Wednesday","thrusday","Friday","Satueday"],
                datasets:[{
                 label:"Revenue", 
                 data:[100,110,300,300,400,900,100]
                }],
              }}/></div>
              <div className='das24'></div>
            </div>
          </div><h1>Trending Dishes</h1>
          <div className='dashinner3'>
            <div className='dash31'></div>
            <div className='dash31'></div>
            <div className='dash31'></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard