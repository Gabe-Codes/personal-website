/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    plugins: [
        'gatsby-plugin-sass',
        {
            resolve: 'gatsby-plugin-google-fonts',
            options: {
              fonts: [
                'Roboto',
                'sans-serif'
              ]
            },
        },
        'gatsby-plugin-sharp',
        {
          resolve: `gatsby-plugin-sharp`,
          options: {
            useMozJpeg: false,
            stripMetadata: true,
            defaultQuality: 75,
            icon: 'src/assets/img/GC.svg'
          },
        },
    ],
};
