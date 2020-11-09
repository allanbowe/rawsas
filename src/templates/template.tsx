import { graphql } from 'gatsby'
import React from 'react'

import Post from './post/post'
import Meta from '../components/meta/meta'
import Layout from '../components/layout/layout'
import Page from './page/page'
import { PostByPathQuery } from '../../types/graphql-types'

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
  location: Location
  pageContext: {
    page: string
    archives: { [key: string]: string }
    numPages: number
    currentPage: number
    year?: string
    tag?: string
  }
}

const Template: React.FC<Props> = ({ data, location, pageContext }: Props) => {
  const meta = {
    ...data.site?.meta,
    location,
  }
  const isPage = data.post?.frontmatter?.layout != 'page'
  return (
    <div>
      <Layout archives={pageContext.archives}>
        <Meta
          title={data.post?.frontmatter?.title || ''}
          site={meta}
          customDescription={getDescription(data.post?.html || '')}
        />
        {isPage ? (
          <Post
            data={data}
            options={{
              isIndex: false,
            }}
          />
        ) : (
          <Page data={data} location={location} />
        )}
      </Layout>
    </div>
  )
}

export default Template

export const pageQuery = graphql`
  query PostByPath($path: String!) {
    site {
      meta: siteMetadata {
        title
        description
      }
    }
    post: markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        title
        path
        tags
        date(formatString: "MMM DD, YYYY")
      }
    }
  }
`
