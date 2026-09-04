import React from 'react'

import DC from '../../images/data-controller.png'
import FourGLApps from '../../images/4gl-apps-ad.png'
import BuildApps from '../../images/buildapps240x400.png'
import MacroDash from '../../images/macro-dash-ad.png'

import './styles.scss'

const Sponsors: React.FC = () => {
  const sponsors = [
    {
      title: 'Macro Dash - the SAS Powered Platformer',
      href: 'https://dash.sasjs.io',
      img: MacroDash,
    },
    {
      title: 'Data Controller',
      href: 'https://datacontroller.io/',
      img: DC,
    },
    {
      title: '4GL Apps',
      href: 'https://4gl.io',
      img: FourGLApps,
    },
    {
      title: 'SASjs - DevOps for SAS',
      href: 'https://github.com/sasjs',
      img: BuildApps,
    },
  ]
  return (
    <div className="sponsors">
      <h4>Sponsors</h4>
      {sponsors.map((sp, i) => (
        <div key={i} className="sponsor-item">
          <a href={sp.href} target="_blank" rel="noopener noreferrer">
            <img src={sp.img} alt={sp.title} title={sp.title} />
          </a>
        </div>
      ))}
    </div>
  )
}

export default Sponsors
