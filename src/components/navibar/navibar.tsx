import React, { useState, useEffect } from 'react'
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

interface Props {
  location: Location
}
const Navibar: React.FC<Props> = ({ location }: Props) => {
  const params = location
    ? new URLSearchParams(location.search.substring(1))
    : null
  const queryUrl = params ? params.get('s') : ''
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState(queryUrl)
  useEffect(() => {
    setQuery(queryUrl)
  }, [queryUrl])
  const [isSearchOpen, setIsSearchOpen] = useState(!!queryUrl)
  const toggle = (): void => setIsOpen(!isOpen)
  const toggleSearch = (): void => {
    document.getElementsByClassName('nav-links')[0].classList.toggle('hide')
    if (!isSearchOpen) document.getElementById('q').focus()
    setIsSearchOpen(!isSearchOpen)
  }

  const handleSubmit = (event): void => {
    event.preventDefault()
    navigate('/search?s=' + query)
  }

  return (
    <div className="top-section">
      <div className="text-center">
        <Link
          to="/"
          className="site-name display-4 font-weight-bold"
          style={{ color: 'black' }}
        >
          Raw Sas
        </Link>
      </div>

      <Media queries={{ medium: { maxWidth: 768 } }}>
        {(matches): JSX.Element =>
          matches.medium ? (
            <Navbar light expand="md">
              <NavbarToggler onClick={toggle} />
              <Collapse isOpen={isOpen} navbar>
                <Nav className="mx-auto" navbar>
                  <NavItem>
                    <NavLink href="https://datacontroller.io/">
                      Data Controller
                    </NavLink>
                  </NavItem>

                  <NavItem>
                    <NavLink href="https://github.com/sasjs">SASjs</NavLink>
                  </NavItem>

                  <NavItem>
                    <NavLink href="https://sasapps.io">SAS Apps</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          ) : (
            <Navbar light expand="md">
              <Nav className="mx-auto" navbar>
                <div className={`nav-links ${isSearchOpen ? 'hide' : ''}`}>
                  <NavItem>
                    <NavLink href="https://sasjs.io">SASjs</NavLink>
                  </NavItem>

                  <NavItem>
                    <NavLink href="https://datacontroller.io/">
                      Data Controller
                    </NavLink>
                  </NavItem>

                  <NavItem>
                    <NavLink href="https://www.linkedin.com/pulse/easy-af-scl-modernisation-html5-sas-allan-bowe/">
                      AF/SCL
                    </NavLink>
                  </NavItem>

                  <NavItem>
                    <NavLink href="https://sasapps.io/">SAS Apps</NavLink>
                  </NavItem>
                </div>
                <form onSubmit={handleSubmit} className="nav-search">
                  <input
                    className="form-control border-0"
                    id="q"
                    name="s"
                    placeholder="search..."
                    type="text"
                    value={query}
                    onChange={(e): void => setQuery(e.target.value)}
                  />
                </form>

                <NavItem>
                  <NavLink className="nav-icon">
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
