import { graphql } from 'gatsby'
import React from 'react'
import { ArchiveCountQuery } from '../../types/graphql-types'
import './style.scss'

interface Props {
  data: ArchiveCountQuery
}

const Archives: React.FC<Props> = ({ data }: Props) => {
  let list = []
  for (const year in data) {
    list.unshift(
      <a key={year} href={`/${year}`}>
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
