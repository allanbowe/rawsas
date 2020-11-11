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
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import Media from 'react-media'

import './style.scss'

const Navibar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const toggle = (): void => setIsOpen(!isOpen)
  const toggleSearch = (): void => setIsSearchOpen(!isSearchOpen)

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

      <Media queries={{ medium: { maxWidth: 768 } }}>
        {matches =>
          matches.medium ? (
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
                </Nav>
              </Collapse>
            </Navbar>
          ) : (
            <Navbar light expand="md">
              <Nav className="mx-auto" navbar>
                {!isSearchOpen ? (
                  <>
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
                  </>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <input
                      className="form-control border-0"
                      id="q"
                      name="s"
                      placeholder="search..."
                      type="text"
                      value={query}
                      onChange={e => setQuery(e.target.value)}
                    />
                  </form>
                )}

                <NavItem>
                  <NavLink>
                    <span onClick={toggleSearch}>
                      {isSearchOpen ? (
                        <FontAwesomeIcon icon={faTimes} flip="horizontal" />
                      ) : (
                        <FontAwesomeIcon icon={faSearch} flip="horizontal" />
                      )}
                    </span>
                  </NavLink>
                </NavItem>
              </Nav>
            </Navbar>
          )
        }
      </Media>
    </div>
  )
}

export default Navibar
