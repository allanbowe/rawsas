import React from 'react'
import './style.scss'

/* eslint-disable @typescript-eslint/no-require-imports */
const config = require('../../../gatsby-config.js')
const pathPrefix: string = config.pathPrefix || ''

interface Props {
  data: { [key: string]: string }
}

const Archives: React.FC<Props> = ({ data }) => {
  return (
    <div className="archives">
      <h3>Blog Archive</h3>
      {Object.entries(data)
        .reverse()
        .map(([year, count]) => (
          <a key={year} href={`${pathPrefix}${year}`}>
            {year} ({count})
          </a>
        ))}
    </div>
  )
}

export default Archives
