// src/stories/tokens/Colors.stories.tsx

import type { Meta, StoryObj } from '@storybook/react';
import { colors } from '../../tokens/colors'; // Import your colors

const meta: Meta = {
  title: 'Design Tokens/Colors', // This will create the folder structure in the Storybook sidebar
};

export default meta;

// A helper component to display a color swatch
const ColorSwatch = ({ name, color }) => (
  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
    <div
      style={{
        width: '50px',
        height: '50px',
        backgroundColor: color,
        borderRadius: '4px',
        border: '1px solid #ccc',
        marginRight: '1rem',
      }}
    />
    <div>
      <div style={{ fontWeight: 'bold' }}>{name}</div>
      <div>{color}</div>
    </div>
  </div>
);

export const Palette: StoryObj = {
  render: () => (
    <div>
      <h1>Color Palette</h1>
      <ColorSwatch name="Primary" color={colors.primary} />
      <ColorSwatch name="Secondary" color={colors.secondary} />
      <hr style={{ margin: '1rem 0' }} />
      {Object.entries(colors.neutral).map(([name, value]) => (
        <ColorSwatch key={name} name={`Neutral ${name}`} color={value} />
      ))}
    </div>
  ),
};