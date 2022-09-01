import React from 'react'
import { Helmet } from 'react-helmet'

import { SiteMetadata } from '../../../types/graphql-types'

interface Props {
  site:
    | Pick<
        SiteMetadata,
        | 'title'
        | 'description'
        | 'siteUrl'
        | 'author'
        | 'twitter'
        | 'facebook'
        | 'youtube'
        | 'linkedin'
        | 'adsense'
        | 'siteUrl'
        | 'location'
        | 'previewImgURL'
      >
    | null
    | undefined
  title?: string
  customDescription?: string
}

const Meta: React.FC<Props> = ({
  site,
  title,
  customDescription = '',
}: Props) => {
  const siteTitle = site?.title || ''
  const siteUrl = site?.siteUrl || ''
  const author = site?.author || ''
  const location = site?.location | author | {}
  const siteDescription =
    customDescription == '' ? site?.description || '' : customDescription
  const pageTitle = title ? title : siteTitle
  const previewImgURL = site?.previewImgURL
  const image = {
    og: `${siteUrl}${previewImgURL ?? '/img/icon.png'}`,
    twitter: `${siteUrl}${previewImgURL ?? '/img/icon.png'}`,
  }
  return (
    <Helmet
      title={pageTitle}
      meta={[
        { name: 'twitter:card', content: 'summary' },
        {
          name: 'twitter:site',
          content: `${site?.twitter}`,
        },
        {
          name: 'twitter:image',
          content: image.twitter,
        },
        {
          name: 'twitter:title',
          content: pageTitle,
        },
        {
          name: 'twitter:description',
          content: siteDescription,
        },
        {
          name: 'facebook:site',
          content: `${site?.facebook}`,
        },
        {
          name: 'youtube:site',
          content: `${site?.youtube}`,
        },
        {
          name: 'linkedin:site',
          content: `${site?.linkedin}`,
        },
        { property: 'og:title', content: pageTitle },
        { property: 'og:type', content: 'website' },
        {
          name: 'description',
          property: 'og:description',
          content: siteDescription,
        },
        {
          property: 'og:url',
          content: `${siteUrl}${location.pathname}${location.hash}`,
        },
        {
          name: 'image',
          property: 'og:image',
          content: image.og,
        },
        {
          name: 'author',
          property: 'author',
          content: author,
        },
      ]}
    />
  )
}
export default Meta
