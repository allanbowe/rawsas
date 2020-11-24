import { Link } from 'gatsby'
import React from 'react'
import kebabCase from 'lodash/kebabCase'

import { PostByPathQuery } from '../../../types/graphql-types'

import './style.scss'

const extractContent = (s: string): string => {
  if (typeof document !== `undefined`) {
    const span = document.createElement('span')
    span.innerHTML = s
    return span.textContent || span.innerText
  }
  return s
}
const getDescription = (content: string): string => {
  return extractContent(content).substr(0, 250) + '...'
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
  const { isIndex } = options
  const html = data.post?.html || ''
  const previewImg = frontmatter?.previewImg || ''
  const prefix = '../../../content/images/'

  const imgPath = prefix + previewImg

  return (
    <div className="article" key={path}>
      {isIndex && previewImg ? (
        <Link to={path}>
          {' '}
          <img src={imgPath} />
        </Link>
      ) : null}

      <h2 className="heading">
        <Link to={path} style={{ color: 'black' }}>
          {frontmatter?.title}
        </Link>
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
      <span>{!isIndex && previewImg ? <img src={imgPath} /> : null}</span>
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
