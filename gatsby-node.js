const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { published: { ne: false } } }
        sort: { frontmatter: { date: DESC } }
      ) {
        nodes {
          id
          frontmatter {
            title
            date
          }
          fields {
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    console.error(result.errors)
    return
  }

  const posts = result.data.allMarkdownRemark.nodes

  posts.forEach((post) => {
    createPage({
      path: `/blog${post.fields.slug}`,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        id: post.id,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const filename = path.basename(node.fileAbsolutePath, ".md")
    const slug = `/${filename}/`
    
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}