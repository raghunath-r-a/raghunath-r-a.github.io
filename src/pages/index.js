import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import * as styles from "./index.module.css";

const IndexPage = () => {
  const works = [
    {
      type: "Achievement",
      title: "Doubled Blog Traffic: 80K to 200K Monthly Users in 6 Months",
      url: "https://github.com/raghunath-r-a",
    },
    {
      type: "eBook",
      title: "Data Privacy: What Enterprises Need to Know?",
      url: "https://books2read.com/u/3k2eyK",
    },
    {
      type: "eBook",
      title: "Don't Ever Think About Passwords Again",
      url: "https://books2read.com/u/3J6YBA",
    },
    {
      type: "Forbes Article",
      title:
        "How Can Enterprises Fortify Digital Identity Amidst Rising AI Threats?",
      url: "https://www.forbes.com/sites/forbestechcouncil/2023/08/11/how-can-enterprises-fortify-digital-identity-amidst-rising-ai-threats/?sh=6d82ed7051f3",
    },
    {
      type: "Forbes Article",
      title: "The CTO's Role In Product Growth",
      url: "https://www.forbes.com/sites/forbestechcouncil/2022/06/22/the-ctos-role-in-product-growth/?sh=6bb42af21eed",
    },
    {
      type: "Technical Blog",
      title: "What is Risk-Based Authentication? And Why Should You Implement It?",
      url: "https://www.loginradius.com/blog/engineering/risk-based-authentication/",
    },
  ];

  return (
    <Layout isHomePage={true}>
      <section className={styles.hero}>
        <h1 className={styles.title}>Raghunath Reddy</h1>
        <p className={styles.subtitle}>
          Sr. Cybersecurity Program Manager with a passion for building secure and
          resilient systems. I specialize in leading strategic content
          initiatives and fostering cross-functional collaboration to drive
          security awareness and adoption.
        </p>
        <Link to="/about" className={styles.ctaButton}>
          Learn More About Me
        </Link>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Featured Works</h2>
          <div className={styles.worksGrid}>
            {works.map((work, index) => (
              <div key={index} className={styles.card}>
                <p className={styles.cardType}>{work.type}</p>
                <h3 className={styles.workTitle}>{work.title}</h3>
                {work.type !== "Achievement" && (
                  <a
                    href={work.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.workLink}
                  >
                    Read More
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>Let's Connect</h2>
          <p className={styles.ctaSubtitle}>
            I'm always open to discussing new opportunities and collaborations.
            Feel free to reach out if you'd like to chat about cybersecurity,
            program management, or anything in between.
          </p>
          <Link to="/about" className={styles.ctaSecondaryButton}>
            Get In Touch
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <title>Raghunath Reddy - Sr. Cybersecurity Program Manager</title>
    <meta
      name="description"
      content="Sr. Cybersecurity Program Manager in healthcare, leading strategic content initiatives within Office of the CISO"
    />
  </>
);
