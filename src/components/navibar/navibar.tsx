import React, { useState } from "react"
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
} from "reactstrap"

import { Link } from "gatsby"

import "./style.scss"

interface Props {
  title: string
  location: Location
}

const Navibar: React.FC<Props> = ({ location, title }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div className="container sticky ">
      <div className="row d-flex justify-content-center">
        <Link to="/">
          <h1 className="display-4 font-weight-bold textWithShadow ">
            {title}
          </h1>
        </Link>
      </div>

      {/*
      <div className="row d-flex justify-content-center">
        <Link to="https://sasensei.com/" className="nav-link">
          Sasensei
        </Link>
        <Link to="https://datacontroller.io/" className="nav-link">
          Data Controller
        </Link>
        <Link to="https://www.sasusergroups.org/" className="nav-link">
          Sas User Groups
        </Link>
        <Link to="https://sasapps.io/" className="nav-link">
          SAS Apps
        </Link>
      </div>
      */}

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

      <hr />
    </div>
  )
}

export default Navibar
