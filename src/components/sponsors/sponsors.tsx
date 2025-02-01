import React from 'react'

import DC from '../../images/data-controller.png'
import Sasensei from '../../images/SASensei.jpg'
import Sugukiglassesorangenobg from '../../images/sugukiglassesorangenobg-01.png'
import SasApp from '../../images/sasapp.png'
import BuildApps from '../../images/buildapps240x400.png'

import './styles.scss'

const Sponsors: React.FC = () => {
  const sponsors = [
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
        <a key={i} href={sp.href} target="_blank" rel="noopener noreferrer">
          <img src={sp.img} alt={sp.title} title={sp.title} />
        </a>
      ))}
    </div>
  )
}

export default Sponsors
