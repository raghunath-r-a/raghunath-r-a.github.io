### Project Overview

This is a personal portfolio and blog built with Gatsby. It is designed to be a modern, professional, and readable website that showcases the author's work and thoughts. The site is deployed automatically to GitHub Pages using GitHub Actions.

### Building and Running

To build and run the project locally, you will need to have Node.js (v18 or higher) and npm installed. Once you have cloned the repository, you can run the following commands:

```bash
npm install
npm run develop
```

This will start the development server and the site will be available at `http://localhost:8000`.

To build the site for production, you can run the following command:

```bash
npm run build
```

### Development Conventions

The project uses CSS modules for styling, which allows for a more organized and maintainable codebase. The site is designed to be responsive and accessible, and it uses the Inter font for a clean and modern look.

Blog posts are written in Markdown and are located in the `src/posts` directory. To create a new blog post, you will need to create a new Markdown file with the following frontmatter:

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