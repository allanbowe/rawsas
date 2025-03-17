import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

interface Props {
  title?: string
  customDescription?: string
  location?: Location
  previewImgURL?: string
}

const Meta: React.FC<Props> = ({
  title,
  customDescription = '',
  location,
  previewImgURL,
}) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
          author
          twitter
          facebook
          youtube
          linkedin
          adsense
        }
      }
    }
  `)

  const {
    title: siteTitle,
    description: siteDescription,
    siteUrl,
    author,
    twitter,
    facebook,
    youtube,
    linkedin,
  } = site.siteMetadata

  const pageTitle = title || siteTitle
  const metaDescription = customDescription || siteDescription
  const image = {
    og: `${siteUrl}${previewImgURL ?? '/img/icon.png'}`,
    twitter: `${siteUrl}${previewImgURL ?? '/img/icon.png'}`,
  }
  const pageUrl = location
    ? `${siteUrl}${location.pathname}${location.hash}`
    : siteUrl

  return (
    <Helmet title={pageTitle}>
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={twitter} />
      <meta name="twitter:image" content={image.twitter} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={metaDescription} />

      <meta name="facebook:site" content={facebook} />
      <meta name="youtube:site" content={youtube} />
      <meta name="linkedin:site" content={linkedin} />

      <meta property="og:title" content={pageTitle} />
      <meta property="og:type" content="website" />
      <meta
        name="description"
        property="og:description"
        content={metaDescription}
      />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:image" content={image.og} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="author" property="author" content={author} />
    </Helmet>
  )
}

export default Meta
