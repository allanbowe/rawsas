import { graphql } from "gatsby"
import React from "react"

import Post from "./post/post"
import Meta from "../components/meta/meta"
import Layout from "../components/layout/layout"
import Page from "./page/page"
import { PostByPathQuery } from "../../types/graphql-types"

interface Props {
  data: PostByPathQuery
  location: Location
}

const Template: React.FC<Props> = ({ data, location }: Props) => {
  let archives = {}
  data.dateCounts.edges.forEach(d => {
    if (archives[d.node.frontmatter.date] == null)
      archives[d.node.frontmatter.date] = 0
    archives[d.node.frontmatter.date]++
  })
  const isPage = data.post?.frontmatter?.layout != "page"
  return (
    <div>
      <Layout location={location} archives={archives}>
        <Meta
          title={data.post?.frontmatter?.title || ""}
          site={data.site?.meta}
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
        date(formatString: "YYYY/MM/DD")
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
