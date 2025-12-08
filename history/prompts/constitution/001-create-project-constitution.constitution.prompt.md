---
id: 001
title: Create Project Constitution
stage: constitution
date: 2025-12-09
surface: agent
model: claude-sonnet-4-5-20250929
feature: none
branch: master
user: user
command: /sp.constitution
labels: ["constitution", "setup", "project"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - .specify/memory/constitution.md
 - .specify/templates/plan-template.md
 - .specify/templates/spec-template.md
 - .specify/templates/tasks-template.md
tests:
 - null
---

## Prompt

/sp.constitution

Project Name:
Physical AI & Humanoid Robotics – Essentials

Purpose:
Create a short, clean, professional, AI-native textbook based on the subject of Physical AI & Humanoid Robotics, delivered through a modern Docusaurus interface and deployed on GitHub Pages. The textbook must serve as a fast, simple, and high-quality learning resource for beginners and intermediate learners. The writing workflow must use Spec-Kit Plus and Claude Code for structure, generation, and validation.

Core Objective:
Produce a concise, technically accurate, and visually clean textbook that explains the essentials of Physical AI and Humanoid Robotics using a free-tier, low-resource, and lightweight approach.

Scope:
The textbook will contain exactly 6 short, focused chapters:

1. Introduction to Physical AI
   - Definition and scope of Physical AI
   - Difference between virtual AI and embodied AI
   - Real-world applications

2. Foundations of Robotics: Systems, Structure & Core Mechanisms
   - Robot components (sensors, actuators, controllers)
   - Mechanical structures
   - Basic control logic

3. Human-Inspired Design Principles in Humanoid Robotics
   - Biomimicry in robotics
   - Anthropomorphic structure
   - Ergonomics and balance concepts

4. Perception Systems in Humanoids
   - Vision systems
   - Sensor fusion
   - Environmental awareness

5. AI, Deep Learning & Control Systems
   - Role of AI in robotics
   - Basic machine learning concepts
   - Decision-making and control loops

6. Humanoid Locomotion and Manipulation
   - Walking principles
   - Arm and hand movement
   - Stability and balance basics

Out of Scope:
- No chatbot system
- No RAG integration
- No external question-answering features
- No advanced simulations
- No heavy datasets
- No GPU-dependent processes

Core Principles:
- Simplicity
- Accuracy
- Minimalism
- Fast builds
- Free-tier architecture
- Clean and readable writing
- Logical structure
- Beginner-friendly explanations

Technical Requirements:
- Built using Docusaurus
- Deployed on GitHub Pages
- Written using Spec-Kit Plus structure
- Content generated and refined through Claude Code
- Lightweight assets only (SVG, small PNG)
- No heavy libraries or backend services
- Static-site only

Content Guidelines:
- Clear and concise explanations
- Short paragraphs
- Bullet points for key ideas
- Diagrams in SVG when needed
- Minimal jargon or explained terminology
- Consistent formatting across chapters

UI & Design Principles:
- Clean, modern Docusaurus default theme
- High contrast and readability
- Simple navigation bar
- Chapter-based sidebar
- No clutter or visual overload

Writing Style:
- Professional
- Technical but accessible
- Minimal fluff
- High-density, high-value content
- Structured in headings and subheadings

Research Approach:
- Research-concurrent writing (no full research phase required upfront)
- Information verified while writing
- Focus on widely accepted robotics and AI fundamentals

Validation & Quality Checks:
- Each chapter must meet:
  - Relevance to topic
  - Technical accuracy
  - Clear explanation
  - Concise length
- Terminology consistency check
- Final proofreading pass

Build & Deployment Requirements:
- Successful local build in Docusaurus
- Successful GitHub Pages deployment
- No broken links
- No missing assets
- Fast load time
- Mobile and desktop compatibility

Success Criteria:
- Clean Docusaurus-based textbook
- Exactly 6 complete chapters
- Simple, readable UI
- Successful GitHub Pages deployment
- No external runtime dependencies
- Free

## Response snapshot

Created the project constitution for the Physical AI & Humanoid Robotics textbook project, establishing core principles including simplicity, technical accuracy, accessibility, free-tier architecture, quality standards, and structured learning progression. Updated template files to align with the textbook project requirements.

## Outcome

- ✅ Impact: Created foundational project constitution and updated templates
- 🧪 Tests: No tests required for this change
- 📁 Files: Updated constitution.md and 3 template files
- 🔁 Next prompts: /sp.specify to create feature specifications
- 🧠 Reflection: The constitution successfully captures the project's core values and requirements

## Evaluation notes (flywheel)

- Failure modes observed: None
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): Begin creating feature specifications for textbook chapters