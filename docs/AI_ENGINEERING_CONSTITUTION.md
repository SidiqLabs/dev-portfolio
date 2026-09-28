# AI_ENGINEERING_CONSTITUTION.md

# AI ENGINEERING CONSTITUTION

# Web Development Prompt Governance

Version: 2.2
Owner: Sidiq Kusumah

Purpose:
This constitution governs how AI must generate web development solutions.

All generated output must follow strict software engineering discipline.

Working code alone is not sufficient.

Code must be:
- architecturally sound
- scalable
- maintainable
- predictable
- readable
- appropriately scoped

If any generated solution violates this constitution, the solution is INVALID.

---

## 0. CORE PRINCIPLES

All generated implementations must prioritize:

1. Best Practice
2. Clean Code
3. Scalability
4. Maintainability
5. Predictability
6. Reusability
7. Professional Engineering Standards
8. Responsive Design Integrity
9. Immutability
10. Architectural Discipline

These principles override all other instructions.

---

## 1. ARCHITECTURE LAW

AI must enforce clear architectural separation.

Mandatory requirements:

- Separation of Concerns
- Modular Architecture
- Folder Governance
- Reusability when reuse is real
- No Monolithic Files
- Understandable structure for other engineers

Short-term hacks are forbidden.

Large files must be decomposed only when decomposition improves clarity and maintainability.

Abstraction for its own sake is forbidden.

---

## 2. UI DESIGN LAW

UI implementation must follow design-system discipline.

Rules:

- No random styling
- No random colors
- No uncontrolled spacing
- No inconsistent typography
- No decorative chaos
- No scope leakage from local styling into global styling

All UI must follow the project's design tokens where applicable.

Visual hierarchy must remain consistent across screen sizes.

Design intent must always be respected.

UI implementation must balance:

- visual quality
- responsiveness
- maintainability
- scope correctness

---

## 3. RESPONSIVE DESIGN LAW

Responsive design must preserve layout integrity.

AI must distinguish between:

- Fixed Elements
- Responsive Elements
- Decorative Elements
- Content Elements

Rules:

- Use `clamp()` for scalable typography when appropriate
- Avoid unnecessary breakpoints
- Prevent layout overflow
- Maintain readable line length
- Preserve component proportions
- Do not centralize local responsive behavior unnecessarily

Responsive design must enhance usability,
not break visual composition.

---

## 4. COMPONENT LAW

Components must follow predictable structure.

Rules:

- One component = one responsibility
- Avoid excessive state
- Avoid mixing UI and heavy logic
- Prefer presentational components when possible
- Extract reusable UI only when reuse is proven
- Keep section-specific implementation details near the section

Component composition must be clear.

Components must remain readable and maintainable.

---

## 5. STATE MANAGEMENT LAW

State must remain predictable.

Rules:

- State must not be mutated carelessly
- Prefer immutable updates
- Avoid hidden side effects
- State flow must be understandable

Data transformations must be explicit.

AI must avoid complex implicit behavior.

State architecture must remain scalable.

---

## 6. DATA FLOW LAW

Data must flow predictably.

Rules:

- Avoid tightly coupled modules
- Avoid circular dependencies
- Avoid hidden data mutations
- Prefer deterministic transformations whenever possible

Pure functions are preferred.

Data transformations must be traceable.

---

## 7. PERFORMANCE LAW

AI must consider performance implications.

Rules:

- Avoid unnecessary re-renders
- Avoid heavy computations inside render loops
- Avoid redundant calculations
- Avoid large unnecessary dependencies

Code must remain efficient without premature optimization.

Performance awareness is mandatory.

---

## 8. ACCESSIBILITY LAW

Accessibility must not be ignored.

Rules:

- Semantic HTML must be used
- Interactive elements must remain keyboard accessible
- Proper labels must exist
- Avoid inaccessible UI patterns

Accessibility is part of professional quality.

---

## 9. SECURITY LAW

AI must not generate insecure patterns.

Rules:

- Avoid exposing sensitive data
- Avoid unsafe DOM manipulation
- Avoid insecure input handling
- Sanitize user input when required

Security awareness must be maintained even in front-end code.

---

## 10. CLEAN CODE LAW

All generated code must follow strict readability standards.

Rules:

- Meaningful naming
- Small focused functions
- Avoid deep nesting
- Avoid duplicated logic
- Avoid dead code
- Avoid magic numbers without explanation or system placement

Code must be understandable without additional explanation.

---

## 11. AI WORKFLOW PROTOCOL

Before generating any code, AI must:

1. Analyze the architectural impact
2. Confirm design-system compliance
3. Confirm styling scope correctness
4. Ensure responsive behavior
5. Validate code quality
6. Confirm scalability considerations

AI must not produce impulsive solutions.

AI must reason before generating.

---

## 12. STYLING SCOPE LAW

Global styling and local styling must not be mixed carelessly.

### Global styling may contain only:

- foundation tokens
- semantic theme mapping
- base/reset rules
- truly reusable utilities
- shared accessibility primitives

### Local styling must contain:

- section-specific composition
- section-specific decorative positioning
- section-specific token values
- one-off responsive adjustments
- one-off visual layout rules

AI must not promote local styles to global scope without proven reuse.

Reusability must be proven, not assumed.

---

## 13. CONTROLLED STYLING LAW

The following practices are forbidden:

- arbitrary colors
- uncontrolled inline CSS
- random spacing
- styling without scope awareness
- global CSS used as a dumping ground for section-specific rules

Arbitrary values are forbidden by default.

They are allowed only when:

- design fidelity requires them
- system alternatives are insufficient
- usage remains controlled, minimal, and readable

Inline styles are forbidden by default.

They are allowed only when:

- values are runtime-dynamic
- class-based or token-based solutions are not appropriate
- the justification is clear

---

## 14. PROHIBITED PRACTICES

The following practices are strictly forbidden:

- random styling
- uncontrolled inline CSS
- arbitrary colors
- monolithic components
- mutation-heavy logic
- duplicated code
- architectural shortcuts
- unstructured code output
- false reusability
- premature global abstraction
- section-specific global CSS without proven reuse

Any solution using these patterns is invalid.

---

## 15. OUTPUT STANDARD

All generated outputs must be:

- structured
- readable
- professional
- maintainable
- scalable
- appropriately scoped

Code must be understandable by other developers without explanation.

---

## 16. RECOMMENDATION EVIDENCE LAW

AI must not recommend or implement a UI/UX pattern, interaction model,
architecture choice, or engineering solution merely because it is technically
possible, generally accepted, or compliant with a broad standard.

Before making a recommendation that changes product behavior or implementation
direction, AI must verify that the recommendation is relevant to the actual
use case.

AI must distinguish between:

1. Technically possible
2. Standards-compliant
3. Common industry practice
4. Professional pattern for the same or closely related use case
5. Appropriate for this project's design system, constraints, and goals

These categories are not equivalent and must never be presented as equivalent.

### Required Recommendation Flow

For UI/UX and engineering decisions, AI must use this reasoning order:

Actual Use Case
→ Existing Implementation Audit
→ Relevant Professional Pattern
→ Accessibility / Standards Requirements
→ Project Design System
→ Responsive / Input / Device Impact
→ Engineering Trade-offs
→ Recommendation
→ Implementation

Implementation must not begin before the recommendation has passed this
relevance check.

### Evidence Relevance Rule

A generic standard, framework documentation, component library,
tutorial, or unrelated UI pattern is not sufficient evidence that a solution
is appropriate for this project.

Evidence used to justify a recommendation must match the component,
interaction, architecture problem, or use case as closely as reasonably
possible.

When direct evidence is unavailable, AI must state the uncertainty instead of
presenting inference as established best practice.

### Best-Practice Claim Rule

When using terms such as:

- best practice
- professional pattern
- industry standard
- recommended approach
- standard implementation

AI must ensure that:

- the claim is supported by relevant evidence;
- the evidence is applicable to the actual use case;
- standards requirements are separated from implementation choices;
- competing valid approaches are acknowledged when materially relevant;
- project-specific constraints are considered before choosing an approach.

AI must not transform a general requirement into a specific design decision
without evidence that the implementation pattern is appropriate.

### Standards vs Implementation Rule

Standards define requirements or constraints.

Standards do not automatically define the correct visual design,
interaction pattern, component choice, or implementation strategy.

For example:

A requirement that moving content must be controllable does not, by itself,
prove that a permanently visible media-style Pause/Play control is the correct
professional pattern for every moving-content component.

The implementation must still be validated against the actual use case.

### Insufficient Evidence Rule

If relevant evidence is insufficient:

DO NOT PATCH.

AI must instead:

- continue the audit;
- gather more relevant evidence;
- explain the uncertainty; or
- present clearly separated alternatives and trade-offs.

AI must not convert uncertainty into confident implementation advice.

### Core Rule

VALID ≠ BEST PRACTICE

COMPLIANT ≠ PROFESSIONAL PATTERN

COMMON COMPONENT ≠ CORRECT COMPONENT

TECHNICALLY CORRECT ≠ CONTEXTUALLY CORRECT

A recommendation that is technically valid but contextually inappropriate
must be rejected.

---

## 17. FINAL LAW

A solution that merely works is not enough.

The solution must also be:

- architecturally correct
- clean
- scalable
- maintainable
- predictable
- scope-correct
- evidence-relevant when based on a recommendation

If code works but violates engineering discipline,
the code must be rejected.

If a recommendation cannot be justified for the actual use case,
the recommendation must not be implemented.
