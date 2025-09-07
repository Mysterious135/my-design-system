# Contributing to the Design System

We're excited you want to contribute! This guide will help you get started.

## Guiding Principles

- **Consistency:** Components should look and feel like they belong to the same family.
- **Accessibility:** All components must meet WCAG 2.1 AA standards.
- **Reusability:** Build components that are flexible enough to be used in multiple contexts.

## The Golden Rule: Use Tokens

**Do not use hard-coded values for colors, spacing, or fonts.** All styling must come from the defined design tokens in `src/tokens`.

- **If you need a new style:** First, consider if an existing token can be used.
- **If a new token is needed:** Propose the change to the core team. Add the token to the `light.ts` and `dark.ts` themes and update the token stories.

## Workflow

1.  Create a new branch for your feature or bug fix.
2.  Build your component in Storybook. Write stories for all relevant states.
3.  Ensure all CI checks (a11y, visual, bundle size) are passing.
4.  Open a pull request for review.