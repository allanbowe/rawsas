/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const _ = require('lodash')
const PostTemplate = path.resolve('./src/templates/template.tsx')
const PostListTemplate = path.resolve('./src/templates/post-list-template.tsx')
const PostYearListTemplate = path.resolve(
  './src/templates/post-year-list-template.tsx'
)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allFile(
              filter: { extension: { regex: "/md|tsx|html/" } }
              limit: 1000
            ) {
              edges {
                node {
                  id
                  name: sourceInstanceName
                  path: absolutePath
                  remark: childMarkdownRemark {
                    id
                    frontmatter {
                      path
                    }
                  }
                }
              }
            }
            tagsGroup: allMarkdownRemark(limit: 1000) {
              group(field: frontmatter___tags) {
                fieldValue
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
      ).then(({ errors, data }) => {
        if (errors) {
          console.log(errors)
          reject(errors)
        }
        // side bar data for each page
        let archives = {}
        data.dateCounts.edges.forEach(d => {
          if (archives[d.node.frontmatter.date] == null)
            archives[d.node.frontmatter.date] = 0
          archives[d.node.frontmatter.date]++
        })

        // Create blog posts & pages.
        const items = data.allFile.edges
        const posts = items.filter(({ node }) => /posts/.test(node.name))
        posts.forEach(({ node }) => {
          if (!node.remark) return
          const { path } = node.remark.frontmatter
          createPage({
            path,
            component: PostTemplate,
            context: {
              archives,
            },
          })
        })

        // Create blog-list pages
        const postsPerPage = 10
        const numPages = Math.ceil(items.length / postsPerPage)
        Array.from({ length: numPages }).forEach((_, i) => {
          createPage({
            path: i === 0 ? `/` : `/page/${i + 1}`,
            component: PostListTemplate,
            context: {
              archives,
              limit: postsPerPage,
              skip: i * postsPerPage,
              numPages,
              currentPage: i + 1,
            },
          })
        })

        let years = new Set()
        data.dateCounts.edges.forEach(d => years.add(d.node.frontmatter.date))
        years.forEach(year => {
          createPage({
            path: `/${year}/`,
            component: PostYearListTemplate,
            context: {
              archives,
              filter: { frontmatter: { date: { gte: year, lt: year + 1 } } },
            },
          })
        })

        const tags = data.tagsGroup.group
        tags.forEach(tag => {
          createPage({
            path: `/category/${_.kebabCase(tag.fieldValue)}/`,
            component: PostYearListTemplate,
            context: {
              archives,
              filter: { frontmatter: { tags: { in: [tag.fieldValue] } } },
            },
          })
        })
      })
    )
  })
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        templates: path.resolve(__dirname, 'src/templates'),
        scss: path.resolve(__dirname, 'src/scss'),
      },
    },
  })
}
