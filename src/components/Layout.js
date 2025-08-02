import React from "react"

const Layout = ({ children }) => {
  return (
    <div style={{ 
      maxWidth: "800px", 
      margin: "0 auto", 
      padding: "20px",
      fontFamily: "Arial, sans-serif",
      lineHeight: "1.6"
    }}>
      <header style={{ marginBottom: "40px" }}>
        <nav>
          <a href="/" style={{ marginRight: "20px", textDecoration: "none" }}>Home</a>
          <a href="/about" style={{ textDecoration: "none" }}>About</a>
        </nav>
      </header>
      
      <main>{children}</main>
      
      <footer style={{ 
        marginTop: "60px", 
        paddingTop: "20px", 
        borderTop: "1px solid #eee",
        textAlign: "center",
        color: "#666"
      }}>
        <p>&copy; 2024 Raghunath Reddy. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Layout