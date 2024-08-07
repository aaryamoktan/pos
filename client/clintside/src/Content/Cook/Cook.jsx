import React,{useState,useEffect} from 'react'
import axios from 'axios'
import "./cook.css"

const Cook = () => {
    const [data, setdata] = useState()
    const [lenght, setlength] = useState(0)
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
        <div className='cooksef'>
            {data && data.map((e) => {
              return <>
                <div className='cookinner'>
                  <h3 >{e.nameProduct}</h3>
                <p> quanaty:{e.qunty}</p>
                <p>${e.Price}</p>
                <button>Done</button>
                </div>
              </>
            })}  
        </div>
     
    )
}

export default Cook