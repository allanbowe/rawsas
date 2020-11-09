import React from 'react'
import { graphql } from 'gatsby'

import { NotFoundQuery } from '../../types/graphql-types'
import Meta from '../components/meta/meta'
import Layout from '../components/layout/layout'

interface Props {
  data: NotFoundQuery
  location: Location
}

const NotFound: React.FC<Props> = ({ data, location }: Props) => {
  const meta = data.site?.meta
  return (
    <Layout location={location}>
      <Meta site={meta} title="404: Not Found" />
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

export default NotFound

export const pageQuery = graphql`
  query NotFoundQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
