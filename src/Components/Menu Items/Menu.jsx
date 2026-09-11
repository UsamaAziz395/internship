import React from 'react'
import {Link} from 'react-router-dom'

function Menu() {
  return (
    <>

    <div className='space-x-8 text-[#7C8893]  '>
        
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/blog'>Blog</Link>
            <Link to='/contact'>Contact</Link>

    </div>
      
    </>
  )
}

export default Menu
