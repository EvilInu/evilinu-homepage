module.exports = {
    /* Your site config here */
   plugins: [
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-postcss',
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
    }
  ]}