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

  const cardColors = ['card-1', 'card-2', 'card-3', 'card-4', 'card-5', 'card-6'];

  return (
    <Layout isHomePage={true}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={`${styles.heroContent} fade-in-up`}>
          <h1 className={styles.title}>Raghunath Reddy</h1>
          <p className={styles.subtitle}>
            Leading cybersecurity program management in healthcare through
            strategic content initiatives and cross-functional collaboration.
            <br />
            Sr. Cybersecurity Program Manager • Office of the CISO
          </p>
          <Link to="/about" className={styles.ctaButton}>
            Discover My Story
          </Link>
        </div>
      </section>

      {/* Works Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={`${styles.sectionTitle} fade-in-up`}>
            Featured Works
          </h2>

          <div className={`${styles.worksGrid} mobile-single-column`}>
            {works.map((work, index) => (
              <div
                key={index}
                className={`${styles.card} ${styles[cardColors[index % cardColors.length]]} fade-in-up mobile-reduced-padding`}
              >
                <div>
                  <div className={styles.cardType}>{work.type}</div>
                  <h3 className={styles.workTitle}>{work.title}</h3>
                </div>
                {work.type !== "Achievement" && (
                  <a
                    href={work.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.workLink}
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
      <section className={styles.ctaSection}>
        <div className={styles.ctaContainer}>
          <h2 className={styles.ctaTitle}>Let's Connect</h2>
          <p className={styles.ctaSubtitle}>
            Ready to discuss cybersecurity program management or enterprise
            security initiatives?
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
