---
id: 002
title: Create Textbook Spec
stage: spec
date: 2025-12-09
surface: agent
model: claude-sonnet-4-5-20250929
feature: textbook-generation
branch: 001-textbook-generation
user: user
command: /sp.specify
labels: ["spec", "textbook", "physical-ai"]
links:
  spec: specs/001-textbook-generation/spec.md
  ticket: null
  adr: null
  pr: null
files:
 - specs/001-textbook-generation/spec.md
 - specs/001-textbook-generation/checklists/requirements.md
tests:
 - null
---

## Prompt

/sp.specify

Feature:
textbook-generation

Objective:
Define a complete, unambiguous specification for building an AI-native textbook on Physical AI & Humanoid Robotics using a modern, static, free-tier architecture. The system must produce a clean, professional, deployable textbook — with no chatbot, no RAG backend, and no external AI runtime dependencies.

Primary Goal:
Create a 6-chapter AI-native textbook using Docusaurus, written through Spec-Kit Plus and Claude Code, and deployed to GitHub Pages.

────────────────────────────────────
BOOK STRUCTURE (MANDATORY)

The textbook must contain exactly 6 chapters:

1. Introduction to Physical AI
   - Definition of Physical AI
   - Difference: Physical AI vs Virtual AI
   - Real-world use cases (manufacturing, healthcare, education)

2. Foundations of Robotics: Systems, Structure & Core Mechanisms
   - Core robot components (Sensors, Actuators, Controller)
   - Structural types (wheeled, bipedal, arm-based)
   - Open-loop vs closed-loop control

3. Human-Inspired Design Principles in Humanoid Robotics
   - Biomimicry in robotics
 gh-pages
- Node.js LTS
- npm or pnpm

Forbidden (Explicitly NOT allowed):
- NO RAG system
- NO Qdrant
- NO Neon
- NO FastAPI
- NO live chatbot
- NO embeddings
- NO external databases
- NO GPU usage

Hosting:
- GitHub Pages only
- Free-tier friendly
- Static hosting only

────────────────────────────  - Anthropomorphic proportions
   - Joint design and range of motion
   - Balance and posture fundamentals

4. Perception Systems in Humanoids
   - Cameras, IMUs, ultrasonic, IR, LiDAR (basic level)
   - Sensor fusion concept
   - Object detection vs environmental awareness

5. AI, Deep Learning & Control Systems
   - Role of AI in robotics
   - ML vs DL (high-level)
   - Decision pipeline: Perceive → Think → Act
   - Feedback loop

6. Humanoid Locomotion and Manipulation
   - Walking cycle stages
   - Concepts of center of mass (CoM)
   - Arm and hand manipulation basics
   - Stability strategies

Each chapter must:
- Be 800–1500 words max
- Contain: headings, subheadings, bullet points
- Include 1–2 simple SVG diagrams (optional, lightweight)
- Be written in clear, minimal, technical language

────────────────────────────────────
TECHNICAL REQUIREMENTS

Framework:
- Docusaurus (latest stable)
- Static site generation only

Stru────────
CONTENT GENERATION METHOD

Toolchain:
- Spec-Kit Plus → structure + planning
- Claude Code → chapter writing + refinement
- Manual editing for final cleanup

Writing Method:
- Research-concurrent writing
- Use accepted robotics/AI principles only
- No speculative or unproven content

Tone:
- Professional
- Minimal
- No filler
- No marketing language

Format:
- Markdown only
- Consistent headers
- Lists for processes/steps
- Code blocks only when helpful

────────────────────────────────────
OPTIONAL FEATURES

These are allowed but not required:

- Optional Urdu translation (separate /ur folder)
- Optional personalization line on homepage
- Optional glossary page
- Optional “Key Concepts Summary” per chapter

These must remain static (no AI at runtime).

────────────────────────────────────
QUALITY STANDARDS

Each chapter must pass:
- Concept accuracy check
- Terminology consistency
- General logic check
- Redundancy elimination

Technical validation:
- npm start — works locally
- npm run build — builds successfully
- No warnings or broken links
- Works on mobile & desktop

Performance:
- Load under 2 seconds on slow network
- Page size < 2MB

────────────────────────────────────
DECISIONS FIXED BY SPEC

- Platform: Docusaurus
- Pages: 6 chapters only
- No interactive AI features
- No backend
- No user data handling
- No heavy assets
- No external APIs at runtime

────────────────────────────────────
FINAL OUTPUT

A deployed website on GitHub Pages titled:

“Physical AI & Humanoid Robotics – Essentials”

Deliverables:
- GitHub repository
- Live GitHub Pages link
- Clean auto-sidebar
- 6 structured chapters
- Mobile + desktop ready

This specification is complete and unambiguous.

## Response snapshot

Created a comprehensive specification for the Physical AI & Humanoid Robotics textbook project. The specification includes 6 chapters with detailed content requirements, functional requirements, success criteria, and user scenarios. Each chapter has been defined with priority, purpose, and acceptance scenarios. The specification adheres to the requirements of using Docusaurus, GitHub Pages, and maintaining a free-tier, static architecture.

## Outcome

- ✅ Impact: Created complete feature specification for textbook generation
- 🧪 Tests: No automated tests for specification
- 📁 Files: Created spec.md and requirements checklist
- 🔁 Next prompts: /sp.plan to create implementation plan
- 🧠 Reflection: Specification covers all required chapters and technical constraints

## Evaluation notes (flywheel)

- Failure modes observed: None
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): Begin planning the implementation