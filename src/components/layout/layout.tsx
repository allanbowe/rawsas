import React, { useEffect } from "react"
import emergence from "emergence.js"

import Navibar from "../navibar/navibar"
import Footer from "../footer/footer"
import { siteMetadata } from "../../../gatsby-config"
import "../../scss/gatstrap.scss"
import "./styles.scss"
/*
import 'modern-normalize/modern-normalize.css'
import 'prismjs/themes/prism.css'
import 'scss/gatstrap.scss'
import 'animate.css/animate.css'
import 'font-awesome/css/font-awesome.css'
*/
interface Props {
  children?: React.ReactNode
  location: Location
}

const Layout: React.FC<Props> = ({ children, location }: Props) => {
  useEffect(() => {
    emergence.init()
  })

  return (
    <div className="container">
      <div className="row">
        <Navibar title={siteMetadata.title} location={location} />

        <div style={{ marginTop: "140px" }}>
          <div className="row">
            <div className="col-md-9 vertical">{children}</div>
            <div className="col-md-3"></div>
          </div>
        </div>

        <Footer title={siteMetadata.title} author={siteMetadata.author} />
      </div>
    </div>
  )
}

export default Layout
