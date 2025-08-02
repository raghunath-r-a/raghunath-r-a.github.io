import React from "react"
import Layout from "../components/Layout"

const AboutPage = () => {
  const heroStyle = {
    background: 'linear-gradient(135deg, var(--color-secondary) 0%, var(--color-primary) 100%)',
    padding: '8rem 0 6rem',
    textAlign: 'center',
    color: 'var(--color-text-primary)'
  }

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem'
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
    padding: '6rem 0',
    background: 'var(--color-bg-primary)'
  }

  const contentGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '4rem',
    alignItems: 'center'
  }

  const textContentStyle = {
    fontSize: 'var(--font-size-lg)',
    lineHeight: 'var(--line-height-loose)',
    color: 'var(--color-text-secondary)',
    fontFamily: 'var(--font-sans)'
  }

  const highlightStyle = {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: '600'
  }

  const skillsGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem',
    marginTop: '3rem',
    alignItems: 'stretch'
  }

  const skillCardStyle = {
    background: 'var(--color-bg-card)',
    borderRadius: '15px',
    padding: '2rem',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
    border: '1px solid rgba(6, 182, 212, 0.2)',
    textAlign: 'center',
    transition: 'transform 0.3s ease',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  }

  const skillIconStyle = {
    width: '60px',
    height: '60px',
    background: 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-hover) 100%)',
    borderRadius: '50%',
    margin: '0 auto 1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.9rem',
    fontWeight: '700',
    color: '#0f172a',
    fontFamily: 'var(--font-sans)'
  }

  const sectionTitleStyle = {
    fontSize: 'clamp(var(--font-size-3xl), 5vw, var(--font-size-4xl))',
    fontFamily: 'var(--font-serif)',
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: '3rem',
    background: 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-hover) 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  }

  const skills = [
    {
      title: "Program Management",
      description: "Leading cross-functional cybersecurity initiatives with strategic planning and execution excellence."
    },
    {
      title: "Content Management", 
      description: "Developing and managing security documentation, policies, and communication strategies for enterprise environments."
    },
    {
      title: "CyberSecurity Programs",
      description: "Supporting cybersecurity initiatives through strategic content development and cross-functional collaboration."
    },
    {
      title: "Business Presentations",
      description: "PowerPoint skills for creating compelling business presentations and strategic communications."
    },
    {
      title: "Design & Prototyping",
      description: "Intermediate Figma skills for creating user interfaces, prototypes, and design documentation."
    },
    {
      title: "AI-Assisted Development",
      description: "Leveraging AI tools for coding, LangChain development, and Python scripting automation."
    }
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section style={heroStyle}>
        <div style={containerStyle}>
          <h1 style={titleStyle} className="fade-in-up">About Me</h1>
          <p style={subtitleStyle} className="fade-in-up">
            Leading cybersecurity initiatives through strategic content management and program excellence
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section style={sectionStyle}>
        <div style={containerStyle}>
          <div style={contentGridStyle}>
            <div className="fade-in-up">
              <h2 style={{...sectionTitleStyle, textAlign: 'left', marginBottom: '2rem'}}>
                My Story
              </h2>
              <div style={textContentStyle}>
                <p style={{marginBottom: '1.5rem'}}>
                  Currently serving as a Program Manager in the 
                  <span style={highlightStyle}> CyberSecurity division of a leading Healthcare Company</span>, 
                  I focus on strategic content management initiatives that strengthen our security posture. 
                  My role bridges technical cybersecurity expertise with effective communication strategies.
                </p>
                <p style={{marginBottom: '1.5rem'}}>
                  In cybersecurity, protecting sensitive data and critical infrastructure 
                  requires more than just technical solutions—it demands 
                  <span style={highlightStyle}> clear, actionable communication</span> across all organizational levels. 
                  I develop and manage content strategies that ensure security protocols are understood, 
                  implemented, and maintained effectively.
                </p>
                <p>
                  My diverse background spans technical writing, business presentations, and modern development tools. 
                  From creating compelling PowerPoint presentations to prototyping with Figma, and leveraging 
                  <span style={highlightStyle}> AI-assisted development tools</span> including LangChain and Python scripting, 
                  I bring a modern, technology-forward approach to cybersecurity program management that bridges 
                  technical excellence with clear business communication.
                </p>
              </div>
            </div>
            
            <div className="fade-in-up" style={{
              background: 'linear-gradient(135deg, var(--color-secondary) 0%, var(--color-primary) 100%)',
              borderRadius: '20px',
              padding: '3rem',
              color: 'var(--color-text-primary)',
              textAlign: 'center',
              border: '2px solid var(--color-accent)'
            }}>
              <h3 style={{
                fontSize: 'var(--font-size-2xl)', 
                marginBottom: '1.5rem', 
                fontFamily: 'var(--font-serif)',
                fontWeight: '600'
              }}>
                Let's Connect
              </h3>
              <p style={{
                marginBottom: '2rem', 
                opacity: 0.95,
                fontSize: 'var(--font-size-lg)',
                lineHeight: 'var(--line-height-relaxed)',
                fontFamily: 'var(--font-sans)'
              }}>
                Ready to discuss cybersecurity program management or enterprise security initiatives?
              </p>
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '1rem',
                flexWrap: 'wrap'
              }}>
                <a 
                  href="mailto:raghunath-r-a@getburner.email"
                  style={{
                    padding: '1rem 2rem',
                    background: 'rgba(6, 182, 212, 0.15)',
                    border: '2px solid var(--color-accent)',
                    borderRadius: '25px',
                    color: 'var(--color-accent)',
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: 'var(--font-size-base)',
                    fontFamily: 'var(--font-sans)',
                    transition: 'all 0.3s ease',
                    backdropFilter: 'blur(10px)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(6, 182, 212, 0.25)'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(6, 182, 212, 0.15)'
                  }}
                >
                  Email Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section style={{...sectionStyle, background: 'var(--color-bg-secondary)'}}>
        <div style={containerStyle}>
          <h2 style={sectionTitleStyle} className="fade-in-up">What I Do Best</h2>
          
          <div style={skillsGridStyle} className="mobile-single-column">
            {skills.map((skill, index) => (
              <div 
                key={index}
                style={skillCardStyle}
                className="fade-in-up mobile-reduced-padding"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <h3 style={{
                  fontSize: 'var(--font-size-xl)',
                  fontWeight: '600',
                  marginBottom: '1rem',
                  color: 'var(--color-text-primary)',
                  fontFamily: 'var(--font-serif)'
                }}>
                  {skill.title}
                </h3>
                <p style={{
                  color: 'var(--color-text-secondary)', 
                  lineHeight: 'var(--line-height-relaxed)',
                  fontSize: 'var(--font-size-base)',
                  fontFamily: 'var(--font-sans)'
                }}>
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default AboutPage

export const Head = () => (
  <>
    <title>About Me - Raghunath Reddy</title>
    <meta name="description" content="Learn more about Raghunath Reddy" />
  </>
)