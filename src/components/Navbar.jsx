import React, {useState} from 'react'
import image from './assets/man.jpg'
import { NavLink } from 'react-router-dom'
import './styles/navbar.css'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import Thedrawerwer from './Thedrawer'
const Navbar = () => {

    const[draweropened, setDraweropened]=useState(false)

    const Toggle=()=>{
        setDraweropened((prev)=> !prev)
    }

  return (
      <>
         <div className='navbar'>
        <div className='leftside'>
            <h1 className='logo'>Logo</h1>
        </div>
        <div className='middle'>
            <nav className='links'>
                <NavLink className='home linking' to='/'>Home</NavLink>
                <NavLink className='products linking' to='/Products'>Products</NavLink>
                <NavLink className='contact linking' to='/Contact'>Contact us
                </NavLink>
                <NavLink className='about linking' to='/About'>
                    About us
                </NavLink>
            </nav>
        </div>
        <div className='rightside'>
            <div onClick={Toggle} className='rightitems'>
                <AiOutlineShoppingCart/>
            </div>
            <Drawer className='draw' open={draweropened} onClose={Toggle} direction='right' size='60%' >
<div>{<Thedrawerwer toggle={Toggle}/>}</div>
            </Drawer>
            <img className='image rightitems' src={image} alt="image" />
        </div>
    </div>
    <div className='divider'></div>
      </>
 
  )
}

export default Navbar