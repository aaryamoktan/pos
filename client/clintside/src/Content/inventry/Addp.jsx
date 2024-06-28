import React, { useState } from 'react'
import "./addp.css"
import axios from "axios"
import { useNavigate } from 'react-router-dom';
const Addp = ({onClose}) => {
    const [nameProduct,setProductname] = useState('');
    const [ChooseCategory,setcatergory] = useState('');
    const [Price, setprice] = useState('');
    const [image,setimage] = useState('');
    const nevigate = useNavigate()
  
    
    const submit= (e)=>
    {
        var qty = 0
        const formdata = new FormData();
        formdata.append("image",image);
        formdata.append("Price",Price);
        formdata.append("ChooseCategory",ChooseCategory);
        formdata.append("nameProduct",nameProduct);
        formdata.append("qty",qty)
       const save = axios.post("http://localhost:4000/createuser",formdata,{
        headers:{"Authorization":localStorage.getItem('token')}
       })
       .then(result=>console.log(result))
       .catch(err=>console.log(err));
       if(save)
       {
        alert("insert data sucesufully")
       window.location.reload()
       }
       
    }
  return (
    <>
        <div className='addpContainer'>
            <div className='add'>
                <h3>Add New Product</h3>
            </div>
            <form >
                <label>Name of Product</label><br/>
                <input type="text" value={nameProduct} required onChange={(e)=>
                {
                    setProductname(e.target.value)
                }} />
                <br/>
                <label>Choose Category</label><br/>
                <select value={ChooseCategory} required onChange={(e)=>
                {
                    setcatergory(e.target.value)
                }} >
                     <option value="none">Select</option>
                    <option value="Burger">Burger</option>
                    <option value="Pizza">pizza</option>
                    <option value="Soft Drink">Soft Drink</option>
                </select>
                <br/>
                <label className='inputfile' >Price $</label><br/>
                <input value={Price} type="number" required onChange={(e)=>
                {
                    setprice(e.target.value)
                }} />
                <br/>
                <label>Image of Product</label><br/>
                <input required   className="inputfile" type="file" onChange={(e)=>
                {
                    setimage(e.target.files[0])
                }}/>
                <br/>
                <button className='save' onClick={submit} type="submit">Save</button>
                <button className='save1'><a href="/admin/inventry" style={{textDecoration:"none",color:"white"}}>cancle</a></button>
            </form>
        </div>
        
    </>
  )
}

export default Addp