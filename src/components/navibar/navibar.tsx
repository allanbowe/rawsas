import React from 'react'
import { Link } from 'gatsby'

interface Props {
  title: string
  location: Location
}

const Navibar: React.FC<Props> = ({ location, title }: Props) => {
  return (
    <div className="container">
      <nav className="navbar  navbar-light">
        <Link className="text-center" to="/">
          <h1 className="navbar-brand">{title}</h1>
        </Link>
        <div className="navbar-nav-scroll">
          <ul className="navbar-nav bd-navbar-nav flex-row">
            <li
              className={
                location.pathname === '/' ? 'nav-item active' : 'nav-item'
              }
            >
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navibar
