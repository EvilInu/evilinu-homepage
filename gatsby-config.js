module.exports = {
    /* Your site config here */
   plugins: [
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-postcss',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-react-helmet',
    {
        resolve: 'gatsby-plugin-mailchimp',
        options: {
            endpoint: 'https://landswap.us6.list-manage.com/subscribe/post?u=f709d01e92beafc26a4d9fab3&amp;id=76cb6d4d25',
            timeout: 3500
        }
    }, 
    {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `${__dirname}/src/assets/images`
        }
    },
    {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `products`,
          path: `${__dirname}/src/pages/products`
        }
    },
    {
        resolve: `gatsby-plugin-mdx`,
        options: {
          extensions: [`.mdx`, `.md`],
          defaultLayouts: {
            default: require.resolve(`${__dirname}/src/components/layout/Layout.tsx`),
        //     // docs: require.resolve(`./src/components/layouts/docs`),
        //     // blog: require.resolve(`./src/components/layouts/blogPost`),
        //     // faq: require.resolve(`./src/components/layouts/faq`)
          },
          remarkPlugins: [require(`remark-math`)],
          rehypePlugins: [require(`rehype-katex`)],
          gatsbyRemarkPlugins: [
            `gatsby-remark-embedder`,
            `gatsby-remark-copy-linked-files`,
            `gatsby-remark-autolink-headers`,
            `gatsby-remark-smartypants`,
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 1200,
                showCaptions: true
              }
            }
          ]
        }
      }
  ]}