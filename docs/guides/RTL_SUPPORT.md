# RTL (Right-to-Left) Language Support Preparation

This document outlines the preparation needed to support RTL languages (Arabic, Hebrew, Persian, etc.) in the BizOps website.

## Current Status

**RTL Support: Partially Ready**

The application has been designed with future RTL support in mind, but requires additional configuration and testing before full deployment.

## Required Changes

### 1. CSS/Tailwind Configuration

#### Add RTL Support to Tailwind

Update `tailwind.config.ts`:

```typescript
export default {
  // ... existing config
  corePlugins: {
    textAlign: true,
  },
  plugins: [
    require('tailwindcss-rtl'), // Add this plugin
  ],
};
```

Install the plugin:

```bash
npm install tailwindcss-rtl
```

#### Update CSS Reset

Ensure the base CSS supports direction changes:

```css
/* In your global CSS */
html {
  direction: ltr;
}

html[dir='rtl'] {
  direction: rtl;
}

/* Flip icons and images that need directional awareness */
.flip-rtl {
  transform: scaleX(-1);
}

/* Logical properties for spacing */
.margin-inline-start {
  margin-inline-start: 1rem;
}

.margin-inline-end {
  margin-inline-end: 1rem;
}
```

### 2. Component Updates

#### Replace Physical Properties with Logical Properties

| Instead of             | Use                    |
| ---------------------- | ---------------------- |
| `ml-4` (margin-left)   | `ms-4` (margin-start)  |
| `mr-4` (margin-right)  | `me-4` (margin-end)    |
| `pl-4` (padding-left)  | `ps-4` (padding-start) |
| `pr-4` (padding-right) | `pe-4` (padding-end)   |
| `text-left`            | `text-start`           |
| `text-right`           | `text-end`             |
| `border-l`             | `border-s`             |
| `border-r`             | `border-e`             |
| `rounded-l-lg`         | `rounded-s-lg`         |
| `rounded-r-lg`         | `rounded-e-lg`         |
| `left-0`               | `start-0`              |
| `right-0`              | `end-0`                |

#### Update Icon Components

Icons that indicate direction should flip in RTL:

```tsx
// ArrowIcon.tsx
interface ArrowIconProps {
  direction: 'left' | 'right';
  className?: string;
}

export function ArrowIcon({ direction, className }: ArrowIconProps) {
  // Icons that indicate direction should flip in RTL
  const shouldFlip = direction === 'left' || direction === 'right';

  return (
    <svg
      className={cn(className, shouldFlip && 'rtl:scale-x-[-1]')}
      // ... svg props
    >
      {/* icon path */}
    </svg>
  );
}
```

### 3. Layout Components

#### Direction-Aware Layouts

```tsx
// Layout.tsx
import { useLocale } from 'next-intl';

export function Layout({ children }: { children: React.ReactNode }) {
  const locale = useLocale();
  const isRTL = ['ar', 'he', 'fa'].includes(locale);

  return (
    <html lang={locale} dir={isRTL ? 'rtl' : 'ltr'}>
      <body>{children}</body>
    </html>
  );
}
```

#### Navigation Components

Update navigation to support RTL:

```tsx
// Navbar.tsx
export function Navbar() {
  return (
    <nav className="flex items-center justify-between">
      {/* Logo - stays on the logical start */}
      <div className="flex items-center gap-4">
        <Logo />
      </div>

      {/* Navigation items */}
      <div className="flex items-center gap-6">
        {/* Links will automatically adjust in RTL */}
        <NavLink href="/pricing">{t('pricing')}</NavLink>
        <NavLink href="/contact">{t('contact')}</NavLink>
      </div>
    </nav>
  );
}
```

### 4. Form Components

#### Input Alignment

```tsx
// TextInput.tsx
export function TextInput({ label, ...props }: TextInputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-start">{label}</label>
      <input className="px-4 py-2 text-start" {...props} />
    </div>
  );
}
```

### 5. Typography

#### Font Configuration

Add RTL-compatible fonts to `tailwind.config.ts`:

```typescript
fontFamily: {
  sans: [
    'var(--font-sans)',
    'Plus Jakarta Sans',
    'system-ui',
    'sans-serif',
  ],
  // Add RTL-specific fonts
  arabic: [
    'Noto Sans Arabic',
    'Tahoma',
    'Arial',
    'sans-serif',
  ],
}
```

#### Font Loading

For Arabic/Hebrew, use appropriate fonts:

```typescript
// In layout.tsx or next.config.ts
import { Noto_Sans_Arabic } from 'next/font/google';

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ['arabic'],
  variable: '--font-arabic',
});
```

### 6. Date and Number Formatting

Ensure dates and numbers are formatted correctly:

```tsx
import { useFormatter } from 'next-intl';

export function DateDisplay({ date }: { date: Date }) {
  const format = useFormatter();

  // next-intl automatically handles RTL formatting
  return <time>{format.dateTime(date)}</time>;
}
```

### 7. Testing RTL

#### Browser Testing

Test the following in RTL mode:

- [ ] All navigation flows
- [ ] Form submissions
- [ ] Calculator tools
- [ ] Modal dialogs
- [ ] Mobile responsiveness
- [ ] Print layouts

#### Visual Regression

Add RTL variants to visual tests:

```typescript
// In your Playwright tests
test('homepage RTL', async ({ page }) => {
  await page.goto('/ar'); // Arabic version
  await expect(page).toHaveScreenshot('homepage-rtl.png');
});
```

### 8. Content Considerations

#### Text Expansion

Arabic text can be 20-30% shorter than English, but some languages like German expand. Test with:

```css
/* Minimum widths for buttons */
.btn {
  min-width: 120px;
}

/* Flexible containers */
.card {
  min-height: 200px;
}
```

#### Bidirectional Text

For mixed content (English + Arabic):

```tsx
// Use the <bdi> tag for bidirectional isolation
<p>
  <bdi>Username: {userName}</bdi>
</p>

// Or use CSS
.isolate-text {
  unicode-bidi: isolate;
}
```

## Implementation Timeline

### Phase 1: Foundation (1 week)

- [ ] Install tailwindcss-rtl plugin
- [ ] Update tailwind.config.ts
- [ ] Create RTL-specific CSS utilities
- [ ] Update layout component

### Phase 2: Component Updates (2 weeks)

- [ ] Audit all components for RTL issues
- [ ] Replace physical properties with logical properties
- [ ] Update icon components
- [ ] Test navigation flow

### Phase 3: Content & QA (1 week)

- [ ] Add Arabic translations
- [ ] Browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Mobile testing
- [ ] Visual regression testing

### Phase 4: Deployment (1 day)

- [ ] Enable Arabic locale
- [ ] Monitor for issues
- [ ] Document known limitations

## Browser Support

RTL layouts are supported in all modern browsers:

- Chrome 88+
- Firefox 78+
- Safari 14+
- Edge 88+

## Resources

- [MDN: Logical Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties)
- [Tailwind CSS RTL Plugin](https://github.com/20lives/tailwindcss-rtl)
- [RTL Styling Guide](https://rtlstyling.com/)
- [W3C: Internationalization](https://www.w3.org/standards/techs/i18n#w3c_all)

## Checklist

Before enabling RTL languages:

- [ ] All CSS uses logical properties (ms-_, me-_, ps-_, pe-_)
- [ ] Icons flip correctly where needed
- [ ] Forms align properly
- [ ] Navigation works in both directions
- [ ] Dates/numbers format correctly
- [ ] Text doesn't overflow containers
- [ ] Mobile layout works correctly
- [ ] Print styles are correct
- [ ] Visual regression tests pass
- [ ] Accessibility tests pass (screen readers)

---

**Note:** This is a preparation document. RTL support is not yet fully implemented and should be completed before adding Arabic or Hebrew translations.

Last Updated: 2024-12-01
