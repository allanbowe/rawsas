import { graphql, Link } from 'gatsby'
import React, { useState } from 'react'
import { useFlexSearch } from 'react-use-flexsearch'
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

  //  const [posts, setPosts] = useState([])

  const index = queryData.localSearchPosts.index
  const store = queryData.localSearchPosts.store

  let params = new URLSearchParams(location.search.substring(1))
  let query = params.get('s')

  let posts = []
  let postsJSX = []

  if (query) {
    posts = useLunr(query, index, store)
    //setPosts(results)
    // console.log(JSON.parse(posts[0].post))
    console.log(posts)
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
    <Layout archives={pageContext.archives}>
      <Meta site={meta} />
      {query && (
        <h1>
          {posts.length} results found related to "{query}"
        </h1>
      )}
      {postsJSX}
    </Layout>
  )
}

export default SearchPage
