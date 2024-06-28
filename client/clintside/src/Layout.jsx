import React from 'react'
import "./layout.css";
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <>
    <div className='ap'>
        
        <Outlet/>
        
        </div>
        
    </>
  )
}

export default Layout