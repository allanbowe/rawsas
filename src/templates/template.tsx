import { graphql, PageProps } from 'gatsby'
import React from 'react'

import Post from './post/post'
import Meta from '../components/meta/meta'
import Layout from '../components/layout/layout'
import { PageContext } from '../types'

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

const PostByPath = (props: PageProps<Queries.PostByPathQuery, PageContext>) => {
  const { data, location, pageContext } = props

  const previewImgURL =
    data?.post?.frontmatter?.previewImg?.publicURL || undefined

  return (
    <div>
      <Layout archives={pageContext.archives} location={location}>
        <Meta
          title={data.post?.frontmatter?.title || ''}
          customDescription={getDescription(data.post?.html || '')}
          previewImgURL={previewImgURL}
          location={location}
        />
        <Post
          data={data}
          options={{
            isIndex: false,
          }}
        />
      </Layout>
    </div>
  )
}

export default PostByPath

export const pageQuery = graphql`
  query PostByPath($path: String!) {
    post: markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        title
        path
        previewImg {
          publicURL
          childImageSharp {
            gatsbyImageData(width: 800, layout: CONSTRAINED)
          }
        }
        tags
        date(formatString: "MMM DD, YYYY")
      }
    }
  }
`
