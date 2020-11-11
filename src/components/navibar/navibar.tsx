import React, { useState } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'

import { Link, navigate } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import './style.scss'

const Navibar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')

  const toggle = (): void => setIsOpen(!isOpen)

  const handleSubmit = event => {
    event.preventDefault()
    navigate('/search?s=' + query)
  }

  return (
    <div className="top-section">
      <div className="text-center">
        <Link to="/" className="site-name display-4 font-weight-bold">
          Raw Sas
        </Link>
      </div>

      <Navbar light expand="md">
        <NavbarToggler onClick={toggle} />

        <Collapse isOpen={isOpen} navbar>
          <Nav className="mx-auto" navbar>
            <NavItem>
              <NavLink href="https://sasensei.com/">Sasensei</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="https://datacontroller.io/">
                Data Controller
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="https://www.sasusergroups.org/">
                Sas User Groups
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="https://sasapps.io/">SAS Apps</NavLink>
            </NavItem>

            <NavItem>
              <NavLink>
                <FontAwesomeIcon icon={faSearch} flip="horizontal" />
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            className="form-control"
            id="q"
            name="s"
            placeholder="search"
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        </div>
      </form>
    </div>
  )
}

export default Navibar
