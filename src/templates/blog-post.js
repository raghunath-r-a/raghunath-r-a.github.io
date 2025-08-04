import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import * as styles from "./blog-post.module.css"

const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <div className={styles.container}>
        <article className={`${styles.article} mobile-reduced-padding`}>
          <header className={styles.header}>
            <h1 className={styles.title}>{post.frontmatter.title}</h1>
            <p className={styles.meta}>
              By {post.frontmatter.author} on {post.frontmatter.date}
            </p>
            {post.frontmatter.tags && (
              <div className={styles.tagsContainer}>
                {post.frontmatter.tags.map((tag, index) => (
                  <Link 
                    to={`/tags/${tag.toLowerCase().replace(/\s/g, '-')}/`} 
                    key={tag} 
                    className={styles.tag}
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            )}
          </header>
          <div className={styles.content} dangerouslySetInnerHTML={{ __html: post.html }} />
        </article>
      </div>
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