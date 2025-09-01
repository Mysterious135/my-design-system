// src/components/Modal.tsx

import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import FocusTrap from 'focus-trap-react';
import styles from './Modal.module.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  // Close the modal when the 'Escape' key is pressed
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  if (!isOpen) return null;

  // Use a Portal to render the modal at the root of the document
  return ReactDOM.createPortal(
    <FocusTrap>
      <div
        className={styles.overlay}
        onClick={onClose}
        role="dialog"
        aria-modal="true"
      >
        <div className={styles.content} onClick={(e) => e.stopPropagation()}>
          <button className={styles.closeButton} onClick={onClose} aria-label="Close modal">
            &times;
          </button>
          {children}
        </div>
      </div>
    </FocusTrap>,
    document.body
  );
};