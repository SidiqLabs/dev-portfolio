# AI Agent Instructions

This file is the entry point for AI coding agents working in this repository.

## Mandatory Governance

Before performing engineering work, read:

- `docs/AI_ENGINEERING_CONSTITUTION.md`

The constitution is the primary engineering governance document for this
repository and is mandatory.

It governs:

- repository audits
- technical analysis
- recommendations
- UI/UX decisions
- architecture decisions
- implementation
- patches
- refactoring
- responsive behavior
- accessibility decisions
- validation
- Git operations

Do not recommend or implement changes before reading and applying the
constitution.

## Recommendation Evidence

Before recommending a UI/UX pattern, interaction model, architecture choice,
or engineering solution, apply the `RECOMMENDATION EVIDENCE LAW` from the
constitution.

Do not treat these concepts as equivalent:

- technically possible
- standards-compliant
- common industry practice
- professional pattern for the relevant use case
- appropriate for this project

If relevant evidence is insufficient, do not patch.

## Repository Safety

Audit before modifying.

Preserve unrelated work in progress.

Do not restore, overwrite, stage, commit, or otherwise modify unrelated files.

Before committing:

1. inspect the worktree;
2. inspect the diff;
3. verify the intended staging scope;
4. run the validation appropriate to the change;
5. confirm unrelated work remains untouched.

## Project Context

This repository is a personal developer portfolio, not a company landing page.

Preserve the established stack and architecture unless a change has a verified
technical reason.

Long content belongs in the project's constants/data layer when appropriate.

Shared UI primitives must not be modified to solve a section-local problem
without first auditing their project-wide impact.

Section-local behavior and styling should remain local unless reuse is proven.

## Responsive and Device Validation

Desktop correctness alone is not sufficient.

For user-facing UI changes, consider and validate as relevant:

- desktop/laptop viewport behavior
- real mobile viewport behavior
- touch input
- mouse input
- responsive breakpoints
- horizontal overflow
- centering
- transforms
- masks
- fades
- animation
- browser-specific rendering

Do not infer mobile correctness solely from desktop behavior.

## Instruction Conflicts

Direct user instructions have higher priority than repository guidance.

If repository instructions conflict with each other or make the requested
change unsafe or ambiguous, identify the conflict before modifying the
repository.

Do not silently invent an interpretation.
