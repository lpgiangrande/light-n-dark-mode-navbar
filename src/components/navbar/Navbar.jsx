import { useState } from 'react'
import "./Navbar.css"
import logoLightMode from '../../assets/logo-black.png'
import logoDarkMode from '../../assets/logo-white.png'
import searchIconLight from '../../assets/search-w.png'
import searchIconDark from '../../assets/search-b.png'
import toggleLight from '../../assets/night.png'
import toggleDark from '../../assets/day.png'


const Navbar = ({theme, setTheme}) => {

    const toggleMode = () => {
        theme == 'light' ? setTheme('dark') : setTheme('light');
    }

  return (
    <div className='navbar'>
      <img 
        src={theme == 'light' ? logoLightMode : logoDarkMode} 
        alt="logo" 
        className='logo'
      />
      
      <ul>
        <li>Home</li>
        <li>Link 2</li>
        <li>Link 3</li>
        <li>Link 4</li>
      </ul>

      <div className='search-box'>
        <input type="text" placeholder='search' />
        <img 
            src={theme == 'light' ? searchIconLight : searchIconDark} 
            alt="" 
        />
      </div>

      <img 
        onClick={() => {toggleMode()}}
        src={theme == 'light' ? toggleLight : toggleDark} 
        alt="toggle icon color theme" 
        className='toggle-icon'/>

    </div>
  )
}

export default Navbar
