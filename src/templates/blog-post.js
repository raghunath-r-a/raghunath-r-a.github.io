import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import * as styles from "./blog-post.module.css";

const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark;

  return (
    <Layout>
      <article className={styles.blogPost}>
        <div className={styles.container}>
          <h1 className={styles.title}>{post.frontmatter.title}</h1>
          <p className={styles.meta}>
            By {post.frontmatter.author} on {post.frontmatter.date}
          </p>
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
      </article>
    </Layout>
  );
};

export default BlogPostTemplate;

export const Head = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <>
      <title>{post.frontmatter.title} - Raghunath Reddy</title>
      <meta name="description" content={post.excerpt} />
    </>
  );
};

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
`;


