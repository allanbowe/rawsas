import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { useLunr } from 'react-lunr'
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
  const { localSearchPosts } = useStaticQuery(graphql`
    query {
      localSearchPosts {
        index
        store
      }
    }
  `)

  const query = new URLSearchParams(location.search.substring(1)).get('s')
  const posts = useLunr(query, localSearchPosts.index, localSearchPosts.store)

  return (
    <Layout archives={pageContext.archives} location={location}>
      <Meta location={location} />
      <h1>
        {query
          ? `${posts.length} results found related to "${query}"`
          : 'No Query Entered'}
      </h1>
      {query &&
        posts.map((post, i) => (
          <Post
            key={post.id || i}
            data={
              {
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
              } as Queries.PostByPathQuery
            }
            options={{ isIndex: true }}
          />
        ))}
    </Layout>
  )
}

export default SearchPage
