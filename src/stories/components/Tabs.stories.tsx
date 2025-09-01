// src/stories/components/Tabs.stories.tsx

import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from '../../components/Tabs';
import { userEvent, within, expect } from '@storybook/test';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
};

export default meta;

const sampleTabs = [
  { label: 'Tab 1', content: <div>Content for the first tab.</div> },
  { label: 'Tab 2', content: <div>Content for the second tab. ✌️</div> },
  { label: 'Tab 3', content: <div>Content for the third tab. 🎉</div> },
];

export const Default: StoryObj<typeof Tabs> = {
  args: { tabs: sampleTabs },
  // The play function is only included when running in a 'test' environment
  play: process.env.NODE_ENV === 'test'
    ? async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const tab3 = await canvas.findByRole('tab', { name: 'Tab 3' });
        await userEvent.click(tab3);
        await expect(tab3.getAttribute('aria-selected')).toBe('true');
        await userEvent.keyboard('{arrowleft}');
        const tab2 = await canvas.findByRole('tab', { name: 'Tab 2' });
        await expect(tab2.getAttribute('aria-selected')).toBe('true');
      }
    : undefined,
};