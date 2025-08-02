module.exports = {
  siteMetadata: {
    title: "Raghunath Reddy",
    description: "Technical Content Writer, Editor, and Product Marketer",
    siteUrl: "https://raghunath-r-a.github.io",
    author: "Raghunath Reddy",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [],
      },
    },
  ],
  pathPrefix: "/",
};