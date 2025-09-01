// src/stories/components/BarChart.stories.tsx

import type { Meta, StoryObj } from '@storybook/react';
import { BarChart } from '../../components/BarChart';

const meta: Meta<typeof BarChart> = {
  title: 'Components/BarChart',
  component: BarChart,
  tags: ['autodocs'],
};

export default meta;

const sampleData = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 800 },
  { name: 'May', value: 500 },
  { name: 'Jun', value: 700 },
];

export const Default: StoryObj<typeof BarChart> = {
  args: {
    data: sampleData,
    chartTitle: 'Monthly Revenue',
    chartDescription: 'A bar chart showing revenue per month for the first half of the year.',
  },
};