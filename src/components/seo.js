/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ description, lang, meta, title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            image
            description
            social { twitter }
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: site.siteMetadata.image,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.social.twitter,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: 'msapplication-TileColor',
          content: '#ffffff',
        },
        {
          name: 'msapplication-TileImage',
          content: '/ms-icon-144x144.png',
        },
        {
          name: 'theme-color',
          content: '#ffffff',
        },
      ].concat(meta)}
    />
  )
}

// <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png">
// <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png">
// <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png">
// <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png">
// <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png">
// <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png">
// <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png">
// <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png">
// <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png">
// <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png">
// <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
// <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png">
// <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
// <link rel="manifest" href="/manifest.json">
// <meta name="msapplication-TileColor" content="#ffffff">
// <meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
// <meta name="theme-color" content="#ffffff">
// </Helmet>

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
