import React from 'react'
import { PageProps } from 'gatsby'

import Meta from '../components/meta/meta'
import Layout from '../components/layout/layout'

const NotFound = ({ location }: PageProps) => {
  return (
    <Layout location={location} archives={{}}>
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <p>
        Please let us know, by raising an issue
        <a href="https://github.com/allanbowe/rawsas/issues"> here</a>!
      </p>
    </Layout>
  )
}

export default NotFound

export const Head = ({ location }: PageProps) => (
  <Meta title="404: Not Found" location={location} />
)
