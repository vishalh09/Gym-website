import React from 'react'
import './Header.css'
import Logo from '../../assets/Logo.png'

const Header = () => {
  return (
    <div>
      <div className="header">        
        <img src={Logo} alt="LOGO" className='logo'/>

        <ul className='header-menu'>
            <li>Home</li>
            <li>Programs</li>
            <li>Why Us</li>
            <li>Plans</li>
            <li>Testimonials</li>                  
        </ul>
      </div>
    </div>
  )
}

export default Header
