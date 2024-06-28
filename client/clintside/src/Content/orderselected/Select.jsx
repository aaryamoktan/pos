import React, { useEffect, useState } from 'react'
import "./select.css"
import { useSelector, useDispatch } from 'react-redux'
import { RiSubtractLine } from "react-icons/ri";
import { IoAddOutline } from "react-icons/io5";
import { removeToCart, increaseItems, decreaseItems, emptyitem } from "../../redux/cartSlice"
import FinalOrder from '../../finalOrder/FinalOrder';
const Select = () => {
  const [totalPrice, setTotalPrice] = useState(0)
  const [status,setstatus] = useState(false)
  const { carts } = useSelector((state) => state.allCart);
  const dispatch = useDispatch();
  const Order1 = async (e) => { 
    try {
      const body = {
        order: carts
      }
      const headers = {
        "Content-Type": "application/json"
      }
      const response = await fetch("http://localhost:4000/order", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body)
      })
    }
    catch (Err) {
      console.log(Err)
    }
  }
  const handleremove = (e) => {
    dispatch(removeToCart(e))
  }
  const remove = (e) => {
    dispatch(decreaseItems(e))
  }
  const inc = (e) => {
    dispatch(increaseItems(e))
  }
  const empty = () => {
    dispatch(emptyitem())
  }
  const total = () => {
    let totalPrice = 0;
    carts.map((ele, index) => {
      totalPrice = ele.Price * ele.qunty + totalPrice
    });
    setTotalPrice(totalPrice);
  }
  useEffect(() => {
    total()
  }, [total])
  return (
    <>
      <div className='selectContainer'>
        <div className='selectinner'>
          <p style={{ fontSize: "20px" }}><button onClick={() => empty()} style={{ marginLeft: "80px", marginBottom: "20px" }}>Empty Cart</button>
            <br />Selected items  <span style={{ marginLeft: "10px" }}> {carts.length}</span><button style={{ marginLeft: "20px", width: "80px" }}><a href="/login" style={{ color: "black", textDecoration: "none" }}>login</a></button></p>
          {carts && carts.map((e, index) => {
            return (
              <>
                <div className='cartinner'>
                  <span className='productname'>{e.nameProduct}</span>
                  <br/>
                  <img src={`http://localhost:4000/${e.image}`} />
                  <br /><span className='price'>${e.qunty * e.Price}
                  </span>
                  <br/>
                  <button type="submit" onClick={() => {
                    handleremove(e._id)
                  }}>remove Items</button>
                  <div className='item'>
                    <button onClick={() => inc(e)}><IoAddOutline /></button>
                    <input type="text" value={e.qunty} />
                    <button onClick={() => { remove(e) }}><RiSubtractLine /></button>
                  </div>
                </div>
              </>
            )
          }
          )
          }
        </div>
        <button onClick={(e) => {
          Order1(carts)
          setstatus (true)
        }} >Order 
        {status && <FinalOrder carts={carts} onClose={()=>
          {
            setmodal(false)
          }}/>}
        </button> <input type="text" style={{ width: "50%", margin: "20px" }} value={`Total Amount:$ ${totalPrice}`} />
      </div>
    </>
  )
}
export default Select