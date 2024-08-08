import React,{useState,useEffect} from 'react'
import axios from 'axios'
import "./cook.css"

const Cook = () => {
    const [data, setdata] = useState()
    const [lenght, setlength] = useState(0)
    const hellow= (id,name,price,total)=>
      {
        axios.post("http://localhost:4000/orerHstory",{name,price,total})
        axios.delete(`http://localhost:4000/deleteorder/`+id)
        .then((result)=>console.log(result))
        .catch((err)=>console.log(err))
      }
    useEffect(() => {
      axios.get("http://localhost:4000/order")
        .then(result => {
          
          setlength(result.data.length)
          setdata(result.data)
        })
        .catch(err => console.log(err))
    }, [])
    return (
        <div className='cooksef'>
            {data && data.map((e) => {
              return <>
                <div className='cookinner'>
                  <h3 >{e.nameProduct}</h3>
                <p> quanaty:{e.qunty}</p>
                <p>${e.Price}</p>
                <button onClick={()=>{hellow(e._id,e.nameProduct,e.qunty,e.Price)}}>Done</button>
                </div>
              </>
            })}  
        </div>
     
    )
}

export default Cook