import { Link } from 'gatsby'
import Img, { FluidObject } from 'gatsby-image'
import React from 'react'
import kebabCase from 'lodash/kebabCase'

import { PostByPathQuery } from '../../../types/graphql-types'

import './style.scss'

const getDescription = (content: string): string => {
  const body = content.split(' ', 60)
  var description = ''
  let i = 0
  for (; i < body.length; i++) {
    if (i == 0) description = body[i]
    else description = description + ' ' + body[i]
  }
  description = description + ' ...'
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
      <h2 className="heading">
        <Link to={path}>{frontmatter?.title}</Link>
      </h2>
      <p className="post-meta">
        by
        <span className="author">
          <a title="Posts by Allan" rel="author">
            {'Allan'}
          </a>
        </span>
        |<span className="published">{frontmatter?.date}</span>|
        <span>
          {(frontmatter?.tags || []).map((tag, index) => (
            <span key={index}>
              {index > 0 && ', '}
              <Link to={`/category/${kebabCase(tag)}/`} rel="category tag">
                {tag}
              </Link>
            </span>
          ))}
        </span>
      </p>
      <div
        className="content"
        dangerouslySetInnerHTML={{
          __html: isIndex ? getDescription(html) : html,
        }}
      />
    </div>
  )
}

export default Post
