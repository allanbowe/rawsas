import { graphql } from "gatsby"
import React from "react"

import { IndexQuery, PostByPathQuery } from "../../types/graphql-types"
import Post from "../templates/post/post"
import Meta from "../components/meta/meta"
import Layout from "../components/layout/layout"

interface Props {
  data: IndexQuery
  location: Location
}

const BlogIndex: React.FC<Props> = ({ data, location }: Props) => {
  let archives = {}
  data.dateCounts.edges.forEach(d => {
    if (archives[d.node.frontmatter.date] == null)
      archives[d.node.frontmatter.date] = 0
    archives[d.node.frontmatter.date]++
  })
  const posts = data.remark.posts
  const meta = data.site?.meta

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
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      meta: siteMetadata {
        title
        description
      }
    }
    remark: allMarkdownRemark(
      limit: 4
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
