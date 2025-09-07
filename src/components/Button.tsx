// src/components/Button.tsx

import React from 'react';
import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The content to display inside the button.
   */
  children: React.ReactNode;
  /**
   * Determines the button's visual style.
   */
  variant?: 'primary' | 'secondary';
}

/**
 * The primary UI component for user interaction. Accepts standard button props.
 */
export const Button = ({
  children,
  variant = 'primary',
  ...props
}: ButtonProps) => {
  const buttonClass = `${styles.button} ${styles[variant]}`;

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
};