import React from 'react'
import '../../styles/acsessories.css'
import Mainpage from './accessory_UI/Mainpage'
import Sidebar from './accessory_UI/Sidebar'
const Acessories = ({Searchbar}) => {
  return (
    <>
  <div className='topdivider'></div>
    <div className='acc_container'>
          <Sidebar/>
           <Mainpage Searchbar={Searchbar}/>
    </div>
    </>
  
  )
}

export default Acessories