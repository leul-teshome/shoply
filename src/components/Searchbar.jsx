import React, {useState} from 'react'
import './styles/searchbar.css'
import {AiOutlineSearch} from 'react-icons/ai'
const Searchbar = () => {
const[filtered, setFiltered]=useState('')

  return (
    <div className='search'>
        <input 
        onChange={(e)=>{setFiltered(e.target.value)}}
        type="text"
        className='searchbar' 
        placeholder='search'
        />
        <i className='searchicon'>{<AiOutlineSearch/>}</i>
    </div>
  )
}

export default Searchbar