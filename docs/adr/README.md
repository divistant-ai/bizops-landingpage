# Architecture Decision Records (ADR)

An Architecture Decision Record (ADR) captures an important architectural decision made along with its context and consequences.

## What is an ADR?

An ADR is a document that captures:

- **Context:** The situation that forces a decision
- **Decision:** The response to the forces
- **Consequences:** The resulting context after applying the decision

## ADR Format

Each ADR follows this template:

```markdown
# [Number]. [Title]

Date: [YYYY-MM-DD]
Status: [Proposed | Accepted | Deprecated | Superseded by [ADR-XXX]]
Deciders: [Names]

## Context

What is the issue that we're seeing that is motivating this decision or change?

## Decision

What is the change that we're proposing or have agreed to implement?

## Consequences

What becomes easier or more difficult to do and any risks introduced by the change that will need to be mitigated.

### Positive

-

### Negative

-

### Neutral

-

## References

-
```

## ADR Index

| Number | Title                                  | Date       | Status   |
| ------ | -------------------------------------- | ---------- | -------- |
| 0001   | Record Architecture Decisions          | 2024-01-28 | Accepted |
| 0002   | Use Next.js App Router                 | 2024-01-28 | Accepted |
| 0003   | Use Tailwind CSS for Styling           | 2024-01-28 | Accepted |
| 0004   | Use next-intl for Internationalization | 2024-01-28 | Accepted |
| 0005   | Use Vitest and Playwright for Testing  | 2024-01-28 | Accepted |

## How to Create a New ADR

1. Copy `template.md` to `NNNN-title-with-dashes.md`
2. Fill in the sections
3. Update this index
4. Submit a PR for review

## Status Meanings

- **Proposed:** Under discussion, not yet accepted
- **Accepted:** Agreed upon, currently in effect
- **Deprecated:** No longer relevant, but kept for historical context
- **Superseded:** Replaced by a newer ADR
