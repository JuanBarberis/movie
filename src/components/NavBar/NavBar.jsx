import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import { CgMenu } from 'react-icons/cg'
export default function NavBar() {
  return (
    <>
      <div className='nav-bar'>
        <CgMenu className='menu-ham' />
          <Link to={'/'} className='navbar'>Incio</Link>
          <Link to={'/home'} className='navbar'>Peliculas</Link>
          <Link to={'/home'} className='navbar'>Contacto</Link>
      </div >
    </>
  )
}
