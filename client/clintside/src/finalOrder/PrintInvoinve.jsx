import React, { useRef,useState } from 'react'
import "./print.css"

import { useReactToPrint } from 'react-to-print';
const PrintInvoinve = ({carts,table,totalPrice,place}) => {
    const [data, setdata] = useState(getDate())

    const printref = useRef();
   console.log(carts)
   
    function getDate() {
        const today = new Date();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const date = today.getDate();
        return `${month}/${date}/${year}`;
    }
        const handlePrint = useReactToPrint({

            content:()=> printref.current
            
        })
    
    return (
        <div className='' ref={printref}>
        <div  className='printContainer' style={{textAlign:"center"}}>
            <h1 style={{ marginLeft: "0", marginTop:"100px" }} className='h1'>Thankyou</h1>
            <div className='casher' style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                <p className='h3'>Cashier</p>
                <p className='h3'> millermr</p>
            </div>
            <div style={{ marginTop: "-20px", paddingLeft: "10px", paddingRight: "10px" }} className='casher'>
                <p className='h3'>Table no</p>
                <p className='h3'>{table}</p>
            </div>
            <div style={{ marginTop: "-20px", paddingLeft: "10px", paddingRight: "10px" }} className='casher'>
                <p className=''>Date</p>
                <p className='h3'>{data}</p>
            </div>
           
            <table>
                <tr>
                    <th>Items</th>
                    <th>Quantity</th>
                    <th>Rate</th>
                    <th>Amount</th>
                </tr>
{carts.map((e)=>
{
    return(
        <>
        <tr>
                    <td>{e.nameProduct} </td>
                    <td>{e.qunty} </td>
                    <td>$ {e.Price}</td>
                    <td>$ {e.qunty*e.Price}</td>
                </tr>
        </>
    )
}
)}
                
            </table>
            <div  className='tablebelow'>
           
            <div style={{ marginTop: "0", paddingLeft: "10px", paddingRight: "10px" }} className='casher'>
                <p className='h3'>SubTotal</p>
                <p className='h3'>{totalPrice}</p>
            </div>
            <div style={{ marginTop: "-20px", paddingLeft: "10px", paddingRight: "10px" }} className='casher'>
                <p className='h3'>Tax</p>
                <p className='h3'>{place}%</p>
            </div>
            <div style={{ marginTop: "-20px", paddingLeft: "10px", paddingRight: "10px" }} className='casher'>
                <p className='h3'>Discount</p>
                <p className='h3'>2%</p>
            </div>
            <hr style={{borderStyle: "dotted"}} />
            <div className='casher' style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                <h3 className='h3'>Total Amount</h3>
                <h3 className='h3'>${totalPrice+((totalPrice/100)*place)-((totalPrice/100)*5)} </h3>
            </div>
            <div style={{ marginTop: "-20px", paddingLeft: "10px", paddingRight: "10px" }} className='casher'>
                <p className='h3'>Cash Payment</p>
                <p className='h3'>12</p>
            </div>
            <div style={{ marginTop: "-20px", paddingLeft: "10px", paddingRight: "10px" }} className='casher'>
                <p className='h3'>credit Card</p>
                <p className='h3'>12</p>
            </div>
            <div style={{ marginTop: "-20px", paddingLeft: "10px", paddingRight: "10px" }} className='casher'>
                <p className='h3'>Net Banking</p>
                <p className='h3'>12</p>
            </div>
            <div style={{ marginTop: "-20px", paddingLeft: "10px", paddingRight: "10px" }} className='casher'>
                <p className='h3'>Return</p>
                <p className='h3'>12</p>
            </div>
            </div>
            <h1 style={{fontSize:"10px",marginLeft:"-10px"}}>Thanks for your visit</h1>
            <button onClick={handlePrint} 
             style={{width:"90%",marginLeft:"5%", height:"4.5vh",background:"#F2712A",border:"none",color:"white",fontSize:"15px"}}>Print invoice</button>
        </div>
        </div>
    )
}

export default PrintInvoinve