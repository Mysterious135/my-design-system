// src/components/Button.tsx

import React from 'react';
import styles from './Button.module.css'; // Import the CSS module

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

export const Button = ({
  children,
  variant = 'primary',
  ...props
}: ButtonProps) => {
  // Combine the base button style with the variant style
  const buttonClass = `${styles.button} ${styles[variant]}`;

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
};