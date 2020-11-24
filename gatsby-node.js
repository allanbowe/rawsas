/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const _ = require('lodash')
const PostTemplate = path.resolve('./src/templates/template.tsx')
const PostListTemplate = path.resolve('./src/templates/post-list-template.tsx')

const archives = {}

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
                totalCount
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
              page: 'index',
              archives,
              filter: {},
              limit: postsPerPage,
              skip: i * postsPerPage,
              numPages: numPages,
              currentPage: i + 1,
            },
          })
        })

        for (year in archives) {
          const count = archives[year]
          const numPagesOfYear = Math.ceil(count / postsPerPage)
          Array.from({ length: numPagesOfYear }).forEach((_, i) => {
            createPage({
              path: i === 0 ? `/${year}/` : `/${year}/page/${i + 1}`,
              component: PostListTemplate,
              context: {
                page: 'year',
                archives,
                filter: { frontmatter: { date: { gte: year, lt: year + 1 } } },
                limit: postsPerPage,
                skip: i * postsPerPage,
                numPages: numPagesOfYear,
                currentPage: i + 1,
                year: year,
              },
            })
          })
        }

        const tags = data.tagsGroup.group
        tags.forEach(tag => {
          const count = tag.totalCount
          const numPagesOfTag = Math.ceil(count / postsPerPage)
          Array.from({ length: numPagesOfTag }).forEach((__, i) => {
            const tagPath = `/category/${_.kebabCase(tag.fieldValue)}/`
            createPage({
              path: i === 0 ? tagPath : `${tagPath}page/${i + 1}`,
              component: PostListTemplate,
              context: {
                page: 'category',
                archives,
                filter: { frontmatter: { tags: { in: [tag.fieldValue] } } },
                limit: postsPerPage,
                skip: i * postsPerPage,
                numPages: numPagesOfTag,
                currentPage: i + 1,
                tag: tag.fieldValue,
              },
            })
          })
        })
      })
    )
  })
}

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions

  if (page.path == '/search/') {
    deletePage(page)
    createPage({
      ...page,
      context: {
        ...page.context,
        archives,
      },
    })
  }
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

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
    }
    type Frontmatter {
      previewImg: File @fileByRelativePath
      tags: [String!]!
    }
  `
  createTypes(typeDefs)
}
