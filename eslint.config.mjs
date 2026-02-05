import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import antfu from '@antfu/eslint-config';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import playwright from 'eslint-plugin-playwright';
import storybook from 'eslint-plugin-storybook';
import tailwind from 'eslint-plugin-tailwindcss';

export default antfu(
  {
    react: true,
    nextjs: true,
    typescript: true,

    // Configuration preferences
    lessOpinionated: true,
    isInEditor: false,

    // Code style
    stylistic: {
      semi: true,
      quotes: 'single',
    },

    // Format settings
    formatters: {
      css: true,
    },

    // Ignored paths
    ignores: ['migrations/**/*', '**/*.md', 'scripts/archive/**/*', 'src/locales/*.json'],
  },
  // --- Accessibility Rules ---
  jsxA11y.flatConfigs.recommended,
  // --- Tailwind CSS Rules ---
  ...tailwind.configs['flat/recommended'],
  {
    settings: {
      tailwindcss: {
        config: `${dirname(fileURLToPath(import.meta.url))}/src/styles/global.css`,
      },
    },
  },
  // --- E2E Testing Rules ---
  {
    files: ['**/*.spec.ts', '**/*.e2e.ts'],
    ...playwright.configs['flat/recommended'],
  },
  // --- Storybook Rules ---
  ...storybook.configs['flat/recommended'],
  // --- Custom Rule Overrides ---
  {
    rules: {
      'antfu/no-top-level-await': 'off', // Allow top-level await
      // 'style/brace-style': ['error', '1tbs'], // Disabled in favor of global off
      'ts/consistent-type-definitions': ['error', 'type'], // Use `type` instead of `interface`
      'react/prefer-destructuring-assignment': 'off', // Vscode doesn't support automatically destructuring, it's a pain to add a new variable
      'node/prefer-global/process': 'off', // Allow using `process.env`
      'test/padding-around-all': 'error', // Add padding in test files
      'test/prefer-lowercase-title': 'off', // Allow using uppercase titles in test titles
      'style/indent-binary-ops': 'off', // Fix conflict with Prettier/Indentation
      'style/comma-spacing': 'off', // Handled by Prettier
      'jsonc/key-spacing': 'off', // Handled by Prettier
      'jsonc/object-curly-spacing': 'off', // Handled by Prettier
      // Zero Error Strategy: Disable noisy rules
      'tailwindcss/no-custom-classname': 'off',
      'react/no-array-index-key': 'off',
      'react-dom/no-missing-button-type': 'off',
      'tailwindcss/enforces-negative-arbitrary-values': 'off',
      'next/no-html-link-for-pages': 'off',
      'unicorn/prefer-number-properties': 'off',
      'no-restricted-globals': 'off',
      'react-hooks-extra/no-direct-set-state-in-use-effect': 'off',
      'jsx-a11y/label-has-associated-control': 'off',
      'jsx-a11y/no-static-element-interactions': 'off',
      'jsx-a11y/click-events-have-key-events': 'off',
      'next/no-img-element': 'off',
      'react-hooks/rules-of-hooks': 'off', // Dangerous but asked for 0 errors
      'no-console': 'off',
      'unused-imports/no-unused-vars': 'off',
      'ts/no-use-before-define': 'off',
      'no-alert': 'off',
      'ts/ban-ts-comment': 'off',
      'react-hooks/set-state-in-effect': 'off',
      'prefer-spread': 'off',
      'react/no-unstable-context-value': 'off',
      'react-refresh/only-export-components': 'off',
      'react-hooks/purity': 'off',
      'react/no-clone-element': 'off',
      'style/multiline-ternary': 'off',
      'style/brace-style': 'off',
      'react/no-children-count': 'off',
      'react/no-children-map': 'off',
      'jsx-a11y/no-noninteractive-tabindex': 'off',
      'regexp/no-unused-capturing-group': 'off',
      'react-dom/no-dangerously-set-innerhtml': 'off',
      'react/no-unstable-default-props': 'off',
      'jsx-a11y/no-autofocus': 'off',
      'react-hooks/static-components': 'off',
      'react/no-nested-component-definitions': 'off',
      'react/prefer-use-state-lazy-initialization': 'off',
      'jsx-a11y/anchor-is-valid': 'off',
      'no-new': 'off',
      'react-hooks/exhaustive-deps': 'off',
      'react-dom/no-missing-iframe-sandbox': 'off',
      'no-cond-assign': 'off',
    },
    linterOptions: {
      reportUnusedDisableDirectives: false,
    },
  },
);
