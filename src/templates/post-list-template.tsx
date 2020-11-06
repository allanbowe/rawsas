import { graphql } from 'gatsby'
import { Link } from 'gatsby'

import React from 'react'

import { IndexQuery, PostByPathQuery } from '../../types/graphql-types'
import Post from '../templates/post/post'
import Meta from '../components/meta/meta'
import Layout from '../components/layout/layout'

interface Props {
  data: IndexQuery
  location: Location
}

const BlogIndex: React.FC<Props> = ({ data, location, pageContext }: Props) => {
  let archives = {}
  data.dateCounts.edges.forEach(d => {
    if (archives[d.node.frontmatter.date] == null)
      archives[d.node.frontmatter.date] = 0
    archives[d.node.frontmatter.date]++
  })
  const posts = data.remark.posts
  const meta = data.site?.meta

  const newerPath =
    pageContext.currentPage == 1
      ? null
      : pageContext.currentPage == 2
      ? '/'
      : `/page/${pageContext.currentPage - 1}`
  const olderPath =
    pageContext.currentPage == pageContext.numPages
      ? null
      : `/page/${pageContext.currentPage + 1}`

  return (
    <Layout location={location} archives={archives}>
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
      {olderPath && (
        <Link to={olderPath} className="float-left">
          « Older Entries
        </Link>
      )}
      {newerPath && (
        <Link to={newerPath} className="float-right">
          Next Entries »
        </Link>
      )}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery($skip: Int!, $limit: Int!) {
    site {
      meta: siteMetadata {
        title
        description
      }
    }
    remark: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
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
    dateCounts: allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            date(formatString: "YYYY")
          }
        }
      }
    }
  }
`
