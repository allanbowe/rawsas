import { graphql, Link } from 'gatsby'
import React from 'react'
import kebabCase from 'lodash/kebabCase'

import { BlogListQuery, PostByPathQuery } from '../../types/graphql-types'
import Post from '../templates/post/post'
import Meta from '../components/meta/meta'
import Layout from '../components/layout/layout'

interface Props {
  data: BlogListQuery
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

const BlogIndex: React.FC<Props> = ({ data, location, pageContext }: Props) => {
  const posts = data.remark.posts
  const meta = { ...data.site?.meta, location }

  const iniPath =
    pageContext.page == 'index'
      ? `/`
      : pageContext.page == 'year'
      ? `/${pageContext.year}/`
      : pageContext.page == 'category'
      ? `/category/${kebabCase(pageContext.tag)}/`
      : null

  const newerPath =
    iniPath == null
      ? null
      : pageContext.currentPage == 1
      ? null
      : pageContext.currentPage == 2
      ? iniPath
      : `${iniPath}page/${pageContext.currentPage - 1}`
  const olderPath =
    iniPath == null
      ? null
      : pageContext.currentPage == pageContext.numPages
      ? null
      : `${iniPath}page/${pageContext.currentPage + 1}`

  return (
    <Layout archives={pageContext.archives}>
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
  query BlogListQuery(
    $filter: MarkdownRemarkFilterInput!
    $skip: Int!
    $limit: Int!
  ) {
    site {
      meta: siteMetadata {
        title
        description
      }
    }
    remark: allMarkdownRemark(
      filter: $filter
      limit: $limit
      skip: $skip
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      posts: edges {
        post: node {
          html
          frontmatter {
            title
            path
            previewImg {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            tags
            date(formatString: "MMM DD, YYYY")
          }
        }
      }
    }
  }
`
