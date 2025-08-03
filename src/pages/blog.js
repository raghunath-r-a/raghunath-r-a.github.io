import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import * as styles from "./blog.module.css";

const BlogPage = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes;

  return (
    <Layout>
      <section className={styles.blog}>
        <div className={styles.container}>
          <h1 className={styles.title}>Blog</h1>
          <ul className={styles.postList}>
            {posts.map((post) => (
              <li key={post.id} className={styles.postListItem}>
                <h2 className={styles.postTitle}>
                  <Link to={`/blog${post.fields.slug}`}>{post.frontmatter.title}</Link>
                </h2>
                <p className={styles.postMeta}>
                  {post.frontmatter.date} • by {post.frontmatter.author}
                </p>
                <p className={styles.postExcerpt}>{post.excerpt}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPage;

export const Head = () => (
  <>
    <title>Blog - Raghunath Reddy</title>
    <meta
      name="description"
      content="Coming soon: Insights on cybersecurity program management, AI-assisted development, and strategic communication in healthcare security"
    />
  </>
);

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { published: { ne: false } } }
      sort: { frontmatter: { date: DESC } }
    ) {
      nodes {
        id
        excerpt
        fields {
          slug
        }
        frontmatter {
          title
          author
          date(formatString: "MMMM DD, YYYY")
          tags
        }
      }
    }
  }
`;
