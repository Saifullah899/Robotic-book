# Quickstart Guide: Physical AI & Humanoid Robotics Textbook

**Feature**: textbook-generation
**Date**: 2025-12-09
**Status**: Completed

## Overview

This quickstart guide provides the essential steps to set up, develop, and deploy the Physical AI & Humanoid Robotics textbook using Docusaurus and GitHub Pages.

## Prerequisites

- Node.js LTS (18.x or higher)
- npm or pnpm package manager
- Git
- GitHub account

## Setup Instructions

### 1. Clone or Create Repository

```bash
# If repository exists:
git clone <repository-url>
cd <repository-name>

# If creating new repository:
mkdir physical-ai-textbook
cd physical-ai-textbook
git init
```

### 2. Install Docusaurus

```bash
npm init docusaurus@latest website classic
cd website
```

### 3. Configure Docusaurus

Replace the default `docusaurus.config.js` with the textbook configuration:

```js
// docusaurus.config.js
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Physical AI & Humanoid Robotics – Essentials',
  tagline: 'A comprehensive textbook on Physical AI and Humanoid Robotics',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-username.github.io',
  // Set the /<base>/ pathname under which your site is served
  // For GitHub pages deployment, it's often '/<project-name>/'
  baseUrl: '/physical-ai-textbook/',

  // GitHub pages deployment config.
  organizationName: 'your-username', // Usually your GitHub org/user name.
  projectName: 'physical-ai-textbook', // Usually your repo name.
  deploymentBranch: 'gh-pages', // Branch that GitHub Pages will deploy from.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/your-username/physical-ai-textbook/tree/main/website/',
        },
        blog: false, // Disable blog for textbook
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Physical AI Textbook',
        logo: {
          alt: 'Physical AI & Humanoid Robotics Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'textbookSidebar',
            position: 'left',
            label: 'Textbook',
          },
          {
            href: 'https://github.com/your-username/physical-ai-textbook',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Content',
            items: [
              {
                label: 'Introduction',
                to: '/docs/chapter-1-introduction/chapter',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/your-username/physical-ai-textbook',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Physical AI & Humanoid Robotics – Essentials. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
```

### 4. Create Sidebar Configuration

Create `sidebars.js`:

```js
// sidebars.js
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  textbookSidebar: [
    {
      type: 'category',
      label: 'Physical AI & Humanoid Robotics',
      items: [
        'chapter-1-introduction/chapter',
        'chapter-2-foundations/chapter',
        'chapter-3-human-design/chapter',
        'chapter-4-perception/chapter',
        'chapter-5-ai-control/chapter',
        'chapter-6-locomotion/chapter',
      ],
    },
  ],
};

export default sidebars;
```

### 5. Create Chapter Directories

```bash
mkdir -p docs/chapter-1-introduction
mkdir -p docs/chapter-2-foundations
mkdir -p docs/chapter-3-human-design
mkdir -p docs/chapter-4-perception
mkdir -p docs/chapter-5-ai-control
mkdir -p docs/chapter-6-locomotion

mkdir -p static/img/chapter-1
mkdir -p static/img/chapter-2
mkdir -p static/img/chapter-3
mkdir -p static/img/chapter-4
mkdir -p static/img/chapter-5
mkdir -p static/img/chapter-6
```

### 6. Add First Chapter Content

Create `docs/chapter-1-introduction/chapter.md`:

```md
---
id: chapter
title: Introduction to Physical AI
description: Definition of Physical AI, difference from virtual AI, and real-world applications
sidebar_label: Introduction to Physical AI
sidebar_position: 1
keywords: [Physical AI, embodied AI, robotics, AI applications]
learning_objectives:
  - Define Physical AI and distinguish it from virtual AI
  - Explain the key differences between embodied and virtual AI
  - Identify real-world applications of Physical AI
word_count: 1200
---

# Introduction to Physical AI

## Learning Objectives
After completing this chapter, you will be able to:
- Define Physical AI and distinguish it from virtual AI
- Explain the key differences between embodied and virtual AI
- Identify real-world applications of Physical AI

## What is Physical AI?

Physical AI refers to artificial intelligence systems that interact with the physical world through sensors and actuators. Unlike traditional virtual AI that operates purely in digital spaces, Physical AI exists in the real world and must navigate the complexities of physical laws, materials, and environments.

### Key Characteristics of Physical AI

- **Embodiment**: Physical form that interacts with the environment
- **Real-time processing**: Must respond to physical changes quickly
- **Uncertainty management**: Deals with unpredictable physical environments
- **Safety considerations**: Physical interactions must be safe

## Physical AI vs Virtual AI

Traditional AI systems like chatbots, recommendation engines, and image classifiers operate in virtual environments where:

- The environment is controlled and predictable
- Actions have no physical consequences
- State is fully observable
- Time constraints are flexible

In contrast, Physical AI systems must deal with:

- Partial observability of the environment
- Physical constraints (physics, materials, energy)
- Safety-critical operations
- Real-time response requirements

## Real-World Applications

### Manufacturing
Physical AI powers robotic assembly lines, quality control systems, and automated warehouses. These systems must handle delicate objects, work alongside humans safely, and adapt to changing conditions.

### Healthcare
Robotic surgery systems, rehabilitation robots, and assistive devices represent Physical AI applications that must operate with extreme precision and safety.

### Education
Educational robots and interactive learning systems provide hands-on experiences that help students understand complex concepts through physical interaction.

## Summary

Physical AI represents a fundamental shift from virtual to embodied intelligence, requiring new approaches to AI development that account for physical reality. As we continue through this textbook, we'll explore the technical foundations that make Physical AI possible.

## References

1. [Example APA citation for further reading]
```

## Development Workflow

### Local Development

```bash
cd website
npm start
```

This command starts a local development server and opens the website in your browser. Most changes are reflected live without restarting the server.

### Build for Production

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static hosting service.

### Deployment to GitHub Pages

```bash
GIT_USER=<Your GitHub username> npm run deploy
```

This command builds the website and pushes the static files to the `gh-pages` branch for GitHub Pages hosting.

## Content Creation Guidelines

### Writing Chapters

1. Follow the frontmatter template with required fields
2. Maintain 800-1500 words per chapter
3. Include 3-5 learning objectives
4. Use clear headings and subheadings
5. Add bullet points for key concepts
6. Include APA-formatted references

### Adding Diagrams

1. Create SVG diagrams for lightweight, scalable images
2. Place SVG files in the appropriate chapter directory under `static/img/`
3. Reference diagrams using standard Markdown syntax
4. Always include alternative text for accessibility

### Quality Checks

Before publishing each chapter:

- [ ] Word count is between 800-1500
- [ ] Learning objectives are clear and achievable
- [ ] Technical content is accurate
- [ ] All links work correctly
- [ ] Diagrams display properly
- [ ] References are in APA format
- [ ] Content follows educational progression