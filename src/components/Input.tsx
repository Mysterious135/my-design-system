// src/components/Input.tsx

import React from 'react';
import styles from './Input.module.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  error?: string;
}

export const Input = ({ id, label, error, ...props }: InputProps) => {
  return (
    <div className={styles.container}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input
        id={id}
        className={`${styles.input} ${error ? styles.error : ''}`}
        {...props}
      />
      {error && <p className={styles.errorMessage}>{error}</p>}
    </div>
  );
};