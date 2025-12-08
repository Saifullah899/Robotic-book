---
description: "Task list for Physical AI & Humanoid Robotics textbook implementation"
---

# Tasks: textbook-generation

**Input**: Design documents from `/specs/001-textbook-generation/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: The examples below include test tasks. Tests are OPTIONAL - only include them if explicitly requested in the feature specification.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Single project**: `docs/`, `static/`, `src/` at repository root
- Paths shown below assume single project - adjust based on plan.md structure

<!--
  ============================================================================
  IMPORTANT: The tasks below are SAMPLE TASKS for illustration purposes only.

  The /sp.tasks command MUST replace these with actual tasks based on:
  - User stories from spec.md (with their priorities P1, P2, P3...)
  - Feature requirements from plan.md
  - Entities from data-model.md
  - Endpoints from contracts/

  Tasks MUST be organized by user story so each story can be:
  - Implemented independently
  - Tested independently
  - Delivered as an MVP increment

  DO NOT keep these sample tasks in the generated tasks.md file.
  ============================================================================
-->

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [x] T001 Create GitHub repository for physical-ai-textbook
- [x] T002 Initialize Docusaurus project with classic template in website directory
- [x] T003 [P] Configure package.json with project metadata and dependencies

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T004 Configure Docusaurus site title and metadata in docusaurus.config.js
- [x] T005 [P] Setup GitHub Pages deployment configuration in docusaurus.config.js
- [x] T006 [P] Create sidebar configuration file (sidebars.js) with textbook structure
- [x] T007 Create base directory structure for all 6 chapters in docs/ directory
- [x] T008 Configure basic styling and theme in src/css/custom.css
- [x] T009 Setup navigation and footer configuration in docusaurus.config.js

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: Chapter 1 - Introduction to Physical AI (Priority: P1) 🎯 MVP

**Goal**: Create the introductory chapter that defines Physical AI, explains the difference between virtual AI and embodied AI, and presents real-world applications. This chapter should be accessible to beginners and provide a foundation for understanding the rest of the textbook.

**Independent Test**: Chapter can be read independently and delivers foundational understanding of Physical AI concepts to students.

### Implementation for Chapter 1

- [x] T010 [P] [US1] Create Introduction to Physical AI chapter content in docs/chapter-1-introduction/chapter.md
- [x] T011 [P] [US1] Add learning objectives section to chapter frontmatter in docs/chapter-1-introduction/chapter.md
- [x] T012 [US1] Implement chapter content with headings, subheadings, and bullet points in docs/chapter-1-introduction/chapter.md
- [x] T013 [US1] Add references section with APA citations in docs/chapter-1-introduction/chapter.md
- [x] T014 [US1] Validate chapter word count is between 800-1500 words in docs/chapter-1-introduction/chapter.md
- [x] T015 [US1] Add SVG diagram for Physical AI vs Virtual AI comparison in static/img/chapter-1/ai-comparison.svg
- [x] T016 [US1] Add accessibility attributes to SVG diagram in static/img/chapter-1/ai-comparison.svg
- [x] T017 [US1] Review chapter content with subject matter expert per FR-011

**Checkpoint**: At this point, Chapter 1 should be fully educational and testable independently

---

## Phase 4: Chapter 2 - Foundations of Robotics (Priority: P2)

**Goal**: Create the chapter that covers robot components (sensors, actuators, controllers), mechanical structures, and basic control logic. This chapter should build on the Physical AI concepts and introduce the mechanical aspects of robotics.

**Independent Test**: Chapter can be read independently and delivers understanding of basic robotics systems to students.

### Implementation for Chapter 2

- [ ] T018 [P] [US2] Create Foundations of Robotics chapter content in docs/chapter-2-foundations/chapter.md
- [ ] T019 [P] [US2] Add learning objectives section to chapter frontmatter in docs/chapter-2-foundations/chapter.md
- [ ] T020 [US2] Implement chapter content with headings, subheadings, and bullet points in docs/chapter-2-foundations/chapter.md
- [ ] T021 [US2] Add references section with APA citations in docs/chapter-2-foundations/chapter.md
- [ ] T022 [US2] Validate chapter word count is between 800-1500 words in docs/chapter-2-foundations/chapter.md
- [ ] T023 [US2] Add SVG diagram for robot components overview in static/img/chapter-2/robot-components.svg
- [ ] T024 [US2] Add accessibility attributes to SVG diagram in static/img/chapter-2/robot-components.svg
- [ ] T025 [US2] Review chapter content with subject matter expert per FR-011

**Checkpoint**: At this point, Chapters 1 AND 2 should both be educational and independent

---

## Phase 5: Chapter 3 - Human-Inspired Design Principles (Priority: P3)

**Goal**: Create the chapter that covers biomimicry in robotics, anthropomorphic structure, and ergonomics and balance concepts. This chapter should introduce the design principles that make robots humanoid.

**Independent Test**: Chapter can be read independently and delivers understanding of biomimicry and anthropomorphic design to students.

### Implementation for Chapter 3

- [ ] T026 [P] [US3] Create Human-Inspired Design Principles chapter content in docs/chapter-3-human-design/chapter.md
- [ ] T027 [P] [US3] Add learning objectives section to chapter frontmatter in docs/chapter-3-human-design/chapter.md
- [ ] T028 [US3] Implement chapter content with headings, subheadings, and bullet points in docs/chapter-3-human-design/chapter.md
- [ ] T029 [US3] Add references section with APA citations in docs/chapter-3-human-design/chapter.md
- [ ] T030 [US3] Validate chapter word count is between 800-1500 words in docs/chapter-3-human-design/chapter.md
- [ ] T031 [US3] Add SVG diagram for biomimicry examples in static/img/chapter-3/biomimicry.svg
- [ ] T032 [US3] Add accessibility attributes to SVG diagram in static/img/chapter-3/biomimicry.svg
- [ ] T033 [US3] Review chapter content with subject matter expert per FR-011

**Checkpoint**: At this point, Chapters 1, 2 AND 3 should all be educational and independent

---

## Phase 6: Chapter 4 - Perception Systems in Humanoids (Priority: P4)

**Goal**: Create the chapter that covers cameras, IMUs, ultrasonic, IR, LiDAR (basic level), sensor fusion concepts, and the difference between object detection and environmental awareness. This chapter should explain how humanoid robots perceive their environment.

**Independent Test**: Chapter can be read independently and delivers understanding of perception systems in humanoid robotics to students.

### Implementation for Chapter 4

- [ ] T034 [P] [US4] Create Perception Systems in Humanoids chapter content in docs/chapter-4-perception/chapter.md
- [ ] T035 [P] [US4] Add learning objectives section to chapter frontmatter in docs/chapter-4-perception/chapter.md
- [ ] T036 [US4] Implement chapter content with headings, subheadings, and bullet points in docs/chapter-4-perception/chapter.md
- [ ] T037 [US4] Add references section with APA citations in docs/chapter-4-perception/chapter.md
- [ ] T038 [US4] Validate chapter word count is between 800-1500 words in docs/chapter-4-perception/chapter.md
- [ ] T039 [US4] Add SVG diagram for sensor types in static/img/chapter-4/sensors.svg
- [ ] T040 [US4] Add accessibility attributes to SVG diagram in static/img/chapter-4/sensors.svg
- [ ] T041 [US4] Review chapter content with subject matter expert per FR-011

**Checkpoint**: At this point, Chapters 1-4 should all be educational and independent

---

## Phase 7: Chapter 5 - AI, Deep Learning & Control Systems (Priority: P5)

**Goal**: Create the chapter that covers the role of AI in robotics, high-level understanding of ML vs DL, the decision pipeline (Perceive → Think → Act), and feedback loops. This chapter should explain how AI drives robotic decision-making.

**Independent Test**: Chapter can be read independently and delivers understanding of AI's role in robotics to students.

### Implementation for Chapter 5

- [ ] T042 [P] [US5] Create AI, Deep Learning & Control Systems chapter content in docs/chapter-5-ai-control/chapter.md
- [ ] T043 [P] [US5] Add learning objectives section to chapter frontmatter in docs/chapter-5-ai-control/chapter.md
- [ ] T044 [US5] Implement chapter content with headings, subheadings, and bullet points in docs/chapter-5-ai-control/chapter.md
- [ ] T045 [US5] Add references section with APA citations in docs/chapter-5-ai-control/chapter.md
- [ ] T046 [US5] Validate chapter word count is between 800-1500 words in docs/chapter-5-ai-control/chapter.md
- [ ] T047 [US5] Add SVG diagram for perceive-think-act pipeline in static/img/chapter-5/pipeline.svg
- [ ] T048 [US5] Add accessibility attributes to SVG diagram in static/img/chapter-5/pipeline.svg
- [ ] T049 [US5] Review chapter content with subject matter expert per FR-011

**Checkpoint**: At this point, Chapters 1-5 should all be educational and independent

---

## Phase 8: Chapter 6 - Humanoid Locomotion and Manipulation (Priority: P6)

**Goal**: Create the chapter that covers walking cycle stages, concepts of center of mass (CoM), arm and hand manipulation basics, and stability strategies. This chapter should explain how humanoid robots move and manipulate objects.

**Independent Test**: Chapter can be read independently and delivers understanding of humanoid movement and manipulation to students.

### Implementation for Chapter 6

- [ ] T050 [P] [US6] Create Humanoid Locomotion and Manipulation chapter content in docs/chapter-6-locomotion/chapter.md
- [ ] T051 [P] [US6] Add learning objectives section to chapter frontmatter in docs/chapter-6-locomotion/chapter.md
- [ ] T052 [US6] Implement chapter content with headings, subheadings, and bullet points in docs/chapter-6-locomotion/chapter.md
- [ ] T053 [US6] Add references section with APA citations in docs/chapter-6-locomotion/chapter.md
- [ ] T054 [US6] Validate chapter word count is between 800-1500 words in docs/chapter-6-locomotion/chapter.md
- [ ] T055 [US6] Add SVG diagram for walking cycle stages in static/img/chapter-6/walking-cycle.svg
- [ ] T056 [US6] Add accessibility attributes to SVG diagram in static/img/chapter-6/walking-cycle.svg
- [ ] T057 [US6] Review chapter content with subject matter expert per FR-011

**Checkpoint**: All chapters should now be independently educational

---

## Phase 9: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple chapters

- [ ] T058 [P] Configure service worker for offline functionality per FR-010 and FR-016
- [ ] T059 Validate all chapters meet performance requirements (under 2MB, load under 2s) per SC-004 and SC-009
- [ ] T060 [P] Review all SVG diagrams for accessibility compliance per FR-014
- [ ] T061 Run build validation to ensure no errors per FR-008
- [ ] T062 Test navigation between all chapters works correctly per FR-003
- [ ] T063 Deploy to GitHub Pages and validate per SC-006
- [ ] T064 Run mobile and desktop compatibility tests per FR-004
- [x] T065 Create README.md with project overview and contribution guidelines

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - User stories can then proceed in parallel (if staffed)
  - Or sequentially in priority order (P1 → P2 → P3 → P4 → P5 → P6)
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

- **Chapter 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **Chapter 2 (P2)**: Can start after Foundational (Phase 2) - May reference Chapter 1 concepts but should be independently testable
- **Chapter 3 (P3)**: Can start after Foundational (Phase 2) - May reference Chapters 1-2 concepts but should be independently testable
- **Chapter 4 (P4)**: Can start after Foundational (Phase 2) - May reference previous chapters but should be independently testable
- **Chapter 5 (P5)**: Can start after Foundational (Phase 2) - May reference previous chapters but should be independently testable
- **Chapter 6 (P6)**: Can start after Foundational (Phase 2) - May reference previous chapters but should be independently testable

### Within Each User Story

- Models before services (N/A for this project - content-focused)
- Core implementation before integration
- Content creation before review
- Chapter complete before moving to next priority

### Parallel Opportunities

- All Setup tasks marked [P] can run in parallel
- All Foundational tasks marked [P] can run in parallel (within Phase 2)
- Once Foundational phase completes, all user stories can start in parallel (if team capacity allows)
- All diagrams within a story marked [P] can run in parallel
- Different user stories can be worked on in parallel by different team members

---

## Parallel Example: Chapter 1

```bash
# Launch all content creation tasks for Chapter 1 together:
Task: "Create Introduction to Physical AI chapter content in docs/chapter-1-introduction/chapter.md"
Task: "Add learning objectives section to chapter frontmatter in docs/chapter-1-introduction/chapter.md"

# Launch all diagrams for Chapter 1 together:
Task: "Add SVG diagram for Physical AI vs Virtual AI comparison in static/img/chapter-1/ai-comparison.svg"
Task: "Add accessibility attributes to SVG diagram in static/img/chapter-1/ai-comparison.svg"
```

---

## Implementation Strategy

### MVP First (Chapter 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: Chapter 1
4. **STOP and VALIDATE**: Test Chapter 1 independently per acceptance criteria
5. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add Chapter 1 → Test independently → Deploy/Demo (MVP!)
3. Add Chapter 2 → Test independently → Deploy/Demo
4. Add Chapter 3 → Test independently → Deploy/Demo
5. Add Chapter 4 → Test independently → Deploy/Demo
6. Add Chapter 5 → Test independently → Deploy/Demo
7. Add Chapter 6 → Test independently → Deploy/Demo
8. Each story adds value without breaking previous stories

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: Chapter 1
   - Developer B: Chapter 2
   - Developer C: Chapter 3
   - Developer D: Chapter 4
   - Developer E: Chapter 5
   - Developer F: Chapter 6
3. Stories complete and integrate independently
4. Final polish phase combines all chapters

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Verify all content meets 800-1500 word requirement per FR-006
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Each chapter must undergo technical review per FR-011
- All SVG diagrams must include accessibility attributes per FR-014
- All chapters must be available offline per FR-016