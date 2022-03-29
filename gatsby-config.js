module.exports = {
  siteMetadata: {
    title: `Little Round Head`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-sass",
      options: {
        sassOptions: {
          includePaths: ["./node_modules"],
        }
      },
    }
  ],
};
