import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark

  const containerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '6rem 2rem 4rem'
  }

  const articleStyle = {
    background: 'var(--color-bg-card)',
    borderRadius: '20px',
    padding: '3rem',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
    border: '1px solid rgba(6, 182, 212, 0.2)'
  }

  const headerStyle = {
    marginBottom: '3rem',
    textAlign: 'center',
    paddingBottom: '2rem',
    borderBottom: '1px solid rgba(6, 182, 212, 0.3)'
  }

  const titleStyle = {
    fontSize: 'clamp(var(--font-size-3xl), 5vw, var(--font-size-4xl))',
    fontFamily: 'var(--font-serif)',
    fontWeight: '600',
    color: 'var(--color-text-primary)',
    marginBottom: '1.5rem',
    lineHeight: 'var(--line-height-tight)'
  }

  const metaStyle = {
    fontSize: 'var(--font-size-base)',
    color: 'var(--color-accent)',
    fontFamily: 'var(--font-sans)',
    fontWeight: '500',
    marginBottom: '1rem'
  }

  const contentStyle = {
    fontSize: 'var(--font-size-lg)',
    lineHeight: 'var(--line-height-loose)',
    color: 'var(--color-text-secondary)',
    fontFamily: 'var(--font-sans)'
  }

  return (
    <Layout>
      <div style={containerStyle}>
        <article style={articleStyle} className="mobile-reduced-padding">
          <header style={headerStyle}>
            <h1 style={titleStyle}>{post.frontmatter.title}</h1>
            <p style={metaStyle}>
              By {post.frontmatter.author} on {post.frontmatter.date}
            </p>
            {post.frontmatter.tags && (
              <div style={{ marginTop: '1rem' }}>
                {post.frontmatter.tags.map((tag, index) => (
                  <span 
                    key={tag} 
                    style={{
                      display: 'inline-block',
                      background: 'rgba(6, 182, 212, 0.15)',
                      color: 'var(--color-accent)',
                      padding: '0.3rem 0.8rem',
                      borderRadius: '15px',
                      fontSize: 'var(--font-size-xs)',
                      fontFamily: 'var(--font-sans)',
                      fontWeight: '500',
                      marginRight: '0.5rem',
                      marginBottom: '0.5rem',
                      border: '1px solid rgba(6, 182, 212, 0.3)'
                    }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </header>
          <div style={contentStyle} dangerouslySetInnerHTML={{ __html: post.html }} />
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