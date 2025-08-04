import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import * as styles from "./tags.module.css"

const TagsPage = ({ data }) => {
  const tags = data.allMarkdownRemark.group

  return (
    <Layout>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>All Tags</h1>
        </header>
        <ul className={styles.tagList}>
          {tags.map(tag => (
            <li key={tag.fieldValue} className={styles.tagItem}>
              <Link to={`/tags/${tag.fieldValue.toLowerCase().replace(/\s/g, '-')}/`} className={styles.tagLink}>
                {tag.fieldValue} <span className={styles.tagCount}>({tag.totalCount})</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export default TagsPage

export const Head = () => (
  <title>All Tags - Raghunath Reddy</title>
)

export const query = graphql`
  query {
    allMarkdownRemark(filter: { frontmatter: { published: { ne: false } } }) {
      group(field: { frontmatter: { tags: SELECT } }) {
        fieldValue
        totalCount
      }
    }
  }
`
