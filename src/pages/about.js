import React from "react";
import Layout from "../components/Layout";
import * as styles from "./about.module.css";

const AboutPage = () => {
  return (
    <Layout>
      <section className={styles.about}>
        <div className={styles.container}>
          <h1 className={styles.title}>About Me</h1>
          <div className={styles.content}>
            <p>
              Currently serving as a Sr. Cybersecurity Program Manager in the
              Office of the CISO at a US Healthcare Company with a Global
              Capability Center in Hyderabad, India. As an individual
              contributor, I oversee content management initiatives that
              strengthen our security posture through strategic communication and
              cross-functional collaboration.
            </p>
            <p>
              My journey began in quality assurance for life-saving gas
              detection devices, evolved through technical content creation at
              scale (doubling blog traffic from 80K to 200K monthly users), and
              now focuses on cybersecurity program management. This unique path
              has equipped me with both technical depth and strategic
              communication expertise.
            </p>
            <p>
              In cybersecurity, protecting sensitive healthcare data requires
              more than technical solutions—it demands clear, actionable
              communication across all organizational levels. I develop content
              strategies that ensure security protocols are understood,
              implemented, and maintained effectively while supporting the
              broader Program Management Office objectives.
            </p>
            <p>
              My toolkit spans business presentations, Figma for visual
              storytelling, and AI-assisted development with Python and
              LangChain for automation proof-of-concepts. This modern,
              technology-forward approach bridges technical excellence with
              strategic business communication in the rapidly evolving
              cybersecurity landscape.
            </p>
			<p>
				I'm always open to discussing new opportunities and collaborations. Feel free to reach out to me at <a href="mailto:raghunath-r-a@getburner.email">raghunath-r-a@getburner.email</a>.
			</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;

export const Head = () => (
  <>
    <title>About Me - Raghunath Reddy</title>
    <meta
      name="description"
      content="Sr. Cybersecurity Program Manager with proven track record in content strategy, doubled blog traffic from 80K to 200K users, B.Tech Computer Science"
    />
  </>
);
