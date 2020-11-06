import { graphql } from "gatsby"
import React from "react"

import { IndexQueryQuery, PostByPathQuery } from "../../types/graphql-types"
import Post from "../templates/post/post"
import Meta from "../components/meta/meta"
import Layout from "../components/layout/layout"

interface Props {
  data: IndexQueryQuery
  location: Location
}

const BlogIndex: React.FC<Props> = ({ data, location }: Props) => {
  const posts = data.remark.posts
  const meta = data.site?.meta

  return (
    <Layout location={location}>
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
      limit: 5
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      posts: edges {
        post: node {
          html
          frontmatter {
            title
            path
            tags
            date(formatString: "YYYY/MM/DD")
          }
        }
      }
    }
  }
`
