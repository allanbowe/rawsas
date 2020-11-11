import React from 'react'

import DC from '../../images/data-controller.png'
import Sasensei from '../../images/SASensei.jpg'
import Sugukiglassesorangenobg from '../../images/sugukiglassesorangenobg-01.png'
import SasApi from '../../images/sas9api_240x120.png'
import SasApp from '../../images/sasapp.svg'
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
      title: 'Think you know SAS?  Take the Sasensei Challenge!',
      href: 'https://sasensei.com',
      img: Sasensei,
    },
    {
      title: 'SAS User Group UK &amp; Ireland',
      href: 'https://www.meetup.com/SUGUKI/',
      img: Sugukiglassesorangenobg,
    },
    {
      title: 'SAS 9 REST API',
      href: 'https://sas9api.io/',
      img: SasApi,
    },
    {
      title: 'SAS Apps',
      href: 'https://sasapps.io',
      img: SasApp,
    },
    {
      title: 'Build HTML5 SAS Apps',
      href: 'https://sasjs.io"',
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
