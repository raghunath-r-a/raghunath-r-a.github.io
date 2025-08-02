import React from "react"
import { Link } from "gatsby"

const Layout = ({ children, isHomePage = false }) => {
  const headerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
    padding: '1rem 0',
    transition: 'all 0.3s ease'
  }

  const navStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }

  const logoStyle = {
    fontSize: '1.5rem',
    fontWeight: '700',
    fontFamily: 'Playfair Display, serif',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textDecoration: 'none'
  }

  const navLinksStyle = {
    display: 'flex',
    gap: '2rem',
    alignItems: 'center'
  }

  const navLinkStyle = {
    textDecoration: 'none',
    color: '#333',
    fontWeight: '500',
    fontSize: '0.95rem',
    position: 'relative',
    transition: 'color 0.3s ease',
    ':hover': {
      color: '#667eea'
    }
  }

  const mainStyle = {
    minHeight: '100vh',
    paddingTop: isHomePage ? '0' : '100px'
  }

  const footerStyle = {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    padding: '3rem 0 2rem',
    textAlign: 'center',
    borderTop: '1px solid rgba(255, 255, 255, 0.2)',
    color: 'rgba(255, 255, 255, 0.8)'
  }

  const footerContentStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem'
  }

  return (
    <div>
      <header style={headerStyle}>
        <nav style={navStyle}>
          <Link to="/" style={logoStyle}>
            Raghunath Reddy
          </Link>
          <div style={navLinksStyle}>
            <Link to="/" style={navLinkStyle}>Home</Link>
            <Link to="/about" style={navLinkStyle}>About</Link>
            <Link to="/blog" style={navLinkStyle}>Blog</Link>
          </div>
        </nav>
      </header>
      
      <main style={mainStyle}>{children}</main>
      
      <footer style={footerStyle}>
        <div style={footerContentStyle}>
          <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
            Crafting stories and building digital experiences
          </p>
          <p style={{ fontSize: '0.8rem', opacity: 0.7 }}>
            &copy; 2024 Raghunath Reddy. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Layout