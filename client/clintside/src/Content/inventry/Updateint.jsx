import React ,{useState,useEffect} from 'react'
import "./update.css"
import axios from "axios"
import { useParams,useNavigate } from 'react-router-dom';
const Updateint = () => {
  const [nameProduct,setProductname] = useState('');
  const [ChooseCategory,setcatergory] = useState('');
  const [Price, setprice] = useState('');
  const {id} = useParams();
  const [image,setimage] = useState();
  const Navigation = useNavigate()
  useEffect(()=>
  {
    axios.get(`http://localhost:4000/update/`+id)
    .then(result=>{console.log(result)
      setProductname(result.data.nameProduct);
      setprice(result.data.Price);
      setcatergory(result.data.ChooseCategory)
    })
    .catch(err=>console.log(err))
  },[])
 const update=async(e)=>
 {
  e.preventDefault();
  try{
    axios.put(`http://localhost:4000/update/`+id,{nameProduct,ChooseCategory,Price})
    .then(result=>console.log(result))
    .catch(err=>console.log(err))
    Navigation("/admin/inventry")
  }
  catch(err)
  {
    console.log(err)
  }

 }
  return (
    <>
    <div className='updateContainer'>
    <div className='updateInt'>
    <div className='add'>
                <h3>Edit </h3>
            </div>
            <form onSubmit={(update)} >
                <label>Name of Product</label><br/>
                <input type="text" value={nameProduct} name="nameProduct"  required onChange={(e)=>
                {
                    setProductname(e.target.value)
                }} 
                />
                <br/>
                <label>Choose Category</label><br/>
                <select value={ChooseCategory} name="ChooseCategory" required onChange={(e)=>
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
                <input value={Price} type="number" name="Price" required onChange={(e)=>
                {
                    setprice(e.target.value)
                }} />
                <br/>
                <br/>
                 
                <br/>
                <button className='save' type="submit">Save</button>
          
            </form>
        
    </div>
    </div>
        
    </>
  )
}

export default Updateint