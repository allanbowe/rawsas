import { graphql, PageProps } from 'gatsby'
import React from 'react'

import Post from './post/post'
import Meta from '../components/meta/meta'
import Layout from '../components/layout/layout'
import { PageContext } from '../types'

const PostByPath = (props: PageProps<Queries.PostByPathQuery, PageContext>) => {
  const { data, location, pageContext } = props

  return (
    <div>
      <Layout archives={pageContext.archives} location={location}>
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

export const Head = (props: PageProps<Queries.PostByPathQuery>) => {
  const { data, location } = props

  const previewImgURL =
    data?.post?.frontmatter?.previewImg?.publicURL || undefined

  return (
    <Meta
      title={data.post?.frontmatter?.title || ''}
      customDescription={data.post?.excerpt || ''}
      previewImgURL={previewImgURL}
      location={location}
    />
  )
}

export const pageQuery = graphql`
  query PostByPath($path: String!) {
    post: markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      excerpt(pruneLength: 250)
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
