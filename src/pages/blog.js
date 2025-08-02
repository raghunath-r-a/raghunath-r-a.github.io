import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"

const BlogPage = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes

  const heroStyle = {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    padding: '8rem 0 6rem',
    textAlign: 'center',
    color: 'white'
  }

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem'
  }

  const titleStyle = {
    fontSize: 'clamp(3rem, 6vw, 4.5rem)',
    fontFamily: 'Playfair Display, serif',
    fontWeight: '700',
    marginBottom: '1.5rem',
    lineHeight: '1.1'
  }

  const subtitleStyle = {
    fontSize: 'clamp(1.2rem, 3vw, 1.6rem)',
    opacity: 0.9,
    fontWeight: '300',
    maxWidth: '600px',
    margin: '0 auto'
  }

  const sectionStyle = {
    padding: '6rem 0',
    background: 'white'
  }

  const comingSoonStyle = {
    textAlign: 'center',
    padding: '4rem 2rem',
    background: 'linear-gradient(145deg, #f8f9ff 0%, #fff 100%)',
    borderRadius: '20px',
    margin: '2rem 0',
    boxShadow: '0 10px 30px rgba(102, 126, 234, 0.1)'
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section style={heroStyle}>
        <div style={containerStyle}>
          <h1 style={titleStyle} className="fade-in-up">Blog</h1>
          <p style={subtitleStyle} className="fade-in-up">
            Thoughts, insights, and stories from the digital frontier
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section style={sectionStyle}>
        <div style={containerStyle}>
          {posts.length > 0 ? (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '2rem'
            }}>
              {posts.map((post) => (
                <article
                  key={post.id}
                  style={{
                    background: 'linear-gradient(145deg, #f8f9ff 0%, #fff 100%)',
                    borderRadius: '20px',
                    padding: '2rem',
                    boxShadow: '0 10px 30px rgba(102, 126, 234, 0.1)',
                    border: '1px solid rgba(102, 126, 234, 0.1)',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  <h2 style={{
                    fontSize: '1.5rem',
                    fontFamily: 'Playfair Display, serif',
                    fontWeight: '600',
                    marginBottom: '1rem',
                    color: '#333'
                  }}>
                    <Link 
                      to={`/blog${post.fields.slug}`}
                      style={{
                        textDecoration: 'none',
                        color: 'inherit',
                        borderBottom: '2px solid transparent',
                        transition: 'border-color 0.3s ease'
                      }}
                      onMouseEnter={(e) => e.target.style.borderColor = '#667eea'}
                      onMouseLeave={(e) => e.target.style.borderColor = 'transparent'}
                    >
                      {post.frontmatter.title}
                    </Link>
                  </h2>
                  <div style={{
                    fontSize: '0.9rem',
                    color: '#667eea',
                    marginBottom: '1rem',
                    fontWeight: '500'
                  }}>
                    {post.frontmatter.date} • by {post.frontmatter.author}
                  </div>
                  <p style={{
                    color: '#666',
                    lineHeight: '1.6',
                    marginBottom: '1rem'
                  }}>
                    {post.excerpt}
                  </p>
                  {post.frontmatter.tags && (
                    <div style={{ marginTop: '1rem' }}>
                      {post.frontmatter.tags.map((tag, index) => (
                        <span
                          key={index}
                          style={{
                            display: 'inline-block',
                            background: 'rgba(102, 126, 234, 0.1)',
                            color: '#667eea',
                            padding: '0.3rem 0.8rem',
                            borderRadius: '15px',
                            fontSize: '0.8rem',
                            marginRight: '0.5rem',
                            marginBottom: '0.5rem'
                          }}
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </article>
              ))}
            </div>
          ) : (
            <div style={comingSoonStyle} className="fade-in-up">
              <h2 style={{
                fontSize: '2rem',
                fontFamily: 'Playfair Display, serif',
                marginBottom: '1rem',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Coming Soon
              </h2>
              <p style={{
                fontSize: '1.1rem',
                color: '#666',
                marginBottom: '2rem'
              }}>
                I'm working on some amazing content that will be published here soon. 
                Stay tuned for insights on technical writing, product marketing, and digital innovation!
              </p>
              <Link
                to="/"
                style={{
                  display: 'inline-block',
                  padding: '1rem 2rem',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '25px',
                  fontWeight: '500',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)'
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
    <meta name="description" content="Thoughts, insights, and stories from the digital frontier by Raghunath Reddy" />
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