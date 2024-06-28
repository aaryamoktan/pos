import React, { useEffect, useState } from 'react'
import "./admin.css"
import axios from "axios"
import Leftbar from '../dashboard/leftbar/Leftbar'
import { useParams } from 'react-router-dom'
const Admin = () => {
  const [List, setList] = useState();
  console.log(List)
  useEffect(() => {
    axios.get("http://localhost:4000/getdata")
      .then(result => setList(result.data))
      .catch(err => console.log(err))
  }, [])
  const id =useParams()
  return (
    <>
      <div className='adminContainer'>
        <Leftbar id={id}/>
        <div className='homeRight1'>
        <h1>Menu</h1>
          <div className='food'>
            {List && List.map((e) => {
              return (
                <>
                  <div className='food1'>
                    <div className='food11'>
                      <img src={`http://localhost:4000/${e.image}`} />
                    </div>
                    <div className='food22'>
                    <div className='d1'>
                      <span className='p1'>{e.nameProduct}</span></div>
                      <div className='d1'>
                      <span className='p2'>${e.Price}</span>
                      </div>
                    </div>
                  </div>
                </>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
export default Admin