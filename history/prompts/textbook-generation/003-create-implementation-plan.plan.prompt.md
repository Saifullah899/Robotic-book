---
id: 003
title: Create Implementation Plan
stage: plan
date: 2025-12-09
surface: agent
model: claude-sonnet-4-5-20250929
feature: textbook-generation
branch: 001-textbook-generation
user: user
command: /sp.plan
labels: ["plan", "textbook", "docusaurus"]
links:
  spec: specs/001-textbook-generation/spec.md
  ticket: null
  adr: null
  pr: null
files:
 - specs/001-textbook-generation/plan.md
 - specs/001-textbook-generation/research.md
 - specs/001-textbook-generation/data-model.md
 - specs/001-textbook-generation/quickstart.md
 - specs/001-textbook-generation/DECISIONS.md
tests:
 - null
---

## Prompt

/sp.plan

Create a complete execution plan for building an AI-native textbook (WITHOUT any RAG chatbot), based on the existing /sp.specify.

CRITICAL CONSTRAINTS
- Use ONLY a native *Gemini API key*
- DO NOT use any OpenAI API, OpenAI-compatible APIs, or external_client bridges
- Gemini may be used ONLY for: optional assistance, summarization, grammar checks, or translation
- The core textbook must be statically generated and human-reviewed

OBJECTIVE
Plan the end-to-end implementation of:
1) A Docusaurus-based AI-native textbook
2) Built using Spec-Kit Plus + Claude Code for structured authoring
3) Deployed to GitHub Pages
4) NO RAG, NO VECTOR DATABASE, NO CHATBOT

Only a static, high-quality, AI-native textbook.

------------------------------------------------------------------

ARCHITECTURE SKETCH (text-based)

Authoring (Spec-Kit Plus + Claude Code)
→ Structured Markdown + front-matter
→ Docusaurus (Auto Sidebar)
→ GitHub Repository
→ GitHub Pages (Static Hosting)

Optional (GENERATION ASSISTANCE ONLY):
Markdown Snippets / - apa_references
- difficulty_level
- example_count
- images: true/false
- translation_ready: true/false

NO embedding fields needed.

------------------------------------------------------------------

RESEARCH APPROACH (concurrent)

Research is perTranslation / Fixing
→ Gemini API (no memory, no embeddings, no vector search)

NO BACKEND
NO DATABASE
NO QDRANT
NO NEON
NO CHATBOT
NO RAG

------------------------------------------------------------------

SECTION STRUCTURE (Docusaurus + Data Model)

Auto-sidebar generated from:

1. Introduction to Physical AI
2. Foundations of Robotics: Systems, Structure & Core Mechanisms
3. Human-Inspired Design Principles in Humanoid Robotics
4. Perception Systems in Humanoids
5. AI, Deep Learning & Control Systems
6. Humanoid Locomotion and Manipulation

Directory structure:

/docs
  /chapter-1-introduction
      chapter.md
      /examples
      /assets

  /chapter-2-foundations
      chapter.md
      /examples
      /assets

  /chapter-3-human-design
      chapter.md
      /examples
      /assets

  /chapter-4-perception
      chapter.md
      /examples
      /assets

  /chapter-5-ai-control
      chapter.md
      /examples
      /assets

  /chapter-6-locomotion
      chapter.md
      /examples
      /assets


Frontformed WHILE writing (not all upfront):

For EVERY chapter:

1. Define learning objectives (3–5 bullet points)
2. Research from:
   - Academic papers
   - IEEE / Springer
   - Robotics books
   - Official robotics documentation
3. Write content using Claude Code + Spec-Kit Plus
4. Insert APA citations immediately after facts
5. Add references list at end of chapter
6. Review for:
   - Factual accuracy
   - Flow
   - Clarity
7. Optional: Pass through Gemini for:
   - Grammar correction
   - Summarization
   - Urdu translation

Rules:
- APA in-text citations are mandatory
- Reference list per chapter
- One citation per factual claim

------------------------------------------------------------------

GEMINI USAGE PLAN (NO RAG)

Allowed Gemini usage:

1. Grammar fixing:
   Prompt: "Fix grammar and clarity, do not change meaning"
2. Summarization:
   Prompt: "Summarize this into 3 bullet points"
3. Urdu translation (optional):
   Prompt: "Translate to Urdu, formal academic style"
4. Diagram explanation prompts
5. Code explanation prompts

NOT ALLOWED:
❌ Embeddings
❌ Chatbot
❌ Vector storage
❌ Retrieval
❌ Memory
❌ External tools

------------------------------------------------------------------

DECISIONS NEEDING DOCUMENTATION

1. Content Language
   - Option A: English only
   - Option B: English + Urdu
   - Tradeoff: Reach vs Effort

2. Writing Style
   - Option A: Academic
   - Option B: Semi-academic / student-friendly
   - Tradeoff: Authority vs Accessibility

3. Diagram Strategy
   - Option A: Simple ASCII
   - Option B: Figma / Excalidraw
   - Tradeoff: Speed vs Clarity

4. Hosting Platform
   - Option A: GitHub Pages
   - Option B: Vercel / Netlify
   - Tradeoff: Free + Simple vs Flexibility

All decisions logged in: DECISIONS.md

------------------------------------------------------------------

TESTING STRATEGY (acceptance-focused)

UNIT CHECKS:
- Every chapter builds in Docusaurus
- All internal links work
- Images load correctly
- Sidebar auto-generates correctly
- All front-matter fields present

CONTENT VALIDATION:
- Each chapter has:
  - Learning objectives
  - Examples
  - Diagrams or illustrations
  - APA references
- No missing citations
- No placeholder text

ACCEPTANCE CHECKS:
- Site builds without error
- Navigation between chapters smooth
- Mobile responsive
- All assets under GitHub Pages size limits
- Proper formatting on all browsers

QUALITY BARS:
- Academic clarity level ≥ 9/10
- 0 broken links
- 100% topic alignment with Physical AI & Humanoids

------------------------------------------------------------------

DATAFLOW MAP

Claude Code / Spec-Kit Plus
        ↓
Structured .md chapters
        ↓
Docusaurus Compilation
        ↓
Static HTML/CSS/JS
        ↓
GitHub Repository
        ↓
GitHub Pages Deployment

Optional (separate & offline):
Selected Text → Gemini API (for correction/translation)

NO live data pipeline.

------------------------------------------------------------------

PHASED EXECUTION PLAN

PHASE 1 — RESEARCH
- Define objective for every chapter
- Create outline for 6 chapters
- Collect academic references
- Create citation template
- Setup DECISIONS.md

Output:
✔ Chapter blueprints
✔ References bank
✔ Prompt templates for Claude & Gemini

--------------------------------------

PHASE 2 — FOUNDATION
- Install Docusaurus
- Configure site name, theme, layout
- Enable Auto-sidebar
- Create GitHub repo
- Setup GitHub Pages deployment config
- Create base folder structure

Output:
✔ Empty working documentation website
✔ Deployment ready

--------------------------------------

PHASE 3 — ANALYSIS
- Fully complete 2 chapters:
   - Chapter 1
   - Chapter 2
- Add examples & images
- Validate citations
- Apply optional Gemini correction
- Test site rendering
- Fix formatting issues

Output:
✔ First half of book complete & live

--------------------------------------

PHASE 4 — SYNTHESIS
- Complete remaining 4 chapters
- Full site review
- Final formatting
- Optimize visuals
- Complete translations (if enabled)
- Final publish on GitHub Pages

Output:
✔ Full AI-native textbook deployed
✔ All chapters completed
✔ Locked for production

------------------------------------------------------------------

FINAL OUTPUT MUST INCLUDE

- Text-based architecture diagram
- Section-by-section execution plan
- Gemini usage rules
- Complete dataflow (Author → Site)
- Test matrix
- Phase breakdown:
  Research → Foundation → Analysis → Synthesis

END OF /sp.plan

## Response snapshot

Created comprehensive implementation plan for the Physical AI & Humanoid Robotics textbook project. The plan includes:
- Implementation plan document (plan.md)
- Research document covering technology decisions
- Data model for textbook content
- Quickstart guide for development setup
- Decisions log documenting key choices

The plan follows the constitution principles and ensures a free-tier, lightweight architecture using Docusaurus and GitHub Pages. All requirements from the specification have been addressed, including the phased execution approach and quality standards.

## Outcome

- ✅ Impact: Created complete implementation plan for textbook generation
- 🧪 Tests: No automated tests for planning documents
- 📁 Files: Created 5 planning documents
- 🔁 Next prompts: /sp.tasks to generate implementation tasks
- 🧠 Reflection: Plan addresses all architectural and technical requirements

## Evaluation notes (flywheel)

- Failure modes observed: None
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): Generate tasks for implementation