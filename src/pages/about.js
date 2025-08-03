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
      title: "Cybersecurity Program Management",
      description: "Leading strategic content initiatives within Office of the CISO, supporting Program Management Office objectives in healthcare security."
    },
    {
      title: "Content Strategy & Management", 
      description: "Proven track record of scaling content impact—doubled blog traffic from 80K to 200K monthly users through strategic content development."
    },
    {
      title: "Cross-Functional Collaboration",
      description: "Individual contributor role requiring coordination across cybersecurity teams, technical stakeholders, and business leadership."
    },
    {
      title: "Business Communication",
      description: "Expert-level PowerPoint skills for executive presentations, strategic communications, and stakeholder alignment in complex healthcare environments."
    },
    {
      title: "Visual Design & Storytelling",
      description: "Figma proficiency for creating compelling visual narratives, comic strips from AI-generated images, and design documentation."
    },
    {
      title: "AI-Assisted Development",
      description: "Developing automation proof-of-concepts using Python and LangChain, positioning for the evolving AI landscape in cybersecurity."
    }
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section style={heroStyle}>
        <div style={containerStyle}>
          <h1 style={titleStyle} className="fade-in-up">About Me</h1>
          <p style={subtitleStyle} className="fade-in-up">
            Sr. Cybersecurity Program Manager driving healthcare security through strategic content management and cross-functional collaboration
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
                  Currently serving as a <span style={highlightStyle}>Sr. Cybersecurity Program Manager</span> in the 
                  Office of the CISO at a US Healthcare Company with a Global Capability Center in Hyderabad, India. 
                  As an individual contributor, I oversee content management initiatives that strengthen our security posture 
                  through strategic communication and cross-functional collaboration.
                </p>
                <p style={{marginBottom: '1.5rem'}}>
                  My journey began in <span style={highlightStyle}>quality assurance</span> for life-saving gas detection devices, 
                  evolved through <span style={highlightStyle}>technical content creation at scale</span> (doubling blog traffic from 80K to 200K monthly users), 
                  and now focuses on cybersecurity program management. This unique path has equipped me with both technical depth 
                  and strategic communication expertise.
                </p>
                <p style={{marginBottom: '1.5rem'}}>
                  In cybersecurity, protecting sensitive healthcare data requires more than technical solutions—it demands 
                  <span style={highlightStyle}>clear, actionable communication</span> across all organizational levels. 
                  I develop content strategies that ensure security protocols are understood, implemented, and maintained effectively 
                  while supporting the broader Program Management Office objectives.
                </p>
                <p>
                  My toolkit spans business presentations, Figma for visual storytelling, and 
                  <span style={highlightStyle}>AI-assisted development</span> with Python and LangChain for automation proof-of-concepts. 
                  This modern, technology-forward approach bridges technical excellence with strategic business communication 
                  in the rapidly evolving cybersecurity landscape.
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

      {/* Experience Section */}
      <section style={{...sectionStyle, background: 'var(--color-bg-secondary)'}}>
        <div style={containerStyle}>
          <h2 style={sectionTitleStyle} className="fade-in-up">Professional Journey</h2>
          
          <div style={{
            display: 'grid',
            gap: '2rem',
            marginBottom: '4rem'
          }}>
            <div style={{
              background: 'var(--color-bg-card)',
              borderRadius: '15px',
              padding: '2rem',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
              border: '1px solid rgba(6, 182, 212, 0.2)'
            }} className="fade-in-up">
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '1rem',
                flexWrap: 'wrap',
                gap: '1rem'
              }}>
                <div>
                  <h3 style={{
                    fontSize: 'var(--font-size-xl)',
                    fontWeight: '600',
                    color: 'var(--color-text-primary)',
                    marginBottom: '0.5rem',
                    fontFamily: 'var(--font-serif)'
                  }}>
                    Sr. Cybersecurity Program Manager
                  </h3>
                  <p style={{
                    color: 'var(--color-accent)',
                    fontWeight: '600',
                    fontSize: 'var(--font-size-base)',
                    fontFamily: 'var(--font-sans)'
                  }}>
                    US Healthcare Company • Global Capability Center, Hyderabad
                  </p>
                </div>
                <span style={{
                  background: 'rgba(6, 182, 212, 0.15)',
                  color: 'var(--color-accent)',
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  fontSize: 'var(--font-size-sm)',
                  fontWeight: '600',
                  fontFamily: 'var(--font-sans)'
                }}>
                  Current
                </span>
              </div>
              <ul style={{
                color: 'var(--color-text-secondary)',
                lineHeight: 'var(--line-height-relaxed)',
                fontSize: 'var(--font-size-base)',
                fontFamily: 'var(--font-sans)',
                paddingLeft: '1.5rem'
              }}>
                <li style={{marginBottom: '0.5rem'}}>Individual contributor role overseeing content management within Office of the CISO</li>
                <li style={{marginBottom: '0.5rem'}}>Supporting Program Management Office objectives through strategic content initiatives</li>
                <li>Cross-functional collaboration across cybersecurity teams and business stakeholders</li>
              </ul>
            </div>

            <div style={{
              background: 'var(--color-bg-card)',
              borderRadius: '15px',
              padding: '2rem',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
              border: '1px solid rgba(6, 182, 212, 0.2)'
            }} className="fade-in-up">
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '1rem',
                flexWrap: 'wrap',
                gap: '1rem'
              }}>
                <div>
                  <h3 style={{
                    fontSize: 'var(--font-size-xl)',
                    fontWeight: '600',
                    color: 'var(--color-text-primary)',
                    marginBottom: '0.5rem',
                    fontFamily: 'var(--font-serif)'
                  }}>
                    Sr. Content Engineer
                  </h3>
                  <p style={{
                    color: 'var(--color-accent)',
                    fontWeight: '600',
                    fontSize: 'var(--font-size-base)',
                    fontFamily: 'var(--font-sans)'
                  }}>
                    CIAM Company • Hyderabad
                  </p>
                </div>
              </div>
              <ul style={{
                color: 'var(--color-text-secondary)',
                lineHeight: 'var(--line-height-relaxed)',
                fontSize: 'var(--font-size-base)',
                fontFamily: 'var(--font-sans)',
                paddingLeft: '1.5rem'
              }}>
                <li style={{marginBottom: '0.5rem'}}>Doubled blog traffic from 80K to 200K monthly users in 6 months</li>
                <li style={{marginBottom: '0.5rem'}}>Created high-quality developer tutorials and technical explainers as part of DevRel initiative</li>
                <li style={{marginBottom: '0.5rem'}}>Collaborated with senior developers on technical content validation</li>
                <li style={{marginBottom: '0.5rem'}}>Authored thought leadership content and e-books on behalf of CTO</li>
                <li>Managed open-source blog on GitHub, producing website content, product pages, and UI text</li>
              </ul>
            </div>

            <div style={{
              background: 'var(--color-bg-card)',
              borderRadius: '15px',
              padding: '2rem',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
              border: '1px solid rgba(6, 182, 212, 0.2)'
            }} className="fade-in-up">
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '1rem',
                flexWrap: 'wrap',
                gap: '1rem'
              }}>
                <div>
                  <h3 style={{
                    fontSize: 'var(--font-size-xl)',
                    fontWeight: '600',
                    color: 'var(--color-text-primary)',
                    marginBottom: '0.5rem',
                    fontFamily: 'var(--font-serif)'
                  }}>
                    Sr. Executive - Content
                  </h3>
                  <p style={{
                    color: 'var(--color-accent)',
                    fontWeight: '600',
                    fontSize: 'var(--font-size-base)',
                    fontFamily: 'var(--font-sans)'
                  }}>
                    IT Services Company Marketing BU • NOIDA
                  </p>
                </div>
              </div>
              <ul style={{
                color: 'var(--color-text-secondary)',
                lineHeight: 'var(--line-height-relaxed)',
                fontSize: 'var(--font-size-base)',
                fontFamily: 'var(--font-sans)',
                paddingLeft: '1.5rem'
              }}>
                <li style={{marginBottom: '0.5rem'}}>Produced technical content for clients across US, UK, and Australia</li>
                <li style={{marginBottom: '0.5rem'}}>Created case studies, blog posts, and thought leadership articles across IT domains</li>
                <li>Edited client presentations and developer community contributions</li>
              </ul>
            </div>

            <div style={{
              background: 'var(--color-bg-card)',
              borderRadius: '15px',
              padding: '2rem',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
              border: '1px solid rgba(6, 182, 212, 0.2)'
            }} className="fade-in-up">
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '1rem',
                flexWrap: 'wrap',
                gap: '1rem'
              }}>
                <div>
                  <h3 style={{
                    fontSize: 'var(--font-size-xl)',
                    fontWeight: '600',
                    color: 'var(--color-text-primary)',
                    marginBottom: '0.5rem',
                    fontFamily: 'var(--font-serif)'
                  }}>
                    Associate QA Analyst
                  </h3>
                  <p style={{
                    color: 'var(--color-accent)',
                    fontWeight: '600',
                    fontSize: 'var(--font-size-base)',
                    fontFamily: 'var(--font-sans)'
                  }}>
                    IT Consulting and Services Company
                  </p>
                </div>
              </div>
              <ul style={{
                color: 'var(--color-text-secondary)',
                lineHeight: 'var(--line-height-relaxed)',
                fontSize: 'var(--font-size-base)',
                fontFamily: 'var(--font-sans)',
                paddingLeft: '1.5rem'
              }}>
                <li style={{marginBottom: '0.5rem'}}>Manual firmware testing of life-saving gas detection devices for mining, construction, and oil fields</li>
                <li style={{marginBottom: '0.5rem'}}>Wrote comprehensive test cases based on technical requirements</li>
                <li>Conducted exploratory testing to identify unconventional bugs and edge cases</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section style={sectionStyle}>
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
    <meta name="description" content="Sr. Cybersecurity Program Manager with proven track record in content strategy, doubled blog traffic from 80K to 200K users, B.Tech Computer Science" />
  </>
)