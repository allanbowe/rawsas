import { graphql, Link, PageProps } from 'gatsby'
import React from 'react'
import kebabCase from 'lodash/kebabCase'
import Post from '../templates/post/post'
import Meta from '../components/meta/meta'
import Layout from '../components/layout/layout'
import { PageContext } from '../types'

const BlogList = (props: PageProps<Queries.BlogListQuery, PageContext>) => {
  const { data, location, pageContext } = props

  const posts = data.remark.posts

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
    <Layout archives={pageContext.archives} location={location}>
      <Meta location={location} />
      {posts.map((post, i) => (
        <Post
          data={post as Queries.PostByPathQuery}
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

export default BlogList

export const pageQuery = graphql`
  query BlogList(
    $filter: MarkdownRemarkFilterInput!
    $skip: Int!
    $limit: Int!
  ) {
    remark: allMarkdownRemark(
      filter: $filter
      limit: $limit
      skip: $skip
      sort: { frontmatter: { date: DESC } }
    ) {
      posts: edges {
        post: node {
          html
          frontmatter {
            title
            path
            previewImg {
              childImageSharp {
                gatsbyImageData(width: 800, layout: CONSTRAINED)
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
