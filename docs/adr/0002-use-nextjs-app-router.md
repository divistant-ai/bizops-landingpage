# 2. Use Next.js App Router

Date: 2024-01-28
Status: Accepted
Deciders: BizOps Team

## Context

We need to choose a routing strategy for our Next.js application. The options were:

1. Pages Router (traditional)
2. App Router (newer, using React Server Components)

## Decision

We will use the Next.js App Router for all new development.

## Consequences

### Positive

- Better performance with React Server Components
- Improved SEO with built-in metadata API
- Simplified data fetching with async components
- Better loading and error states with loading.tsx and error.tsx
- Layouts are more powerful and composable

### Negative

- Learning curve for team members familiar with Pages Router
- Some third-party libraries may not fully support App Router yet
- Migration complexity from existing Pages Router code

### Neutral

- Requires Node.js 18+ (we already use Node 20+)
- Different mental model for data fetching

## References

- [Next.js App Router Docs](https://nextjs.org/docs/app)
- [App Router Upgrade Guide](https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration)
