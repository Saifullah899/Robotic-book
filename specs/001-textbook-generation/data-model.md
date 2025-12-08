# Data Model: Physical AI & Humanoid Robotics Textbook

**Feature**: textbook-generation
**Date**: 2025-12-09
**Status**: Completed

## Entities

### Chapter
**Description**: Represents a textbook chapter with content, learning objectives, and exercises

**Fields**:
- `id` (string): Unique identifier for the chapter (e.g., "chapter-1-introduction")
- `title` (string): Display title of the chapter
- `content` (string): Markdown content of the chapter (800-1500 words)
- `learningObjectives` (array of strings): 3-5 learning objectives for the chapter
- `examples` (array of objects): Code examples or practical examples
- `diagrams` (array of strings): File paths to SVG diagrams
- `references` (array of objects): APA-formatted references
- `wordCount` (integer): Number of words in the chapter (800-1500)
- `order` (integer): Chapter number in the sequence (1-6)

**Validation Rules**:
- Title must be 5-100 characters
- Content must be between 800-1500 words
- Learning objectives must be 3-5 items
- Word count must be within range
- Order must be between 1-6
- References must follow APA format

### Diagram
**Description**: Represents visual content that supports understanding of concepts in chapters

**Fields**:
- `id` (string): Unique identifier for the diagram
- `chapterId` (string): Reference to the chapter this diagram belongs to
- `filePath` (string): Path to the SVG file in the static directory
- `altText` (string): Alternative text for accessibility
- `caption` (string): Caption describing the diagram
- `type` (string): Type of diagram (e.g., "mechanism", "process", "structure")

**Validation Rules**:
- File path must exist and point to an SVG file
- Alt text must be provided for accessibility
- Type must be one of the allowed values

### Navigation
**Description**: Represents the structure that allows users to move between chapters

**Fields**:
- `currentChapter` (string): The current chapter ID
- `previousChapter` (string): The previous chapter ID (null for first chapter)
- `nextChapter` (string): The next chapter ID (null for last chapter)
- `chapterList` (array of strings): Ordered list of all chapter IDs

**Validation Rules**:
- Current chapter must exist in the system
- Previous and next chapters must be valid transitions
- Chapter list must contain all 6 chapters in correct order

## Relationships

```
Chapter (1) ---(0..2) Diagram
Chapter (1) ---(1) Navigation
```

## State Transitions

### Chapter States
- `draft`: Content is being written
- `review`: Content is under review
- `approved`: Content has been approved
- `published`: Content is live on the website

## Content Structure

### Frontmatter for Each Chapter
```yaml
id: chapter-1-introduction
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
```

## Validation Requirements

### Content Validation
- Each chapter must have proper learning objectives
- All technical claims must be verifiable
- Content must follow educational progression
- Terminology must be consistent across chapters

### Technical Validation
- All links must be valid
- All images must load correctly
- Page size must be under 2MB
- Load time must be under 2 seconds