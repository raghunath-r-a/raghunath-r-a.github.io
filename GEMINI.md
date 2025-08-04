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

The project uses CSS modules for styling, which allows for a more organized and maintainable codebase. The site is designed to be responsive and accessible, and it uses the Inter font for a clean and modern look. The project also utilizes TypeScript for development, providing type checking and improved code quality.

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

### Key Technologies/Plugins

The following Gatsby plugins are used in this project:
- `gatsby-plugin-image`: For optimized image handling.
- `gatsby-plugin-manifest`: To generate a web app manifest.
- `gatsby-plugin-sharp`: Provides image processing capabilities.
- `gatsby-source-filesystem`: Sourced data from the local filesystem.
- `gatsby-transformer-remark`: Transforms Markdown files into HTML.
- `gatsby-transformer-sharp`: Creates `ImageSharp` nodes from image files.

### Recent Improvements

- **Information Architecture & Navigation:**
  - Implemented dynamic tag pages and a main "All Tags" page.
  - Made tags on blog posts clickable, leading to their respective tag pages.
  - Added a "Tags" link to the main navigation.
- **Code Structure & Maintainability:**
  - Refactored inline styles to CSS Modules for `src/components/Layout.js`, `src/templates/blog-post.js`, `src/templates/tag-template.js`, `src/pages/tags.js`, and `src/pages/about.js`.
  - Adjusted the alignment of the "Let's Connect" section in the "About Me" page.
  - Cleaned up duplicated code in `src/pages/about.js`.
  - Ensured the copyright logo section in the footer is properly center-aligned.
  - Corrected missing spaces and text duplication in the "My Story" section of `src/pages/about.js`.
  - Corrected the title of the last skill in the "What I Do Best" section of `src/pages/about.js`.