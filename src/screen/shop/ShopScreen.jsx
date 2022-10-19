import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const ShopScreen = () => {
  return (
    <>
      <nav className='d-flex justify-content-center'>
        <Link to={'/shop'} className='nav-link mx-3'>Tout</Link>
        <Link to={'/shop/pinces'} className='nav-link mx-3'>pinces</Link>
        <Link to={'/shop/tiares'} className='nav-link mx-3'>tiares</Link>
        <Link to={'/shop/parrures'} className='nav-link mx-3'>parrures</Link>
        <Link to={'/shop/barrettes'} className='nav-link mx-3'>barrettes</Link>
        <Link to={'/shop/bijoux'} className='nav-link mx-3'>bijoux</Link>
      </nav>
    <Outlet/>
    </>
  )
}

export default ShopScreen