// src/stories/tokens/Typography.stories.tsx

import type { Meta, StoryObj } from '@storybook/react';
import { typography } from '../../tokens/typography'; // Import your typography tokens

const meta: Meta = {
  title: 'Design Tokens/Typography',
};

export default meta;

export const TypeScale: StoryObj = {
  render: () => (
    <div>
      <h1>Typography</h1>
      <p>
        Font Family (Sans):{' '}
        <span style={{ fontFamily: typography.fontFamily.sans }}>
          The quick brown fox jumps over the lazy dog.
        </span>
      </p>
      <hr style={{ margin: '1rem 0' }} />
      <h2>Font Sizes</h2>
      {Object.entries(typography.fontSize).map(([name, size]) => (
        <p key={name} style={{ fontSize: size }}>
          <strong style={{ textTransform: 'uppercase' }}>{name}</strong> ({size}) - The quick brown fox jumps over the lazy dog.
        </p>
      ))}
      <hr style={{ margin: '1rem 0' }} />
      <h2>Font Weights</h2>
      {Object.entries(typography.fontWeight).map(([name, weight]) => (
        <p key={name} style={{ fontWeight: weight }}>
          <strong style={{ textTransform: 'capitalize' }}>{name}</strong> ({weight}) - The quick brown fox jumps over the lazy dog.
        </p>
      ))}
    </div>
  ),
};