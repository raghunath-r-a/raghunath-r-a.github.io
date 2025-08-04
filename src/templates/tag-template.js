import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import * as styles from "./tag-template.module.css"

const TagTemplate = ({ data, pageContext }) => {
  const { tag } = pageContext
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Posts Tagged: {tag}</h1>
          <p className={styles.postCount}>{posts.length} post{posts.length === 1 ? "" : "s"} found</p>
        </header>
        <ul className={styles.postList}>
          {posts.map(({ frontmatter, fields, excerpt }) => (
            <li key={fields.slug} className={styles.postItem}>
              <Link to={`/blog${fields.slug}`} className={styles.postLink}>
                <h2 className={styles.postTitle}>{frontmatter.title}</h2>
                <p className={styles.postDate}>{frontmatter.date}</p>
                <p className={styles.postExcerpt}>{excerpt}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export default TagTemplate

export const Head = ({ pageContext }) => {
  const { tag } = pageContext
  return (
    <title>Posts Tagged: {tag} - Raghunath Reddy</title>
  )
}

export const query = graphql`
  query ($tag: String!) {
    allMarkdownRemark(
      filter: { frontmatter: { tags: { in: [$tag] }, published: { ne: false } } }
      sort: { frontmatter: { date: DESC } }
    ) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
        }
        fields {
          slug
        }
        excerpt
      }
    }
  }
`
