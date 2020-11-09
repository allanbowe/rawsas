import React from 'react'
import './style.scss'

interface Props {
  data: { [key: string]: string }
}

const Archives: React.FC<Props> = ({ data }: Props) => {
  const list = []
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
