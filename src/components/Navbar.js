import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  const links = [
    { path: '/', text: 'Books' },
    { path: 'categories', text: 'Categories' }
  ]

  return (
    <nav>
      <div className='logo'>Bookstore CMS</div>
      <ul>
        {links.map((link) => (
          <li><NavLink className="nav-item" to={link.path}>{link.text}</NavLink> </li>
        ))}
      </ul>
    </nav>
  )
}