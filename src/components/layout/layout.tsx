import React, { useEffect } from 'react'

import Archives from '../archives/archives'
import Navibar from '../navibar/navibar'
import Footer from '../footer/footer'
import { siteMetadata } from '../../../gatsby-config'
import '../../scss/gatstrap.scss'
import './styles.scss'

interface Props {
  children?: React.ReactNode
  location: Location
}

const Layout: React.FC<Props> = ({ children, location, archives }: Props) => {
  return (
    <div className="container" style={{ backgroundColor: 'white' }}>
      <Navibar title={siteMetadata.title} location={location} />
      <div className="row">
        <div
          className="col-md-9"
          style={{ paddingTop: '40px', borderRight: '1px solid lightgray' }}
        >
          <div className="main-content">{children}</div>
        </div>
        <div className="col-md-3" style={{ paddingTop: '40px' }}>
          <Archives data={archives} />
        </div>
      </div>
      <Footer title={siteMetadata.title} author={siteMetadata.author} />
    </div>
  )
}

export default Layout
