import React from 'react'

import Archives from '../archives/archives'
import Navibar from '../navibar/navibar'
import Footer from '../footer/footer'
import Sponsors from '../sponsors/sponsors'
import '../../scss/gatstrap.scss'
import './styles.scss'

interface Props {
  children?: React.ReactNode
  archives: { [key: string]: string }
}

const Layout: React.FC<Props> = ({ children, archives }: Props) => {
  return (
    <div className="container" style={{ backgroundColor: 'white' }}>
      <Navibar />
      <div className="row">
        <div
          className="col-md-9"
          style={{ paddingTop: '40px', borderRight: '1px solid lightgray' }}
        >
          <div className="main-content">{children}</div>
        </div>
        <div className="col-md-3" style={{ paddingTop: '40px' }}>
          <Archives data={archives} />
          <Sponsors />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
