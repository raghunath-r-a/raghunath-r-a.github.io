import React from "react"
import { Link } from "gatsby"
import * as styles from "./Layout.module.css"

const Layout = ({ children, isHomePage = false }) => {
  return (
    <div>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Link to="/" className={styles.logo}>
            Raghunath Reddy
          </Link>
          <div className={styles.navLinks}>
            <Link to="/" className={styles.navLink}>Home</Link>
            <Link to="/about" className={styles.navLink}>About</Link>
            <Link to="/blog" className={styles.navLink}>Blog</Link>
            <Link to="/tags" className={styles.navLink}>Tags</Link>
          </div>
        </nav>
      </header>
      
      <main className={`${styles.main} ${isHomePage ? styles.homepage : styles.notHomepage}`}>
        {children}
      </main>
      
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p className={styles.footerText}>
            &copy; 2025 Raghunath Reddy
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Layout