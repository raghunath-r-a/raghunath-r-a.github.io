import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

const IndexPage = () => {
  const heroStyle = {
    minHeight: '100vh',
    display: 'grid',
    gridTemplateColumns: '1fr 400px 1fr',
    gridTemplateRows: '1fr auto 1fr',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
    background: 'radial-gradient(ellipse at center, rgba(255, 107, 107, 0.1) 0%, transparent 70%)',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: '-50%',
      left: '-50%',
      width: '200%',
      height: '200%',
      background: 'conic-gradient(from 0deg, transparent, rgba(78, 205, 196, 0.1), transparent, rgba(255, 230, 109, 0.1), transparent)',
      animation: 'spin 20s linear infinite',
      zIndex: 0
    }
  }

  const heroContentStyle = {
    gridColumn: '2',
    gridRow: '2',
    maxWidth: 'none',
    padding: '0 2rem',
    zIndex: 10,
    position: 'relative',
    background: 'var(--color-bg-glass)',
    backdropFilter: 'blur(20px)',
    borderRadius: '32px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    padding: 'clamp(2rem, 5vw, 4rem)',
    boxShadow: 'var(--shadow-strong), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
  }

  const titleStyle = {
    fontSize: 'clamp(2.5rem, 6vw, 4rem)',
    fontFamily: 'var(--font-serif)',
    fontWeight: '700',
    background: 'var(--gradient-neon)',
    backgroundSize: '300% 300%',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '1.5rem',
    lineHeight: 'var(--line-height-tight)',
    letterSpacing: '-0.03em',
    animation: 'gradient 4s ease infinite, textShimmer 3s ease infinite',
    textShadow: '0 0 30px rgba(255, 107, 107, 0.3)'
  }

  const subtitleStyle = {
    fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
    color: 'var(--color-text-secondary)',
    marginBottom: '2.5rem',
    fontWeight: '400',
    lineHeight: 'var(--line-height-relaxed)',
    fontFamily: 'var(--font-sans)',
    opacity: 0.9,
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
  }

  const ctaButtonStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem 2.5rem',
    background: 'var(--gradient-accent)',
    backgroundSize: '300% 300%',
    backdropFilter: 'blur(20px)',
    border: '2px solid transparent',
    borderRadius: '50px',
    color: 'white',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: 'var(--font-size-base)',
    fontFamily: 'var(--font-sans)',
    lineHeight: 'var(--line-height-normal)',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
    minHeight: '56px',
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
    position: 'relative',
    overflow: 'hidden',
    animation: 'gradient 3s ease infinite, glow 2s ease-in-out infinite alternate',
    boxShadow: '0 8px 32px rgba(255, 107, 107, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
    '&::before': {
      content: '\"\"',
      position: 'absolute',
      top: 0,
      left: '-100%',
      width: '100%',
      height: '100%',
      background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
      transition: 'left 0.5s ease'
    }
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

  const getCardStyle = (index) => {
    const colors = [
      'var(--gradient-primary)',
      'var(--gradient-secondary)', 
      'var(--gradient-accent)',
      'var(--gradient-neon)',
      'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    ];
    
    return {
      background: `${colors[index % colors.length]}`,
      backgroundSize: '300% 300%',
      borderRadius: '24px',
      padding: 'clamp(1.5rem, 3vw, 2.5rem)',
      boxShadow: 'var(--shadow-strong), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      backdropFilter: 'blur(20px)',
      flex: '1 1 calc(33.333% - 1rem)',
      minWidth: '320px',
      maxWidth: '420px',
      position: 'relative',
      overflow: 'hidden',
      animation: `gradient 6s ease infinite, morphShape ${8 + index}s ease-in-out infinite`,
      '&::before': {
        content: '\"\"',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(1px)',
        borderRadius: 'inherit',
        zIndex: 1
      }
    }
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
              e.target.style.transform = 'translateY(-8px) scale(1.05)'
              e.target.style.boxShadow = '0 20px 60px rgba(255, 107, 107, 0.4), 0 0 40px rgba(78, 205, 196, 0.3)'
              e.target.style.backgroundSize = '400% 400%'
              e.target.style.filter = 'brightness(1.2) saturate(1.3)'
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0) scale(1)'
              e.target.style.boxShadow = '0 8px 32px rgba(255, 107, 107, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
              e.target.style.backgroundSize = '300% 300%'
              e.target.style.filter = 'brightness(1) saturate(1)'
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
                  e.currentTarget.style.transform = 'translateY(-15px) rotateX(5deg) rotateY(5deg) scale(1.05)'
                  e.currentTarget.style.boxShadow = '0 30px 60px rgba(255, 107, 107, 0.3), 0 0 50px rgba(78, 205, 196, 0.2)'
                  e.currentTarget.style.backgroundSize = '400% 400%'
                  e.currentTarget.style.filter = 'brightness(1.3) saturate(1.4) contrast(1.1)'
                  e.currentTarget.style.zIndex = '10'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) rotateX(0deg) rotateY(0deg) scale(1)'
                  e.currentTarget.style.boxShadow = 'var(--shadow-strong), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                  e.currentTarget.style.backgroundSize = '300% 300%'
                  e.currentTarget.style.filter = 'brightness(1) saturate(1) contrast(1)'
                  e.currentTarget.style.zIndex = '1'
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