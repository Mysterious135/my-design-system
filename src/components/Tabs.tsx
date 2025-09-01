// src/components/Tabs.tsx

import React, { useState } from 'react';
import styles from './Tabs.module.css';

interface Tab {
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
}

export const Tabs = ({ tabs }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    let newIndex = index;
    if (event.key === 'ArrowRight') {
      newIndex = (index + 1) % tabs.length;
    } else if (event.key === 'ArrowLeft') {
      newIndex = (index - 1 + tabs.length) % tabs.length;
    }

    if (newIndex !== index) {
      setActiveTab(newIndex);
      // Focus the new tab button
      const nextTab = document.getElementById(`tab-${newIndex}`);
      nextTab?.focus();
    }
  };

  return (
    <div>
      <div className={styles.tablist} role="tablist" aria-label="Content tabs">
        {tabs.map((tab, index) => (
          <button
            key={tab.label}
            id={`tab-${index}`}
            role="tab"
            aria-selected={activeTab === index}
            aria-controls={`panel-${index}`}
            tabIndex={activeTab === index ? 0 : -1} // Roving tabindex
            onClick={() => setActiveTab(index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className={styles.tab}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {tabs.map((tab, index) => (
        <div
          key={tab.label}
          id={`panel-${index}`}
          role="tabpanel"
          aria-labelledby={`tab-${index}`}
          hidden={activeTab !== index}
          className={styles.tabpanel}
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
};