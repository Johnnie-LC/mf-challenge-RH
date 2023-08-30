import React from 'react'
import { NavBarWrapper, NavBarBlock } from './NavBarStyles'
import { Link } from 'react-router-dom'
import { pages } from '../constants'

interface Props {
  children: JSX.Element
}
const NavBar = ({ children }: Props) => {
  return (
    <NavBarWrapper>
      <NavBarBlock className="nav-bar">
        <Link to="/" className="nav-bar__logo">
          TV Characters
        </Link>
        <ul className="nav-bar__list">
          {
            pages.map((page, i) => (
              <li key={i} className="nav-bar__item">
                <Link to={page.to} className="nav-bar__link">
                {
                  page.name
                }
                </Link>
              </li>
            ))
          }
        </ul>
        {children}
      </NavBarBlock>
    </NavBarWrapper>
  )
}

export default NavBar
