// src/stories/components/Modal.stories.tsx

import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Modal } from '../../components/Modal';
import { Button } from '../../components/Button';
import { userEvent, within, screen } from '@storybook/test';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
};

export default meta;

// The story needs to manage the open/closed state of the modal
const InteractiveModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2>Modal Title</h2>
        <p>This is the content of the modal. Press Escape to close.</p>
        <Button variant="secondary" onClick={() => setIsOpen(false)}>
          Close
        </Button>
      </Modal>
    </>
  );
};

export const Default: StoryObj = {
  render: () => <InteractiveModal />,
  // The play function is only included when running in a 'test' environment
  play: process.env.NODE_ENV === 'test'
    ? async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        await userEvent.click(canvas.getByText('Open Modal'));
        await userEvent.keyboard('{Escape}');
      }
    : undefined,
};