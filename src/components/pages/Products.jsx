import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import '../styles/product.css'
import Acessories from './homenav_pages/Acessories'
const Products = () => {
  return (
      <>
      
          <div className='productnav'>
  <nav className='links'>
                <NavLink className='acessories link' to='Acessories'>Acessories</NavLink>
                <NavLink className='electronics link' to='Electronics'>Electronics</NavLink>
                <NavLink className='fashion link' to='Fashion'>Fashion
                </NavLink>
                <NavLink className='furnitures link' to='Furnitures'>
                Furnitures
                </NavLink>
                <NavLink className='vehicles link' to='Vehicles'>Vehicles</NavLink>
            </nav>
                <div className='navdivider'></div>
      </div>
      
      <div className='product_data'>
        
            <Outlet/>
            </div>
  
      </>
 
  )
}

export default Products