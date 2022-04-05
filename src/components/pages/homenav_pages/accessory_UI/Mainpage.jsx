import React from 'react'
import './mainpage.css'
import {Data} from './Data'
const Mainpage = () => {
  return (
    <div className='mainpagecontainer'>
        {Data.map((items)=>{
          return(
            <div className='container'>
            <div className='cards'>
              <img src={items.image} alt="" />
              <i className='discount'>{items.discount}</i>
              <h3>{items.type}</h3>
              <h4>{items.price}</h4>
              <button type='submit' className='btn'>Add To Cart</button>
            </div>
            </div>
            
          )
        })}
    </div>
  )
}

export default Mainpage