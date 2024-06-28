import React,{useState,useEffect} from 'react'
import "./final.css"
import { TbCashBanknote } from "react-icons/tb";
import { FaRegCreditCard } from "react-icons/fa";
import { FaQrcode } from "react-icons/fa";
const FinalOrder = ({carts}) => {
    const [totalPrice,setTotalPrice] = useState(0)
    const [place,setPlace] = useState(5)
    const total = ()=>
    {
      let totalPrice = 0;
      {carts.map((ele,index)=>
    {
      totalPrice=ele.Price*ele.qunty+totalPrice;
    });}
    setTotalPrice(totalPrice);
    }
    useEffect(()=>
  {
    total()
  },[total])
  return (
   <>
    <div className='finalContainer'>
    <h2 style={{marginLeft:"130px"}}>Your Order</h2>
    {carts.map((e)=>
    {
        return(
            <>
                <p><span style={{position:"relative",marginLeft:"90px"}}>{e.nameProduct}</span> <span style={{position:"abslute",left:"20px"}}>{e.qunty} * {e.Price}  =  $ {e.qunty * e.Price} </span> </p>       
            </>
        )
    })}
    <select style={{background:"none",position:"relative",marginLeft:"140px"}} onChange={(e)=>
    {
        setPlace(e.target.value)
    }}>
                    <option value={5}>IN</option>
                    <option value={10}>OUT</option>
                </select>
                <br/>
                <button style={{position:"relative",marginLeft:"130px",marginTop:"10px" , background:"none"}}>subTotal </button><span style={{position:"relative",left:"20px"}}> = ${totalPrice}</span>
                <br></br>
                <button style={{position:"relative",marginLeft:"150px",marginTop:"10px" , background:"none"}}>tax </button><span style={{position:"relative",left:"35px"}}>= {place}%</span>  
                <br/>
                <button style={{position:"relative",marginLeft:"130px",marginTop:"10px" , background:"none"}}>totalPrice </button><span style={{position:"relative",left:"18px"}}>= ${totalPrice+((totalPrice/100)*place)}</span>
                <div className='paymentMAthod' style={{position:"relative",display:"flex",justifyContent:"center",gap:"2rem",marginTop:"10px",marginBottom:"20px"}}>
      <div className='cass'>
      <TbCashBanknote style={{fontSize:"30px",color:"liteblack",marginTop:"5px",cursor:"pointer"}}/>
      <br/>
      Cash
      </div>
      <div className='card' style={{position:"relative",width:"20%",marginLeft:"20px",marginTop:"5px",cursor:"pointer"}}><FaRegCreditCard  style={{fontSize:"30px",color:"liteblack"}}/>
      <br/>
      Card
      </div>
      <div className='qr'>
      <FaQrcode  style={{fontSize:"30px",color:"liteblack",marginTop:"5px",cursor:"pointer"}}/><br/>
QR Code
      </div>
    </div>
    <button style={{background:"none",marginLeft:"150px",marginBottom:"10px",cursor:"pointer"}} onClick={()=>
    {
     alert("payment has done sucesfully ")
     window.location.reload()
    }}>Payment</button>
    </div>  
   </>
  )
}
export default FinalOrder