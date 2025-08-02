import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

const IndexPage = () => {
  const heroStyle = {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden'
  }

  const heroContentStyle = {
    maxWidth: '800px',
    padding: '0 2rem',
    zIndex: 2,
    position: 'relative'
  }

  const titleStyle = {
    fontSize: 'clamp(3rem, 8vw, 6rem)',
    fontFamily: 'Playfair Display, serif',
    fontWeight: '700',
    background: 'linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.8) 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '1.5rem',
    lineHeight: '1.1'
  }

  const subtitleStyle = {
    fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
    color: 'rgba(255, 255, 255, 0.9)',
    marginBottom: '2rem',
    fontWeight: '300',
    lineHeight: '1.4'
  }

  const ctaButtonStyle = {
    display: 'inline-block',
    padding: '1rem 2.5rem',
    background: 'rgba(255, 255, 255, 0.15)',
    backdropFilter: 'blur(10px)',
    border: '2px solid rgba(255, 255, 255, 0.3)',
    borderRadius: '50px',
    color: 'white',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '1.1rem',
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  }

  const sectionStyle = {
    background: 'white',
    padding: '5rem 0',
    position: 'relative'
  }

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem'
  }

  const sectionTitleStyle = {
    fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
    fontFamily: 'Playfair Display, serif',
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: '3rem',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  }

  const worksGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '2rem',
    marginBottom: '3rem'
  }

  const workCardStyle = {
    background: 'linear-gradient(145deg, #f8f9ff 0%, #fff 100%)',
    borderRadius: '20px',
    padding: '2rem',
    boxShadow: '0 10px 30px rgba(102, 126, 234, 0.1)',
    border: '1px solid rgba(102, 126, 234, 0.1)',
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  }

  const workTitleStyle = {
    fontSize: '1.3rem',
    fontWeight: '600',
    color: '#333',
    marginBottom: '0.5rem',
    fontFamily: 'Playfair Display, serif'
  }

  const workLinkStyle = {
    color: '#667eea',
    textDecoration: 'none',
    fontWeight: '500',
    borderBottom: '2px solid transparent',
    transition: 'border-color 0.3s ease'
  }

  const floatingElementStyle = {
    position: 'absolute',
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '50%',
    animation: 'float 6s ease-in-out infinite'
  }

  const works = [
    {
      type: "eBook",
      title: "Data Privacy: What Enterprises Need to Know?",
      url: "https://books2read.com/u/3k2eyK"
    },
    {
      type: "eBook", 
      title: "Don't Ever Think About Passwords Again",
      url: "https://books2read.com/u/3J6YBA"
    },
    {
      type: "Forbes Article",
      title: "How Can Enterprises Fortify Digital Identity Amidst Rising AI Threats?",
      url: "https://www.forbes.com/sites/forbestechcouncil/2023/08/11/how-can-enterprises-fortify-digital-identity-amidst-rising-ai-threats/?sh=6d82ed7051f3"
    },
    {
      type: "Forbes Article",
      title: "The CTO's Role In Product Growth", 
      url: "https://www.forbes.com/sites/forbestechcouncil/2022/06/22/the-ctos-role-in-product-growth/?sh=6bb42af21eed"
    },
    {
      type: "Technical Blog",
      title: "What is Risk-Based Authentication? And Why Should You Implement It?",
      url: "https://www.loginradius.com/blog/engineering/risk-based-authentication/"
    },
    {
      type: "Technical Blog",
      title: "How Chrome's Third-Party Cookie Restrictions Affect User Authentication?",
      url: "https://www.loginradius.com/blog/engineering/identity-impact-of-google-chrome-thirdparty-cookie-restrictions/"
    }
  ]

  return (
    <Layout isHomePage={true}>
      {/* Hero Section */}
      <section style={heroStyle}>
        <div style={{...floatingElementStyle, top: '10%', left: '10%', width: '100px', height: '100px', animationDelay: '0s'}}></div>
        <div style={{...floatingElementStyle, top: '20%', right: '15%', width: '60px', height: '60px', animationDelay: '2s'}}></div>
        <div style={{...floatingElementStyle, bottom: '15%', left: '20%', width: '80px', height: '80px', animationDelay: '4s'}}></div>
        
        <div style={heroContentStyle} className="fade-in-up">
          <h1 style={titleStyle}>Raghunath Reddy</h1>
          <p style={subtitleStyle}>
            Crafting compelling narratives in the digital realm.<br/>
            Technical Content Writer • Editor • Product Marketer
          </p>
          <Link 
            to="/about" 
            style={ctaButtonStyle}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.25)'
              e.target.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.15)'
              e.target.style.transform = 'translateY(0)'
            }}
          >
            Discover My Story
          </Link>
        </div>
      </section>

      {/* Works Section */}
      <section style={sectionStyle}>
        <div style={containerStyle}>
          <h2 style={sectionTitleStyle} className="fade-in-up">Featured Works</h2>
          
          <div style={worksGridStyle}>
            {works.map((work, index) => (
              <div 
                key={index}
                style={workCardStyle}
                className="fade-in-up"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)'
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(102, 126, 234, 0.15)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(102, 126, 234, 0.1)'
                }}
              >
                <div style={{ fontSize: '0.9rem', color: '#667eea', fontWeight: '600', marginBottom: '0.5rem' }}>
                  {work.type}
                </div>
                <h3 style={workTitleStyle}>{work.title}</h3>
                <a 
                  href={work.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={workLinkStyle}
                  onMouseEnter={(e) => e.target.style.borderColor = '#667eea'}
                  onMouseLeave={(e) => e.target.style.borderColor = 'transparent'}
                >
                  Read More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{...sectionStyle, background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white'}}>
        <div style={{...containerStyle, textAlign: 'center'}}>
          <h2 style={{...sectionTitleStyle, color: 'white', marginBottom: '2rem'}}>
            Let's Create Something Amazing
          </h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.9 }}>
            Ready to elevate your content strategy? Let's collaborate.
          </p>
          <Link 
            to="/about" 
            style={{
              ...ctaButtonStyle,
              background: 'rgba(255, 255, 255, 0.2)',
              border: '2px solid rgba(255, 255, 255, 0.4)'
            }}
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage

export const Head = () => (
  <>
    <title>Raghunath Reddy - Portfolio</title>
    <meta name="description" content="Technical Content Writer, Editor, and Product Marketer" />
  </>
)