const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Create blog post pages
  const blogPostResult = await graphql(`
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
            tags
          }
          fields {
            slug
          }
        }
      }
    }
  `)

  if (blogPostResult.errors) {
    console.error(blogPostResult.errors)
    return
  }

  const posts = blogPostResult.data.allMarkdownRemark.nodes

  posts.forEach((post) => {
    createPage({
      path: `/blog${post.fields.slug}`,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        id: post.id,
      },
    })
  })

  // Create tag pages
  const tagsResult = await graphql(`
    query {
      allMarkdownRemark(filter: { frontmatter: { published: { ne: false } } }) {
        group(field: { frontmatter: { tags: SELECT } }) {
          fieldValue
        }
      }
    }
  `)

  if (tagsResult.errors) {
    console.error(tagsResult.errors)
    return
  }

  const tags = tagsResult.data.allMarkdownRemark.group

  // Create individual tag pages
  tags.forEach((tag) => {
    createPage({
      path: `/tags/${tag.fieldValue.toLowerCase().replace(/\s/g, '-')}/`,
      component: path.resolve(`./src/templates/tag-template.js`),
      context: {
        tag: tag.fieldValue,
      },
    })
  })

  // Create a main tags page
  createPage({
    path: `/tags/`,
    component: path.resolve(`./src/pages/tags.js`),
    context: {
      tags: tags.map(tag => tag.fieldValue),
    },
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
