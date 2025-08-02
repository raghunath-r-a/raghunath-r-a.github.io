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
    fontSize: 'clamp(var(--font-size-5xl), 8vw, var(--font-size-6xl))',
    fontFamily: 'var(--font-serif)',
    fontWeight: '600',
    background: 'linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.9) 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '1.5rem',
    lineHeight: 'var(--line-height-tight)',
    letterSpacing: '-0.02em'
  }

  const subtitleStyle = {
    fontSize: 'clamp(var(--font-size-lg), 3vw, var(--font-size-2xl))',
    color: 'rgba(255, 255, 255, 0.95)',
    marginBottom: '2rem',
    fontWeight: '400',
    lineHeight: 'var(--line-height-relaxed)',
    fontFamily: 'var(--font-sans)',
    maxWidth: '600px',
    margin: '0 auto 2rem'
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
    fontWeight: '500',
    fontSize: 'var(--font-size-lg)',
    fontFamily: 'var(--font-sans)',
    lineHeight: 'var(--line-height-normal)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    minHeight: '48px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center'
  }

  const sectionStyle = {
    background: 'var(--color-bg-primary)',
    padding: '5rem 0',
    position: 'relative'
  }

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem'
  }

  const sectionTitleStyle = {
    fontSize: 'clamp(var(--font-size-3xl), 5vw, var(--font-size-4xl))',
    fontFamily: 'var(--font-serif)',
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: '3rem',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    lineHeight: 'var(--line-height-tight)',
    letterSpacing: '-0.01em'
  }

  const worksGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '2rem',
    marginBottom: '3rem'
  }

  const workCardStyle = {
    background: 'var(--color-bg-card)',
    borderRadius: '20px',
    padding: '2rem',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
    border: '1px solid rgba(251, 191, 36, 0.2)',
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  }

  const workTitleStyle = {
    fontSize: 'var(--font-size-xl)',
    fontWeight: '600',
    color: 'var(--color-text-primary)',
    marginBottom: '0.75rem',
    fontFamily: 'var(--font-serif)',
    lineHeight: 'var(--line-height-snug)'
  }

  const workLinkStyle = {
    color: 'var(--color-text-link)',
    textDecoration: 'none',
    fontWeight: '500',
    fontSize: 'var(--font-size-base)',
    fontFamily: 'var(--font-sans)',
    borderBottom: '2px solid transparent',
    transition: 'border-color 0.3s ease',
    lineHeight: 'var(--line-height-normal)'
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
            Driving cybersecurity excellence through strategic content management.<br/>
            Program Manager • CyberSecurity
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
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(251, 191, 36, 0.15)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)'
                }}
              >
                <div style={{ 
                  fontSize: 'var(--font-size-sm)', 
                  color: 'var(--color-accent)', 
                  fontWeight: '600', 
                  marginBottom: '0.75rem',
                  fontFamily: 'var(--font-sans)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  lineHeight: 'var(--line-height-normal)'
                }}>
                  {work.type}
                </div>
                <h3 style={workTitleStyle}>{work.title}</h3>
                <a 
                  href={work.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={workLinkStyle}
                  onMouseEnter={(e) => e.target.style.borderColor = 'var(--color-accent)'}
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
      <section style={{...sectionStyle, background: 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-hover) 100%)', color: '#0f172a'}}>
        <div style={{...containerStyle, textAlign: 'center'}}>
          <h2 style={{...sectionTitleStyle, color: '#0f172a', marginBottom: '2rem'}}>
            Let's Strengthen Security Together
          </h2>
          <p style={{ 
            fontSize: 'var(--font-size-xl)', 
            marginBottom: '2rem', 
            opacity: 0.95,
            fontFamily: 'var(--font-sans)',
            lineHeight: 'var(--line-height-relaxed)',
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}>
            Ready to discuss cybersecurity program management or enterprise security initiatives?
          </p>
          <Link 
            to="/about" 
            style={{
              ...ctaButtonStyle,
              background: 'rgba(15, 23, 42, 0.15)',
              border: '2px solid rgba(15, 23, 42, 0.3)',
              color: '#0f172a'
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