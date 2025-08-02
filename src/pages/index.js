import React from "react"
import Layout from "../components/Layout"

const IndexPage = () => {
  return (
    <Layout>
      <h1>Raghunath Reddy</h1>
      <p>Technical Content Writer, Editor, and Product Marketer</p>
      
      <section>
        <h2>Professional Works</h2>
        
        <div>
          <p><strong>eBook 1</strong>: <a href="https://books2read.com/u/3k2eyK" target="_blank" rel="noopener noreferrer">Data Privacy: What Enterprises Need to Know?</a></p>
          
          <p><strong>eBook 2</strong>: <a href="https://books2read.com/u/3J6YBA" target="_blank" rel="noopener noreferrer">Don't Ever Think About Passwords Again</a></p>
          
          <p><strong>Thought Leadership Article 1</strong>: <a href="https://www.forbes.com/sites/forbestechcouncil/2023/08/11/how-can-enterprises-fortify-digital-identity-amidst-rising-ai-threats/?sh=6d82ed7051f3" target="_blank" rel="noopener noreferrer">How Can Enterprises Fortify Digital Identity Amidst Rising AI Threats?</a></p>
          
          <p><strong>Thought Leadership Article 2</strong>: <a href="https://www.forbes.com/sites/forbestechcouncil/2022/06/22/the-ctos-role-in-product-growth/?sh=6bb42af21eed" target="_blank" rel="noopener noreferrer">The CTO's Role In Product Growth</a></p>
          
          <p><strong>Blog Post 1</strong>: <a href="https://www.loginradius.com/blog/engineering/risk-based-authentication/" target="_blank" rel="noopener noreferrer">What is Risk-Based Authentication? And Why Should You Implement It?</a></p>
          
          <p><strong>Blog Post 2</strong>: <a href="https://www.loginradius.com/blog/engineering/identity-impact-of-google-chrome-thirdparty-cookie-restrictions/" target="_blank" rel="noopener noreferrer">How Chrome's Third-Party Cookie Restrictions Affect User Authentication?</a></p>
        </div>
      </section>
      
      <section>
        <h2>Blog Posts</h2>
        <p>Coming soon - blog posts will be dynamically loaded here.</p>
      </section>
    </Layout>
  )
}

export default IndexPage

export const Head = () => (
  <>
    <title>Raghunath Reddy - Portfolio</title>
    <meta name="description" content="Technical Content Writer, Editor, and Product Marketer" />
  </>
)