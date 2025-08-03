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
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1.25rem 3rem',
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '60px',
    color: 'white',
    textDecoration: 'none',
    fontWeight: '500',
    fontSize: 'clamp(var(--font-size-base), 2.5vw, var(--font-size-lg))',
    fontFamily: 'var(--font-sans)',
    lineHeight: 'var(--line-height-normal)',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
    minHeight: '56px',
    letterSpacing: '0.025em'
  }

  const sectionStyle = {
    background: 'var(--color-bg-primary)',
    padding: '3rem 0 4rem',
    position: 'relative'
  }

  const containerStyle = {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0 clamp(1rem, 5vw, 3rem)'
  }

  const sectionTitleStyle = {
    fontSize: 'clamp(var(--font-size-3xl), 5vw, var(--font-size-4xl))',
    fontFamily: 'var(--font-serif)',
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: '2rem',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    lineHeight: 'var(--line-height-tight)',
    letterSpacing: '-0.01em'
  }

  const worksGridStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 'clamp(1rem, 2.5vw, 1.5rem)',
    marginBottom: '2rem',
    justifyContent: 'center'
  }

  const getCardStyle = (index) => ({
    background: 'linear-gradient(145deg, var(--color-bg-card), rgba(30, 41, 59, 0.6))',
    borderRadius: `${12 + (index % 3) * 4}px ${16 + (index % 2) * 6}px ${14 + (index % 4) * 3}px ${13 + (index % 3) * 5}px`,
    padding: 'clamp(1.25rem, 3vw, 2rem)',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08), 0 1px 4px rgba(6, 182, 212, 0.06)',
    border: 'none',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backdropFilter: 'blur(8px)',
    flex: '1 1 calc(33.333% - 1rem)',
    minWidth: '280px',
    maxWidth: '400px'
  })

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
      type: "Achievement",
      title: "Doubled Blog Traffic: 80K to 200K Monthly Users in 6 Months",
      url: "https://github.com/raghunath-r-a"
    },
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
            Leading cybersecurity program management in healthcare through strategic content initiatives and cross-functional collaboration.<br/>
            Sr. Cybersecurity Program Manager • Office of the CISO
          </p>
          <Link 
            to="/about" 
            style={ctaButtonStyle}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.2)'
              e.target.style.transform = 'translateY(-3px) scale(1.02)'
              e.target.style.boxShadow = '0 12px 32px rgba(6, 182, 212, 0.3)'
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.1)'
              e.target.style.transform = 'translateY(0) scale(1)'
              e.target.style.boxShadow = 'none'
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
          
          <div style={worksGridStyle} className="mobile-single-column">
            {works.map((work, index) => (
              <div 
                key={index}
                style={getCardStyle(index)}
                className="fade-in-up mobile-reduced-padding"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px) scale(1.01)'
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(6, 182, 212, 0.15), 0 4px 12px rgba(0, 0, 0, 0.08)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)'
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08), 0 1px 4px rgba(6, 182, 212, 0.06)'
                }}
              >
                <div>
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
                </div>
                {work.type !== "Achievement" && (
                  <a 
                    href={work.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{...workLinkStyle, marginTop: '1rem'}}
                    onMouseEnter={(e) => e.target.style.borderColor = 'var(--color-accent)'}
                    onMouseLeave={(e) => e.target.style.borderColor = 'transparent'}
                  >
                    Read More →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{...sectionStyle, background: 'linear-gradient(135deg, var(--color-secondary) 0%, var(--color-primary) 100%)', color: 'var(--color-text-primary)', border: 'none', padding: '2rem 0 3rem'}}>
        <div style={{...containerStyle, textAlign: 'center'}}>
          <h2 style={{...sectionTitleStyle, color: 'var(--color-text-primary)', marginBottom: '1rem'}}>
            Let's Strengthen Security Together
          </h2>
          <p style={{ 
            fontSize: 'var(--font-size-lg)', 
            marginBottom: '1.5rem', 
            opacity: 0.95,
            fontFamily: 'var(--font-sans)',
            lineHeight: 'var(--line-height-relaxed)',
            maxWidth: '500px',
            margin: '0 auto 1.5rem'
          }}>
            Ready to discuss cybersecurity program management or enterprise security initiatives?
          </p>
          <Link 
            to="/about" 
            style={{
              ...ctaButtonStyle,
              background: 'rgba(6, 182, 212, 0.15)',
              border: '2px solid var(--color-accent)',
              color: 'var(--color-accent)'
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
    <title>Raghunath Reddy - Sr. Cybersecurity Program Manager</title>
    <meta name="description" content="Sr. Cybersecurity Program Manager in healthcare, leading strategic content initiatives within Office of the CISO" />
  </>
)