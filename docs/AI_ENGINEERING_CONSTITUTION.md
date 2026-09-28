# AI_ENGINEERING_CONSTITUTION.md

# AI ENGINEERING CONSTITUTION

# Web Development Prompt Governance

Version: 2.3
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

Engineering recommendations MUST be justified for the actual use case before
they are presented to the user or implemented.

The agent MUST distinguish between:

- technically possible;
- standards-compliant;
- common industry practice;
- professional practice for the same or closely related use case;
- appropriate for this project.

These categories are not interchangeable.

### 16.1 Required Decision Flow

For non-trivial engineering, architecture, UI, or UX recommendations, use:

Actual Problem
→ Actual Use Case
→ Existing Implementation Audit
→ Requirement Evidence
→ Solution Candidates
→ Relevant Professional Practice Evidence
→ Professional Practice Paradox Gate
→ Decision Parameter Analysis
→ Project Fit
→ Counter-Evidence Check
→ Recommendation Confidence Gate
→ Recommendation
→ Implementation
→ Validation

The recommendation MUST NOT skip directly from a valid requirement to an
assumed solution.

### 16.2 Requirement Evidence Is Not Solution Evidence

Evidence that a problem, requirement, accessibility obligation, standard, or
constraint exists does NOT by itself prove that a particular implementation
is appropriate.

For example:

A standard requiring users to control moving content does not, by itself,
prove that a specific visible control, interaction pattern, placement, or
visual treatment is the correct solution for the current product.

Standards define requirements and constraints.

They do not automatically define the best project-specific implementation.

Therefore:

REQUIREMENT EVIDENCE != SOLUTION EVIDENCE

A proposed solution requires evidence of its own.

### 16.3 Professional Practice Evidence

When recommending a solution, investigate how comparable professional
implementations handle the same or closely related use case.

Evidence should be relevant to the actual problem.

Generic framework documentation, unrelated design examples, generic
tutorials, or standards alone are insufficient evidence for a
project-specific professional-pattern claim.

Do not claim "best practice", "professional pattern", "standard approach", or
equivalent language unless the evidence is relevant to the actual use case and
the project constraints.

### 16.4 Professional Practice Paradox Gate

If authoritative guidance, theoretical best practice, or an apparently valid
solution differs from observed professional practice in comparable use cases,
the difference MUST be investigated before making a recommendation.

The agent MUST ask:

- Why is the theoretically valid solution not commonly used here?
- Why is another pattern preferred?
- What problem or trade-off is the professional implementation avoiding?
- What alternative solution is used instead?
- Do those reasons apply to this project?

The existence of a difference is not itself the conclusion.

The purpose of this gate is to understand the decision logic behind the
difference.

If the reason cannot be established with sufficient relevant evidence:

NO RECOMMENDATION.
DO NOT PATCH.

### 16.5 Decision Parameter Analysis

When relevant, investigate the parameters that explain why a solution is used
or avoided.

These may include:

- UX efficiency;
- task relevance;
- visual hierarchy;
- aesthetic integration;
- interaction cost;
- discoverability;
- interface clutter;
- mobile ergonomics;
- touch behavior;
- mouse behavior;
- keyboard behavior;
- cognitive load;
- accessibility;
- motion purpose;
- responsive behavior;
- performance;
- rendering cost;
- implementation complexity;
- state complexity;
- maintenance cost;
- consistency with surrounding UI;
- consistency with user expectations;
- compatibility with the project design system;
- alternative solutions;
- cost versus user benefit.

This list is not a checklist that must be mechanically completed for every
change.

Use the parameters relevant to the actual decision.

The goal is to understand WHY professional practice selects or rejects a
solution, not merely to count examples.

### 16.6 Observed Practice Is Not Automatic Justification

Finding that professional products commonly use or avoid a pattern is useful
evidence, but it is not sufficient justification by itself.

Do NOT reason:

"Professional sites use X, therefore this project should use X."

Do NOT reason:

"Professional sites avoid X, therefore this project should avoid X."

Instead determine:

Observed Practice
→ Why It Exists
→ Relevant Trade-offs
→ Alternative Used
→ Whether Those Conditions Apply Here
→ Project-Specific Decision

PROFESSIONAL CONSENSUS != PROJECT FIT

Professional practice must be understood, not copied.

### 16.7 Counter-Evidence Requirement

Before recommending a solution, actively investigate reasons the solution may
be wrong for the actual use case.

The analysis MUST consider credible counter-evidence when it exists.

Ask:

- What would make this solution inappropriate?
- What professional implementations choose differently?
- Why do they choose differently?
- What costs or regressions would this introduce?
- Is there a simpler solution with equal or greater user benefit?
- Is the proposed solution solving a real user problem or merely adding
  technically valid behavior?

Do not search only for evidence that confirms the first proposed solution.

A recommendation that survives counter-evidence is stronger than one produced
by confirmation alone.

### 16.8 Alternative Solution Requirement

When professional practice avoids a seemingly valid solution, investigate what
is used instead.

The analysis should identify:

Problem
→ Rejected or uncommon solution
→ Reason it is avoided
→ Alternative solution
→ Why the alternative is preferred
→ Applicability to this project

Do not remove a solution merely because it is uncommon without understanding
the replacement strategy.

### 16.9 Recommendation Confidence Gate

A recommendation may be presented only when there is sufficient relevant
evidence for the solution itself and sufficient understanding of its
trade-offs.

Possible outcomes are:

1. RECOMMEND
   Evidence supports the solution for the actual project context.

2. REJECT
   Evidence shows the solution is inappropriate for the actual project
   context.

3. NO RECOMMENDATION
   Evidence is insufficient or conflicting and the decision parameters cannot
   yet be established.

If the result is NO RECOMMENDATION:

DO NOT PATCH.

Research or audit further.

Uncertainty MUST NOT be disguised as confidence.

### 16.10 Recommendation Gate Applies Before User-Facing Advice

This law applies before implementation AND before presenting a concrete
solution to the user as the recommended approach.

The agent MUST NOT burden the user with an inadequately validated solution and
expect the user to discover its contextual flaws.

Exploratory possibilities may be discussed when explicitly identified as
unvalidated candidates.

They MUST NOT be represented as recommendations until this law has been
satisfied.

### 16.11 Core Rules

VALID != BEST PRACTICE

COMPLIANT != PROFESSIONAL PATTERN

REQUIREMENT EVIDENCE != SOLUTION EVIDENCE

OBSERVED PRACTICE != JUSTIFICATION

PROFESSIONAL CONSENSUS != PROJECT FIT

COMMON COMPONENT != CORRECT COMPONENT

TECHNICALLY CORRECT != CONTEXTUALLY CORRECT

If a recommendation cannot be justified for the actual use case:

NO RECOMMENDATION.
DO NOT PATCH.

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
