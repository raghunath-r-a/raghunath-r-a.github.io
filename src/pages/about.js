import React from "react"
import Layout from "../components/Layout"

const AboutPage = () => {
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

  const contentGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '4rem',
    alignItems: 'center'
  }

  const textContentStyle = {
    fontSize: '1.1rem',
    lineHeight: '1.8',
    color: '#555'
  }

  const highlightStyle = {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: '600'
  }

  const skillsGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
    marginTop: '3rem'
  }

  const skillCardStyle = {
    background: 'linear-gradient(145deg, #f8f9ff 0%, #fff 100%)',
    borderRadius: '15px',
    padding: '2rem',
    boxShadow: '0 10px 30px rgba(102, 126, 234, 0.1)',
    border: '1px solid rgba(102, 126, 234, 0.1)',
    textAlign: 'center',
    transition: 'transform 0.3s ease'
  }

  const skillIconStyle = {
    width: '60px',
    height: '60px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    borderRadius: '50%',
    margin: '0 auto 1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.5rem',
    color: 'white'
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

  const skills = [
    {
      icon: "✍️",
      title: "Content Writing",
      description: "Crafting compelling technical content that bridges complex concepts with clear communication."
    },
    {
      icon: "📝",
      title: "Editorial Excellence", 
      description: "Polishing content to perfection with keen attention to detail and storytelling prowess."
    },
    {
      icon: "📈",
      title: "Product Marketing",
      description: "Strategic marketing approaches that drive engagement and convert audiences into advocates."
    },
    {
      icon: "🔒",
      title: "Security Expertise",
      description: "Deep understanding of cybersecurity, identity management, and data privacy landscapes."
    }
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section style={heroStyle}>
        <div style={containerStyle}>
          <h1 style={titleStyle} className="fade-in-up">About Me</h1>
          <p style={subtitleStyle} className="fade-in-up">
            Passionate storyteller bridging the gap between technology and human understanding
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
                  In the ever-evolving landscape of technology, I've found my calling as a 
                  <span style={highlightStyle}> bridge between complex innovations and clear communication</span>. 
                  With years of experience in technical content creation, I specialize in transforming 
                  intricate concepts into compelling narratives that resonate with diverse audiences.
                </p>
                <p style={{marginBottom: '1.5rem'}}>
                  My journey has taken me from deep dives into cybersecurity frameworks to crafting 
                  <span style={highlightStyle}> thought leadership pieces for Forbes</span>, always with 
                  the goal of making technology accessible and actionable for business leaders and 
                  technical professionals alike.
                </p>
                <p>
                  Whether I'm authoring eBooks on data privacy, developing product marketing strategies, 
                  or editing complex technical documentation, I bring a unique blend of 
                  <span style={highlightStyle}> technical expertise and creative storytelling</span> 
                  to every project.
                </p>
              </div>
            </div>
            
            <div className="fade-in-up" style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: '20px',
              padding: '3rem',
              color: 'white',
              textAlign: 'center'
            }}>
              <h3 style={{fontSize: '1.8rem', marginBottom: '1.5rem', fontFamily: 'Playfair Display, serif'}}>
                Let's Connect
              </h3>
              <p style={{marginBottom: '2rem', opacity: 0.9}}>
                Ready to transform your content strategy and tell your story in a way that truly resonates?
              </p>
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '1rem',
                flexWrap: 'wrap'
              }}>
                <a 
                  href="mailto:contact@raghunathreddy.com"
                  style={{
                    padding: '0.8rem 1.5rem',
                    background: 'rgba(255, 255, 255, 0.2)',
                    border: '2px solid rgba(255, 255, 255, 0.3)',
                    borderRadius: '25px',
                    color: 'white',
                    textDecoration: 'none',
                    fontWeight: '500',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(255, 255, 255, 0.3)'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(255, 255, 255, 0.2)'
                  }}
                >
                  📧 Email Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section style={{...sectionStyle, background: '#f8f9ff'}}>
        <div style={containerStyle}>
          <h2 style={sectionTitleStyle} className="fade-in-up">What I Do Best</h2>
          
          <div style={skillsGridStyle}>
            {skills.map((skill, index) => (
              <div 
                key={index}
                style={skillCardStyle}
                className="fade-in-up"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <div style={skillIconStyle}>{skill.icon}</div>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  marginBottom: '1rem',
                  color: '#333',
                  fontFamily: 'Playfair Display, serif'
                }}>
                  {skill.title}
                </h3>
                <p style={{color: '#666', lineHeight: '1.6'}}>
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