import React from 'react'
import { Link } from 'react-router-dom'

const NavItem = ({link, title}) => {
    return (
      <li className="nav-item">
        <Link className='nav-link' to={link}>{title}</Link>
      </li>
    )
  }

export default NavItem