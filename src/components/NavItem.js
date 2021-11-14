/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useState } from 'react'

import './navitem.css'

const NavItem = (props) => {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <li className='nav-item'>
        <a href='#' className='icon-button' onClick={() => setOpen(!open)}>
          {props.icon}
        </a>

        {open && props.children}
      </li>
    </div>
  )
}

export default NavItem
