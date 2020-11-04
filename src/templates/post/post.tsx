import { Link } from 'gatsby'
import Img, { FluidObject } from 'gatsby-image'
import React from 'react'

import Badge from '../../components/badge/badge'
import { PostByPathQuery } from '../../../types/graphql-types'

import './style.scss'

const getDescription = (content: string): string => {
  const body = content.split(" ",20)
  var description = ""
  let i =0
  for(;i<body.length;i++)
  {
    if(i==0)
      description = body[i]
    else
      description = description + " " + body[i] 
  }
  description = description + " ..." 
  return description
}

interface Props {
  data: PostByPathQuery
  options: {
    isIndex: boolean
  }
}

const Post: React.FC<Props> = ({ data, options }: Props) => {
  const frontmatter = data.post?.frontmatter
  const path = frontmatter?.path || ''
  const image = frontmatter?.image || null
  const { isIndex } = options
  const html = data.post?.html || ''

  return (
    <div className="article" key={path}>
      <div className="container">
        <div className="info">
          <Link style={{ boxShadow: 'none' }} to={path}>
            <h1>{frontmatter?.title}</h1>
            <time dateTime={frontmatter?.date}>{frontmatter?.date}</time>
          </Link>
          <Badge label={frontmatter?.category || ''} primary={true} />
          {(frontmatter?.tags || []).map((tag, index) => (
            <Badge label={tag as string} primary={false} key={index} />
          ))}
        </div>
        <div
          className="content"
          dangerouslySetInnerHTML={{
            __html: isIndex ? getDescription(html) : html,
          }}
        />
      </div>
    </div>
  )
}

export default Post