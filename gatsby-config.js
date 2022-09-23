module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    `gatsby-plugin-material-ui`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: [
            "Barlow Condensed:n6,n5,n4,n3:latin",
            "Lato",
            "Poppins",
            "Rubik",
            "Anton",
            "Oxygen"
          ],
        },
      },
    },
  ],
};
