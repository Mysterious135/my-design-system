// src/stories/components/Input.stories.tsx

import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../../components/Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    error: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    id: 'default-input',
    label: 'Your Name',
    placeholder: 'e.g., Jane Doe',
  },
};

export const WithError: Story = {
  args: {
    id: 'error-input',
    label: 'Email Address',
    placeholder: 'you@example.com',
    error: 'This email is already taken.',
    value: 'taken@example.com',
  },
};

export const Disabled: Story = {
  args: {
    id: 'disabled-input',
    label: 'Company Name',
    placeholder: 'Cannot be edited',
    disabled: true,
  },
};