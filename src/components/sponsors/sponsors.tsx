import React from 'react'

import DC from '../../images/data-controller.png'
import SasApp from '../../images/sasapp.png'
import BuildApps from '../../images/buildapps240x400.png'
import MacroDash from '../../images/macro-dash.png'

import './styles.scss'

const Sponsors: React.FC = () => {
  const sponsors = [
    {
      title: 'Macro Dash - the SAS Powered Platformer',
      href: 'https://dash.sasjs.io',
      img: MacroDash,
      article: 'https://sasapps.io/macro-dash',
    },
    {
      title: 'Data Controller',
      href: 'https://datacontroller.io/',
      img: DC,
    },
    {
      title: 'SAS Apps',
      href: 'https://sasapps.io',
      img: SasApp,
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
          {sp.article && (
            <a
              className="sponsor-article"
              href={sp.article}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read the SAS Apps article →
            </a>
          )}
        </div>
      ))}
    </div>
  )
}

export default Sponsors
