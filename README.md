# Raghunath Reddy - Personal Portfolio & Blog

A modern personal portfolio and blog built with Gatsby and deployed automatically to GitHub Pages.

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Development

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run develop
```

Your site will be available at `http://localhost:8000`

### Build

To build the site for production:
```bash
npm run build
```

## 📁 Project Structure

```
├── src/
│   ├── pages/          # Page components
│   ├── posts/          # Blog posts (Markdown)
│   ├── components/     # Reusable components
│   └── templates/      # Page templates
├── .github/
│   └── workflows/      # GitHub Actions workflows
├── gatsby-config.js    # Gatsby configuration
├── gatsby-node.js      # Gatsby Node APIs
└── package.json
```

## 📝 Adding Blog Posts

Create new Markdown files in `src/posts/` with the following frontmatter:

```markdown
---
title: "Your Post Title"
author: "Raghunath Reddy"
date: "YYYY-MM-DD"
tags: ["tag1", "tag2"]
published: true
---

Your content here...
```

## 🚀 Deployment

The site automatically deploys to GitHub Pages when you push to the `main` branch using GitHub Actions.

### Manual Setup Required

1. Go to your repository settings
2. Navigate to Pages → Source
3. Select "GitHub Actions" as the source
4. The workflow will handle the rest!

## 🛠 Technologies Used

- **Gatsby** - Static site generator
- **React** - UI framework
- **GitHub Actions** - CI/CD
- **GitHub Pages** - Hosting

## 📧 Contact

Raghunath Reddy - Technical Content Writer, Editor, and Product Marketer
