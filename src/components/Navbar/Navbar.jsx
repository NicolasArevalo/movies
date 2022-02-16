import React from 'react'
import './Navbar.scss';

import home from '../../assets/house-solid.svg';
import heart from '../../assets/heart-solid.svg';
import clapper from '../../assets/clapperboard-solid.svg';


const Navbar = () => {
  return (
    <nav>
        <ul className='navbar_wrapper'>
            <li><a href="#home"><img src={home} alt="home icon" className='icon' /> <span>HOME</span></a> </li>
            <li><a href="#favs"> <img src={heart} alt="home icon" className='icon'/>< span>FAVORITES</span> </a> </li>
            <li> <a href="#movies"> <img src={clapper} alt="home icon" className='icon'/> <span>MOVIES</span> </a> </li>
        </ul>

    </nav>
  )
}

export default Navbar;