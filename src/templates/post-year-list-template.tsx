import { graphql, Link } from 'gatsby'
import React from 'react'

import { IndexYearQuery, PostByPathQuery } from '../../types/graphql-types'
import Post from '../templates/post/post'
import Meta from '../components/meta/meta'
import Layout from '../components/layout/layout'

interface Props {
  data: IndexYearQuery
  location: Location
}

const BlogIndex: React.FC<Props> = ({ data, location, pageContext }: Props) => {
  const posts = data.remark.posts
  const meta = data.site?.meta

  return (
    <Layout location={location} archives={pageContext.archives}>
      <Meta site={meta} />
      {posts.map((post, i) => (
        <Post
          data={post as PostByPathQuery}
          options={{
            isIndex: true,
          }}
          key={i}
        />
      ))}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexYearQuery($filter: MarkdownRemarkFilterInput!) {
    site {
      meta: siteMetadata {
        title
        description
      }
    }
    remark: allMarkdownRemark(
      filter: $filter
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      posts: edges {
        post: node {
          html
          frontmatter {
            title
            path
            tags
            date(formatString: "MMM DD, YYYY")
          }
        }
      }
    }
  }
`
