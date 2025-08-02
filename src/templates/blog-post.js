import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <article>
        <header>
          <h1>{post.frontmatter.title}</h1>
          <p>
            By {post.frontmatter.author} on {post.frontmatter.date}
          </p>
          {post.frontmatter.tags && (
            <div>
              Tags: {post.frontmatter.tags.map((tag, index) => (
                <span key={tag} style={{ marginRight: "10px" }}>
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </header>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
    </Layout>
  )
}

export default BlogPostTemplate

export const Head = ({ data }) => {
  const post = data.markdownRemark
  return (
    <>
      <title>{post.frontmatter.title} - Raghunath Reddy</title>
      <meta name="description" content={post.excerpt} />
    </>
  )
}

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      excerpt
      frontmatter {
        title
        author
        date(formatString: "MMMM DD, YYYY")
        tags
      }
    }
  }
`