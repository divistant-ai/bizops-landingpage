# 5. Use Vitest and Playwright for Testing

Date: 2024-01-28
Status: Accepted
Deciders: BizOps Team

## Context

We need a comprehensive testing strategy. Options considered:

1. Vitest + Playwright
2. Jest + React Testing Library + Cypress
3. Jest + React Testing Library + Playwright

## Decision

We will use Vitest for unit and integration tests, and Playwright for end-to-end tests.

## Consequences

### Positive

- Vitest is faster than Jest (native ES modules support)
- Better TypeScript support out of the box
- Playwright is faster and more reliable than Cypress
- Playwright has better debugging tools
- Both have excellent VS Code extensions

### Negative

- Smaller community than Jest (but growing rapidly)
- Some Jest plugins may not work with Vitest
- Team may need training on new tools

### Neutral

- Vitest API is similar to Jest (easy migration)
- Both support coverage reporting

## References

- [Vitest Documentation](https://vitest.dev/)
- [Playwright Documentation](https://playwright.dev/)
- [Testing Best Practices](./TESTING.md)
