import React, { useState } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap'

import { Link } from 'gatsby'

import './style.scss'

interface Props {
  title: string
  location: Location
}

const Navibar: React.FC<Props> = ({ location, title }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div className="top-section">
      <div className="text-center">
        <Link to="/" className="site-name display-4 font-weight-bold">
          {title}
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
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Navibar
