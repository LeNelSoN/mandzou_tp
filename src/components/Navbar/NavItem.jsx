import React from 'react'
import { Link } from 'react-router-dom'

const NavItem = ({to, title}) => {
    return (
      <li className="nav-item">
        <Link className='nav-link' to={to}>{title}</Link>
      </li>
    )
  }

export default NavItem