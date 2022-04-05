import React from 'react'
import './sidebar.css'
const Sidebar = () => {
  return (
    <div className='sidebarcontainer'>
      <p className='title'>filter</p>
      <div className='sidebardivider'></div>
      <div className='radios'>
          <label htmlFor="checkid" className='checkbox'>
            <input type="checkbox" className='hmm' name='check' id='checkid' />
            Tv
          </label>
          <label htmlFor="checkid" className='checkbox'>
            <input type="checkbox" className='hmm' name='check' id='checkid' />
            Sofas
          </label>
          <label htmlFor="checkid" className='checkbox'>
            <input type="checkbox" className='hmm' name='check' id='checkid' />
            Bed
          </label>
          <label htmlFor="checkid" className='checkbox'>
            <input type="checkbox" className='hmm' name='check' id='checkid' />
            glass
          </label>
          <label htmlFor="checkid" className='checkbox'>
            <input type="checkbox" className='hmm' name='check' id='checkid' />
            Dresser
          </label>
          <label htmlFor="checkid" className='checkbox'>
            <input type="checkbox" className='hmm' name='check' id='checkid' />
            Other
          </label>
      </div>
      <p className='title'>Sort</p>
      <div className='sidebardivider'></div>
      <div className='radios'>
          <label htmlFor="checkid" className='checkbox'>
            <input type="radio" className='hmm' name='check' id='checkid' />
            Tv
          </label>
          <label htmlFor="checkid" className='checkbox'>
            <input type="radio" className='hmm' name='check' id='checkid' />
            Sofas
          </label>
          <label htmlFor="checkid" className='checkbox'>
            <input type="radio" className='hmm' name='check' id='checkid' />
            Bed
          </label>
          <label htmlFor="checkid" className='checkbox'>
            <input type="radio" className='hmm' name='check' id='checkid' />
            glass
          </label>
        
      </div>
    </div>
  )
}

export default Sidebar