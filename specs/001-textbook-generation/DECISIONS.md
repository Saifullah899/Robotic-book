# Decisions Log: Physical AI & Humanoid Robotics Textbook

**Feature**: textbook-generation
**Date**: 2025-12-09
**Status**: Active

## Decision 1: Content Language
**Date**: 2025-12-09
**Status**: Decided
**Decision**: English only (with optional Urdu translation as enhancement)
**Rationale**: English provides the broadest reach for technical content while maintaining simplicity. Optional Urdu translation can be added later if needed.
**Tradeoff**: Reach vs Effort - English provides immediate global access with minimal development effort.
**Alternatives considered**:
- English + Urdu from start: Would increase development complexity and time
- Multiple languages: Would require extensive resources beyond current scope

## Decision 2: Writing Style
**Date**: 2025-12-09
**Status**: Decided
**Decision**: Semi-academic / student-friendly approach
**Rationale**: Balances technical accuracy with accessibility for beginners and intermediate learners, aligning with the accessibility principle from the constitution.
**Tradeoff**: Authority vs Accessibility - Prioritizes understanding over academic formality.
**Alternatives considered**:
- Pure academic style: Would be less accessible to target audience
- Casual style: Would not meet professional standards requirement

## Decision 3: Diagram Strategy
**Date**: 2025-12-09
**Status**: Decided
**Decision**: SVG diagrams with 1-2 per chapter maximum
**Rationale**: SVG provides scalability, accessibility, and lightweight assets that meet the free-tier architecture requirements.
**Tradeoff**: Speed vs Clarity - SVGs take more effort to create but provide better long-term value.
**Alternatives considered**:
- Simple ASCII: Would reduce clarity for complex concepts
- PNG/JPEG: Would increase file size and reduce scalability

## Decision 4: Hosting Platform
**Date**: 2025-12-09
**Status**: Decided
**Decision**: GitHub Pages
**Rationale**: Free-tier, reliable, integrates with Git workflow, and meets all technical requirements without external dependencies.
**Tradeoff**: Free + Simple vs Flexibility - Prioritizes cost-effectiveness and simplicity over advanced features.
**Alternatives considered**:
- Vercel/Netlify: Would add unnecessary complexity for static content
- Self-hosting: Would violate free-tier requirement

## Decision 5: Technology Stack
**Date**: 2025-12-09
**Status**: Decided
**Decision**: Docusaurus framework for documentation site
**Rationale**: Provides excellent documentation features, auto-generated sidebars, responsive design, and easy GitHub Pages deployment while maintaining simplicity.
**Tradeoff**: Feature-rich vs Minimalism - Docusaurus provides necessary features without excessive complexity.
**Alternatives considered**:
- Custom React app: Would violate simplicity principle
- Static HTML: Would lack documentation features needed for textbook
- GitBook: Would be less customizable for specific requirements

## Decision 6: Content Generation Process
**Date**: 2025-12-09
**Status**: Decided
**Decision**: Spec-Kit Plus + Claude Code with human review
**Rationale**: Leverages AI for efficiency while maintaining human oversight for quality and accuracy, meeting the quality and professional standards principle.
**Tradeoff**: Speed vs Control - AI assistance speeds development while human review ensures quality.
**Alternatives considered**:
- Pure manual writing: Would be significantly slower
- Fully automated: Would not meet quality standards requirement