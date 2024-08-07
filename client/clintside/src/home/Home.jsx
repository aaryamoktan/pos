import React, { useEffect, useState } from 'react'
import "./home.css"
import all from "./all.wav"
import Select from '../Content/orderselected/Select'
import { IoIosNotifications } from "react-icons/io";
import { addToCart } from '../redux/cartSlice';
import  {useDispatch} from 'react-redux'
import axios from "axios";
import { useTranslation } from 'react-i18next';
const Home = () => {
  const [List, setList] = useState();
  const {i18n} = useTranslation()
  const[category,setcategory] = useState();
  const dispatch = useDispatch()
  const menuitem = [...new Set(List && List.map((ele)=>ele.ChooseCategory))]
  const filteritems =(cat)=>{
    const newitems = List.filter((newval)=>newval.ChooseCategory === cat)
    setcategory(newitems)
  }
  useEffect(() => {
    axios.get("http://localhost:4000/getdata")
      .then(result => setList(result.data))
      .catch(err => console.log(err))
  }, [])
  const play = ()=>
  {
    new Audio(all).play()
  }
  const languages = [
    {
      code:"en",lang:"English",
     
      
    },{
      code:"fr",lang:"French",
    }
  ]
return (
    <>
      <div className='home'>
        
        <div className='homeRight2'>
          <div className='search'>
            <div className='input'>
              <input type="text" placeholder='search' onChange={(e) => {   
              }} />
            </div>
            <div className='notification' style={{cursor:"pointer"}} onClick={(play)}>
              <IoIosNotifications />
              </div> <select onChange={(
                ""
              )} style={{position:"relative",height:"3vh",marginTop:"10px"}}>
              {languages.map((lng)=>
              {
                return(
<option className={lng.code === i18n.language?  "selected":""} value={lng.code}>{lng.lang}</option>
                )
                
              })}
            
              
              </select>
            
          </div>
          <h1>Choose Category</h1>
          <div className='catgorylist'>
          <div className='c1' onClick={() => {
              setcategory(List)
            }}>
              <br /><span>All</span></div>
         {menuitem&&menuitem.map((ele)=>
         { 
         
          return(
            <>
            <div className='c1' onClick={() => {
              filteritems(ele)
            }}>
              <br /><span>{ele}
              </span></div>
            </>
          )
         })}  
</div>  
          <div className='food'>
            {category&&category.map((e) => {
              return (
                <>
                  <div className='food1'>
                    <div className='food23'>
                      <div className='img'>
                        <img src={`http://localhost:4000/${e.image}`} />
                      </div>
                      <div className='p'>
                        <span className='pname'>{e.nameProduct}</span>
                      </div>
                    </div>
                    <br />
                    <span className='price'>${e.Price}</span>
                    <button className='btt' variant="buttom"  onClick={()=>
                dispatch(addToCart(e))}>Add To Cart</button>
                  </div>
                </>
              )
            })
            }
          </div>
        </div>
      </div>
      <Select />
    </>
  )
}
export default Home