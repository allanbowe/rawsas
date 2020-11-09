import React from 'react'
import './style.scss'
import { pathPrefix } from '../../../gatsby-config.js'

interface Props {
  data: { [key: string]: string }
}

const Archives: React.FC<Props> = ({ data }: Props) => {
  const list = []
  const linkPrefix = pathPrefix ? pathPrefix : '/'
  for (const year in data) {
    list.unshift(
      <a key={year} href={`${linkPrefix}${year}`}>
        {year} ({data[year]})
      </a>
    )
  }
  return (
    <div className="archives">
      <h3>Blog Archive</h3>
      {list}
    </div>
  )
}

export default Archives
