import React from "react"
import Layout from "../components/Layout"
import * as styles from "./about.module.css"

const AboutPage = () => {
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
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={`${styles.title} fade-in-up`}>About Me</h1>
          <p className={`${styles.subtitle} fade-in-up`}>
            Sr. Cybersecurity Program Manager driving healthcare security through strategic content management and cross-functional collaboration
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.contentGrid}>
            <div className={`${styles.textContentContainer} fade-in-up`}>
              <h2 className={styles.sectionTitle} style={{textAlign: 'left', marginBottom: '1.5rem'}}>
                My Story
              </h2>
              <div className={styles.textContent}>
                <p className={styles.paragraph}>
                  Currently serving as a <span className={styles.highlight}>Sr. Cybersecurity Program Manager</span> in the 
                  Office of the CISO at a US Healthcare Company with a Global Capability Center in Hyderabad, India. 
                  As an individual contributor, I oversee content management initiatives that strengthen our security posture 
                  through strategic communication and cross-functional collaboration.
                </p>
                <p className={styles.paragraph}>
                  My journey began in <span className={styles.highlight}>quality assurance</span> for life-saving gas detection devices, 
                  evolved through <span className={styles.highlight}>technical content creation at scale</span> (doubling blog traffic from 80K to 200K monthly users), 
                  and now focuses on cybersecurity program management. This unique path has equipped me with both technical depth 
                  and strategic communication expertise.
                </p>
                <p className={styles.paragraph}>
                  In cybersecurity, protecting sensitive healthcare data requires more than technical solutions—it demands 
                  <span className={styles.highlight}> clear, actionable communication</span> across all organizational levels. 
                  I develop content strategies that ensure security protocols are understood, implemented, and maintained effectively 
                  while supporting the broader Program Management Office objectives.
                </p>
                <p className={styles.paragraph}>
                  My toolkit spans business presentations, Figma for visual storytelling, and 
                  <span className={styles.highlight}> AI-assisted development</span> with Python and LangChain for automation proof-of-concepts. 
                  This modern, technology-forward approach bridges technical excellence with strategic business communication 
                  in the rapidly evolving cybersecurity landscape.
                </p>
              </div>
            </div>
            
            <div className={`${styles.connectCard} fade-in-up`}>
              <h3 className={styles.connectTitle}>
                Let's Connect
              </h3>
              <p className={styles.connectText}>
                Ready to discuss cybersecurity program management or enterprise security initiatives?
              </p>
              <div className={styles.connectLinks}>
                <a 
                  href="mailto:raghunath-r-a@getburner.email"
                  className={styles.emailButton}
                >
                  Email Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Skills Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={`${styles.sectionTitle} fade-in-up`}>What I Do Best</h2>
          
          <div className={`${styles.skillsGrid} mobile-single-column`}>
            {skills.map((skill, index) => (
              <div 
                key={index}
                className={`${styles.skillCard} fade-in-up mobile-reduced-padding`}
              >
                <h3 className={styles.skillTitle}>
                  {skill.title}
                </h3>
                <p className={styles.skillDescription}>
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