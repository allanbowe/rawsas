import { Link } from 'gatsby'
import React from 'react'
import './style.scss'
import { siteMetadata } from '../../../gatsby-config'
import SocialMedia from '../socialmedia/socialmedia'

import './style.scss'

interface Props {
  author: string
  title: string
}

const Footer: React.FC<Props> = ({ author, title }: Props) => (
  <div className="footer">
    <p>© Copyright 2012-2017, RawSAS.com, All rights reserved</p>
  </div>
)

export default Footer
