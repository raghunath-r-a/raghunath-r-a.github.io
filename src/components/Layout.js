import React from "react"
import { Link } from "gatsby"

const Layout = ({ children, isHomePage = false }) => {
  const headerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    background: 'rgba(13, 10, 31, 0.8)',
    backdropFilter: 'blur(25px)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    padding: '1rem 0',
    transition: 'all 0.3s ease',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
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
    fontSize: 'var(--font-size-2xl)',
    fontWeight: '700',
    fontFamily: 'var(--font-serif)',
    background: 'var(--gradient-neon)',
    backgroundSize: '300% 300%',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textDecoration: 'none',
    lineHeight: 'var(--line-height-tight)',
    animation: 'gradient 4s ease infinite',
    textShadow: '0 0 20px rgba(255, 107, 107, 0.3)',
    transition: 'all 0.3s ease'
  }

  const navLinksStyle = {
    display: 'flex',
    gap: '2rem',
    alignItems: 'center',
    flexWrap: 'wrap'
  }

  const navLinkStyle = {
    textDecoration: 'none',
    color: 'var(--color-text-secondary)',
    fontWeight: '500',
    fontSize: 'var(--font-size-base)',
    fontFamily: 'var(--font-sans)',
    position: 'relative',
    transition: 'all 0.3s ease',
    padding: '0.75rem 1rem',
    borderRadius: '12px',
    lineHeight: 'var(--line-height-normal)',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: '50%',
      width: 0,
      height: '2px',
      background: 'var(--gradient-accent)',
      transition: 'all 0.3s ease',
      transform: 'translateX(-50%)'
    },
    '&:hover': {
      color: 'var(--color-text-electric)',
      background: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(10px)'
    }
  }

  const mainStyle = {
    minHeight: '100vh',
    paddingTop: isHomePage ? '0' : '100px'
  }

  const footerStyle = {
    background: 'var(--color-bg-secondary)',
    backdropFilter: 'blur(10px)',
    padding: '2rem 0 1rem',
    textAlign: 'center',
    borderTop: '1px solid rgba(6, 182, 212, 0.1)',
    color: 'var(--color-text-secondary)'
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
          <p style={{ 
            fontSize: 'var(--font-size-sm)', 
            opacity: 0.8,
            lineHeight: 'var(--line-height-normal)',
            fontFamily: 'var(--font-sans)'
          }}>
            &copy; 2025 Raghunath Reddy
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Layout