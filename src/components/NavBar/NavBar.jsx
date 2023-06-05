import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import { CgMenu } from 'react-icons/cg'
export default function NavBar() {
  return (
    <>
      <div className='nav-bar'>
        <CgMenu className='menu-ham' />
          <Link to={'/home'} className='navbar'>Incio</Link>
          <Link to={'/login'} className='navbar'>Login</Link>
          <Link to={'/movie'} className='navbar'>Peliculas</Link>
          <Link to={'/contact'} className='navbar'>Contacto</Link>
      </div >
    </>
  )
}
