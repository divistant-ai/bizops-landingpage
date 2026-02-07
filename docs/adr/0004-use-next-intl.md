# 4. Use next-intl for Internationalization

Date: 2024-01-28
Status: Accepted
Deciders: BizOps Team

## Context

We need to support multiple languages (Indonesian and English) on the website. Options considered:

1. next-intl
2. next-i18next
3. react-i18next
4. Custom implementation

## Decision

We will use next-intl for internationalization.

## Consequences

### Positive

- Designed specifically for Next.js App Router
- Type-safe translations
- Built-in formatting for dates, numbers, and lists
- Supports both server and client components
- Easy to integrate with middleware for locale detection

### Negative

- Smaller community than react-i18next
- Some features still evolving for App Router
- Requires careful handling of static/dynamic rendering

### Neutral

- JSON-based translation files
- Requires Crowdin or similar for translation management

## References

- [next-intl Documentation](https://next-intl-docs.vercel.app/)
- [Next.js i18n Routing](https://nextjs.org/docs/app/building-your-application/routing/internationalization)
