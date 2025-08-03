import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"

const BlogPage = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes

  const heroStyle = {
    background: 'linear-gradient(135deg, var(--color-secondary) 0%, var(--color-primary) 100%)',
    padding: '8rem 0 6rem',
    textAlign: 'center',
    color: 'var(--color-text-primary)'
  }

  const containerStyle = {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0 clamp(1rem, 5vw, 3rem)'
  }

  const titleStyle = {
    fontSize: 'clamp(var(--font-size-4xl), 6vw, var(--font-size-5xl))',
    fontFamily: 'var(--font-serif)',
    fontWeight: '600',
    marginBottom: '1.5rem',
    lineHeight: 'var(--line-height-tight)',
    letterSpacing: '-0.02em'
  }

  const subtitleStyle = {
    fontSize: 'clamp(var(--font-size-lg), 3vw, var(--font-size-xl))',
    opacity: 0.95,
    fontWeight: '400',
    fontFamily: 'var(--font-sans)',
    lineHeight: 'var(--line-height-relaxed)',
    maxWidth: '600px',
    margin: '0 auto'
  }

  const sectionStyle = {
    padding: 'clamp(4rem, 8vw, 8rem) 0',
    background: 'var(--color-bg-primary)'
  }

  const comingSoonStyle = {
    textAlign: 'center',
    padding: 'clamp(3rem, 6vw, 5rem)',
    background: 'linear-gradient(145deg, var(--color-bg-card), rgba(30, 41, 59, 0.8))',
    borderRadius: '32px',
    margin: '3rem 0',
    boxShadow: '0 16px 40px rgba(6, 182, 212, 0.1), 0 4px 16px rgba(0, 0, 0, 0.1)',
    border: '1px solid rgba(6, 182, 212, 0.1)',
    backdropFilter: 'blur(20px)'
  }

  const blogGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '2rem',
    alignItems: 'stretch'
  }

  const blogCardStyle = {
    background: 'var(--color-bg-card)',
    borderRadius: '20px',
    padding: '2rem',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
    border: '1px solid rgba(6, 182, 212, 0.2)',
    transition: 'all 0.3s ease',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section style={heroStyle}>
        <div style={containerStyle}>
          <h1 style={titleStyle} className="fade-in-up">Blog</h1>
          <p style={subtitleStyle} className="fade-in-up">
            Insights on cybersecurity program management, AI-assisted development, and strategic communication
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section style={sectionStyle}>
        <div style={containerStyle}>
          {posts.length > 0 ? (
            <div style={blogGridStyle} className="mobile-single-column">
              {posts.map((post) => (
                <article
                  key={post.id}
                  style={blogCardStyle}
                  className="mobile-reduced-padding"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)'
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(6, 182, 212, 0.15)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)'
                  }}
                >
                  <div style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ marginBottom: '1rem' }}>
                      <div style={{
                        fontSize: 'var(--font-size-sm)',
                        color: 'var(--color-accent)',
                        marginBottom: '0.75rem',
                        fontWeight: '600',
                        fontFamily: 'var(--font-sans)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        lineHeight: 'var(--line-height-normal)'
                      }}>
                        {post.frontmatter.date} • by {post.frontmatter.author}
                      </div>
                      <h2 style={{
                        fontSize: 'var(--font-size-xl)',
                        fontFamily: 'var(--font-serif)',
                        fontWeight: '600',
                        marginBottom: '0.75rem',
                        color: 'var(--color-text-primary)',
                        lineHeight: 'var(--line-height-snug)'
                      }}>
                        <Link 
                          to={`/blog${post.fields.slug}`}
                          style={{
                            textDecoration: 'none',
                            color: 'inherit',
                            borderBottom: '2px solid transparent',
                            transition: 'border-color 0.3s ease'
                          }}
                          onMouseEnter={(e) => e.target.style.borderColor = 'var(--color-accent)'}
                          onMouseLeave={(e) => e.target.style.borderColor = 'transparent'}
                        >
                          {post.frontmatter.title}
                        </Link>
                      </h2>
                      <p style={{
                        color: 'var(--color-text-secondary)',
                        lineHeight: 'var(--line-height-relaxed)',
                        fontSize: 'var(--font-size-base)',
                        fontFamily: 'var(--font-sans)',
                        flex: '1'
                      }}>
                        {post.excerpt}
                      </p>
                    </div>
                    {post.frontmatter.tags && (
                      <div style={{ marginTop: 'auto', paddingTop: '1rem' }}>
                        {post.frontmatter.tags.map((tag, index) => (
                          <span
                            key={index}
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
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div style={comingSoonStyle} className="fade-in-up">
              <h2 style={{
                fontSize: 'var(--font-size-3xl)',
                fontFamily: 'var(--font-serif)',
                marginBottom: '1rem',
                background: 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-hover) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: '600'
              }}>
                Coming Soon
              </h2>
              <p style={{
                fontSize: 'var(--font-size-lg)',
                color: 'var(--color-text-secondary)',
                marginBottom: '2rem',
                fontFamily: 'var(--font-sans)',
                lineHeight: 'var(--line-height-relaxed)',
                maxWidth: '600px',
                margin: '0 auto 2rem'
              }}>
                I'm working on content about cybersecurity program management, AI-assisted development, and technical communication strategies. 
                Stay tuned for insights on building secure, effective programs!
              </p>
              <Link
                to="/"
                style={{
                  display: 'inline-block',
                  padding: '1rem 2rem',
                  background: 'rgba(6, 182, 212, 0.15)',
                  border: '2px solid var(--color-accent)',
                  color: 'var(--color-accent)',
                  textDecoration: 'none',
                  borderRadius: '25px',
                  fontWeight: '600',
                  fontSize: 'var(--font-size-base)',
                  fontFamily: 'var(--font-sans)',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(10px)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)'
                  e.target.style.background = 'rgba(6, 182, 212, 0.25)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)'
                  e.target.style.background = 'rgba(6, 182, 212, 0.15)'
                }}
              >
                Back to Home
              </Link>
            </div>
          )}
        </div>
      </section>
    </Layout>
  )
}

export default BlogPage

export const Head = () => (
  <>
    <title>Blog - Raghunath Reddy</title>
    <meta name="description" content="Coming soon: Insights on cybersecurity program management, AI-assisted development, and strategic communication in healthcare security" />
  </>
)

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
`