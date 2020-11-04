import React from 'react'
import { Link } from 'gatsby'
import './style.scss'

interface Props {
  title: string
  location: Location
}

const Navibar: React.FC<Props> = ({ location, title }: Props) => {
  return (
    <div className="container sticky ">
      <div className="row d-flex justify-content-center">
        <Link  to="/">
          <h1 className="display-4 font-weight-bold textWithShadow ">{title}</h1>
        </Link>
      </div>
      <div className="row">
        <Link to="/" className="nav-link">
          Home
        </Link>  
      </div>
      <hr/>
    </div>
  )
}

export default Navibar
