import React from 'react'
import '../components/styles/drawer.css'
import { Datafordrawer } from './Datafordrawer'
const Thedrawer = ({toggle}) => {
  return (
    <div className='drawercontainer'>
      <button onClick={toggle} className='closebtn'>Close</button>
      <div className='drawerdivider'></div>
      <div className='orders'>
        <h3>Order summary</h3>
        <div className='itemcontainer'>
          {Datafordrawer.map((itemss)=>{
            return(
              <div className='singleitem'>
                <img src={itemss.image} alt="" />
                <div className='iteminfo'>
                <h3>{itemss.title}</h3>
                <p>{itemss.description}</p>
                <h5>{itemss.Price}</h5>
                </div>
               
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Thedrawer