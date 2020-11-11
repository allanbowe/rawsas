import React from 'react'

import DC from '../../images/data-controller.png'
import Sasensei from '../../images/SASensei.jpg'
import Sugukiglassesorangenobg from '../../images/sugukiglassesorangenobg-01.png'
import SasApi from '../../images/sas9api_240x120.png'
import SasApp from '../../images/sasapp.svg'
import BuildApps from '../../images/buildapps240x400.png'

import './styles.scss'

const Sponsors = () => {
  return (
    <div>
      <h4>Sponsors</h4>
      <a
        href="https://datacontroller.io/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="center"
          src={DC}
          alt="advertisement"
          title="Data Controller"
        />
      </a>

      <a href="https://sasensei.com" target="_blank" rel="noopener noreferrer">
        <img
          className="center"
          src={Sasensei}
          alt="Think you know SAS?  Take the Sasensei Challenge!"
          title="Think you know SAS?  Take the Sasensei Challenge!"
        />
      </a>

      <a
        href="https://www.meetup.com/SUGUKI/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="center"
          src={Sugukiglassesorangenobg}
          alt="advertisement"
          title="SAS User Group UK &amp; Ireland"
        />
      </a>

      <a href="https://sas9api.io/" target="_blank" rel="noopener noreferrer">
        <img
          className="center"
          src={SasApi}
          alt="SAS 9 REST API"
          title="SAS 9 REST API"
        />
      </a>

      <a href="https://sasapps.io" target="_blank" rel="noopener noreferrer">
        <img src={SasApp} alt="SAS Apps" title="SAS Apps" />
      </a>

      <a href="https://sasjs.io" target="_blank" rel="noopener noreferrer">
        <img
          className="center"
          src={BuildApps}
          alt="Build HTML5 SAS Apps "
          title="Build HTML5 SAS Apps "
        />
      </a>
    </div>
  )
}

export default Sponsors
