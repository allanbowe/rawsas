import { graphql } from 'gatsby'
import React from 'react'
import { useStaticQuery } from 'gatsby'
import { useLunr } from 'react-lunr'

import { PostByPathQuery } from '../../types/graphql-types'
import Post from '../templates/post/post'
import Meta from '../components/meta/meta'
import Layout from '../components/layout/layout'

interface Props {
  location: Location
  pageContext: {
    archives: { [key: string]: string }
  }
}

const SearchPage: React.FC<Props> = ({ location, pageContext }: Props) => {
  const queryData = useStaticQuery(graphql`
    query {
      localSearchPosts {
        index
        store
      }
      site {
        meta: siteMetadata {
          title
          description
        }
      }
    }
  `)

  const meta = { ...queryData.site?.meta, location }

  const index = queryData.localSearchPosts.index
  const store = queryData.localSearchPosts.store

  const params = new URLSearchParams(location.search.substring(1))
  const query = params.get('s')

  const posts = useLunr(query, index, store)
  const postsJSX = []

  if (query) {
    posts.forEach((post, i) => {
      const p = {
        post: {
          id: post.id,
          html: post.html,
          frontmatter: {
            path: post.path,
            tags: post.tags,
            title: post.title,
            date: post.date,
          },
        },
      }

      postsJSX.push(
        <Post
          data={p as PostByPathQuery}
          options={{
            isIndex: true,
          }}
          key={i}
        />
      )
    })
  }

  return (
    <Layout archives={pageContext.archives} location={location}>
      <Meta site={meta} />
      {query ? (
        <h1>
          {postsJSX.length} results found related to &quot;{query}&quot;
        </h1>
      ) : (
        <h1>No Query Entered</h1>
      )}
      {postsJSX}
    </Layout>
  )
}

export default SearchPage
